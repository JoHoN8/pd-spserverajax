/**
    app name pd-spservercontacts
    requires babel polyfill for object assign and promise
    only needs encodeAccountName, getURLOrigin from pd-sputil
    needs all of axios
 */

import * as axios from 'axios';
import {encodeAccountName, getURLOrigin} from 'pd-sputil';

const minimalMeta = "application/json;odata=minimalmetadata";
const ajaxJsonContentType = "application/json;odata=verbose";
const createlistitemtype = function(listName) {
    return 'SP.Data.' + 
        listName.charAt(0).toUpperCase() + 
        listName.slice(1) + 
        'ListItem';
};
const guidHexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const createGUID = function() {
    var result = '';

    for (var index = 0; index < 32; index++) {
        var value = Math.floor(Math.random() * 16);

        switch (index) {
        case 8:
            result += '-';
            break;
        case 12:
            value = 4;
            result += '-';
            break;
        case 16:
            value = value & 3 | 8;
            result += '-';
            break;
        case 20:
            result += '-';
            break;
        }
        result += guidHexCodes[value];
    }
    return result;
};
const checkUrlOrigin = function(props) {

    props.configuredUrl = props.origin ? props.origin : getURLOrigin();

    if(props.url) {
        props.configuredUrl += props.url;
    }

    if(props.endPoint) {
        props.configuredUrl += `/${props.endPoint}`;
    }
    return props;

    //fell through so the incorrect datatype was passed to function, error
};
const listUrlConfigure = function(props) {

    if (!props.url || props.listUrl) {
        return;
    }

    props.endPoint = "_api/web";

    checkUrlOrigin(props);

    if (props.listGUID) {
        props.listUrl = props.configuredUrl += "/lists(guid'"+ props.listGUID +"')";
    } else if (props.listTitle) {
        props.listUrl = props.configuredUrl += "/lists/getbytitle('"+ props.listTitle +"')";
    }
    return props;
};
const listItemUrlConfigure = function(props) {
    //for create, update, delete
    var item = props.itemId || '';

    if (props.listItemUrl) {
        return;
    }

    listUrlConfigure(props);

    props.listItemUrl = props.listUrl += "/items("+ item +")";
    return props;
};
const getEntityType = function(props) {

    var entityData;

    if (props.listName) {
        entityData = createlistitemtype(props.listName);
        return Promise.resolve(entityData);
    }

    return ajaxGetListInfo(props)
    .then(function(response) {
        return response.data.ListItemEntityTypeFullName;
    });
};
const nonDeleteProcess = function(props) {

    if(!props.headerData) {
        props.headerData = {};
    }

    return getEntityType(props)
    .then(function(type) {
        props.item = Object.assign({
            '__metadata': {'type': type}
        }, props.infoToServer);

        return ajaxGetContext(props);
    }).then(function(context) {

        props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
        props.headerData.Accept = 'application/json; odata=minimalmetadata';
        props.headerData['Content-Type'] = ajaxJsonContentType;

        listItemUrlConfigure(props);

        return axios({
            url: props.listItemUrl,
            method: 'POST',
            data: JSON.stringify(props.item),
            headers: props.headerData
        });
    });
};
const deleteProcess = function(props) {

    if(!props.headerData) {
        props.headerData = {};
    }

    return ajaxGetContext(props)
    .then(function(context) {

        props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
        props.headerData.Accept = 'application/json; odata=minimalmetadata';
        props.headerData['Content-Type'] = ajaxJsonContentType;

        listItemUrlConfigure(props);

        if (props.urlModifier) {
            props.listItemUrl += props.urlModifier;
        }

        return axios({
            url: props.listItemUrl,
            method: 'POST',
            headers: props.headerData
        });
    });
};
const parseBasePermissions = function(value) {
    var permissions = new SP.BasePermissions();
    permissions.initPropertiesFromJson(value);
    var permLevels = [];
    for(var permLevelName in SP.PermissionKind.prototype) {
        if (SP.PermissionKind.hasOwnProperty(permLevelName)) {
            var permLevel = SP.PermissionKind.parse(permLevelName);
            if(permissions.has(permLevel)){
                    permLevels.push(permLevelName);
            }
        }     
    }
    return permLevels;   
};
const createGetAllUrl = function(props) {

    if(props.listUrl) {
        //already setup, get out
        return;
    }
    if(!props.endPoint) {
        props.endPoint = "_api/web";
    }
    listUrlConfigure(props);

    props.listUrl += "/items?";

    if(props.select) {
        props.listUrl += `$select=${props.select}&`;
    }
    if(props.top) {
        props.listUrl += `$top=${props.top}&`;
    }
    if(props.expand) {
        props.listUrl += `$expand=${props.expand}&`;
    }
    if(props.filter) {
        props.listUrl += `$filter=${props.filter}&`;
    }
    if(props.orderBy) {
        props.listUrl += `$orderby=${props.orderBy}&`;
    }

    if(/\$$/.test(props.listUrl)) {
        //if $ is the last character then get rid of it
        props.listUrl.slice(0,-1);
    }

};
const ajaxGetUserPermissions = function(props) {

    return ajaxGetData(props.permsLink)
    .then(function(response) {
        return parseBasePermissions(response.data);
    });
};
const depTest = function() {
    if (!Promise || !Object.assign) {
        throw new Error("Promise API is not available. Please add a polyfill as a dependency to continue.");
    }
    if (!axios) {
        throw new Error("axios API is not available. Please add a axios as a dependency to continue.");
    }
    if (!encodeAccountName || !getURLOrigin) {
        throw new Error("pd-sputil API is not available. Please add a pd-sputil as a dependency to continue.");
    }
};

depTest();

/**
 * Gets a context object for server requests.
 * origin is optional
 * url is site relative url
 * returns a promise
 * the key from response is FormDigestValue
 * @param {{origin:string, url:string}} props
 * @returns {promise}
 */
export function ajaxGetContext(props) {
    
    props.endPoint = "_api/contextinfo";
    checkUrlOrigin(props);

    return axios({
        method: "POST",
        headers: { "Accept": "application/json; odata=minimalmetadata" },
        url: props.configuredUrl,
    }).then((response) => {
        props.endPoint = null;
        props.configuredUrl = null;
        return response;
    });
}
/**
 * Returns a promise
 * url is full odata url
 * @param {string} url
 * @returns {promise}
 */
export function ajaxGetData(url) {

    return axios({
        method: 'GET',
        headers: {'Accept': 'application/json; odata=minimalmetadata'},
        url: url
    });
}
/**
 * Gets all results for server requests.
 * url is site relative url
 * either pass listGUID or listTitle but not both
 * 
 * the following are optional
 * origin
 * select
 * filter
 * expand
 * top
 * orderby
 * 
 * returns a promise
 * once the promise resolves you get an array of objects that are the servers response
 * @param {{origin:string, url:string, listGUID:string, listTitle:string, select:string, filter:string, expand:string, top:string, orderBy:string}} props
 * @returns {promise}
 */
export function ajaxGetAllListResults(props) {

    if(!props.listGUID && !props.listTitle) {
        return Promise.reject("must pass listGUID or listTitle to ajaxGetAllListResults");
    }

    createGetAllUrl(props);

    return ajaxGetData(props.listUrl)
    .then(function(response) {
        var currentResults = props.allResults || [],
            responseData = response.data;

        props.allResults = currentResults.concat(responseData.value);
        
        if (responseData['odata.nextLink']) {
            props.listUrl = responseData['odata.nextLink'];
            return ajaxGetAllListResults(props);
        }
        return props.allResults;
    });
}
const ajaxGetBatch = function(props, arrayOfUrls) {

    var batchGUID = createGUID(),
        batchBody,
        batchHeader,
        batchContents = [];

    //batch (operation)
    arrayOfUrls.forEach(function(item) {
        batchContents.push('--batch_' + batchGUID);
        batchContents.push('Content-Type: application/http');
        batchContents.push('Content-Transfer-Encoding: binary');
        batchContents.push('');
        batchContents.push('GET ' + item + ' HTTP/1.1');
        batchContents.push(`Accept: ${minimalMeta}`);
        batchContents.push('');
    });

    batchContents.push('--batch_' + batchGUID + '--');

    batchBody = batchContents.join('\r\n');

    return ajaxGetContext(props)
    .then((response) => {

        props.endPoint = '_api/$batch';
        checkUrlOrigin(props);

        batchHeader = {
        'X-RequestDigest': response.data.FormDigestValue,
        'Content-Type': 'multipart/mixed; boundary="batch_' + batchGUID + '"'
        };
        
        return axios({
            url: props.configuredUrl,
            method: 'POST',
            data: batchBody,
            headers: batchHeader
        }).then(function(response) {
            var parsedArray = [],
                responseToArray = response.data.split('\n');

            for (var currentLine = 0; currentLine < responseToArray.length; currentLine++) {
                if (responseToArray[currentLine].charAt(0) === '{') {
                try {
                    // parse the JSON response...
                    var tryParseJson = JSON.parse(responseToArray[currentLine]);

                    parsedArray.push(tryParseJson);

                } catch (e) {
                    // don't do anything... just keep moving
                }
                }
            }

            return parsedArray;

        });
    });

};
/**
 * Returns a promise
 * origin is optional
 * url is a relative url of the site that contains the data
 * once the promise resolves you get an array of objects that are the servers response
 * @param {{origin:string, url:string, getUrls:string[]}} props
 * @returns {promise}
 */
export function ajaxGetBatchMetered(props) {
    let urlsForTrip = [],
        perTripCount = 0;

    props.totalItems = props.getUrls.length;
    props.totalPerTrip = 50;
    props.allResults = [];
    props.numberToStartAt = 0;

    for (; props.numberToStartAt < props.totalItems; props.numberToStartAt++) {
        let url = props.getUrls[props.numberToStartAt];
        urlsForTrip.push(url);
        perTripCount++;

        if (perTripCount === props.totalPerTrip) {
            props.numberToStartAt++;
            break;
        }
    }

    return ajaxGetBatch({origin: props.origin, url: props.url}, urlsForTrip)
    .then(function(response) {
        props.allResults = props.allResults.concat(response);

        if (props.numberToStartAt < props.totalItems) {
            return ajaxGetBatchMetered(props);
        }

        return props.allResults;
    });
}
/**
 * Returns a promise
 * origin is optional
 * url is a relative url of the site that contains the data
 * profileEmails is an array of email addresses whos profiles will be retrieved
 * once the promise resolves you get an array of objects that are the servers response
 * @param {{origin:string, url:string, profileEmails:string[]}} props
 * @returns {promise}
 */
export function ajaxGetBatchProfiles(props) {
    let profileUrls = null;
    if (!props.profileEmails || props.profileEmails.length === 0) {
        throw new Error("profile emails must be provided when calling the batch profile function");
    }

    props.origin = getURLOrigin();
    profileUrls = [];

    let urlForSite = props.origin + props.url;
    props.profileEmails.forEach((email) => {
        let encoded = encodeAccountName(email);
        profileUrls.push(`${urlForSite}/_api/sp.userprofiles.peoplemanager/GetPropertiesFor('${encoded}')?$select=UserProfileProperties`);
    });

    let {origin, url} = props;
    
    return ajaxGetBatchMetered({
        origin: origin,
        url: url,
        getUrls: profileUrls
    });
}
/**
 * Returns a promise
 * data contained in response is the properties for a list
 * origin is optional
 * url is site relative url
 * pass listTitle or listGUID not both
 * @param {{origin:string, url:string, listGUID:string, listTitle:string}} props
 * @returns {promise}
 */
export function ajaxGetListInfo(props) {

    listUrlConfigure(props);
    return ajaxGetData(props.listUrl);
}
/**
 * Returns a promise
 * data contained in response is the people info
 * origin optional
 * url is site relative url optional
 * sourceId optional
 * query required, ex "'" + 'Bureau="'+ divisionName + '"\''
 * properties is an array of the properties you want back from search
 * @param {{origin:string, url:string, query:string, sourceId:string, properties:string[]} props
 * @returns {promise}
 */
export function ajaxPeopleSearch(props) {

    var allResults = props.currentResults || [],
        serverQueryData = {
            startrow: 0,
            rowlimit: 500,
            TrimDuplicates: false,
            selectproperties: `'${props.properties.join(',')}'`
        };

    serverQueryData.startrow = props.startrow ? props.startrow : 0;
    serverQueryData.sourceId = props.sourceId ? `'${props.sourceId}'` : "'b09a7990-05ea-4af9-81ef-edfab16c4e31'";

    props.endPoint = "_api/search/query";
    serverQueryData.querytext = `'${props.query}'`;

    checkUrlOrigin(props);

    return axios({
        url: props.configuredUrl,
        method: 'GET',
        headers: {'Accept': 'application/json; odata=minimalmetadata'},
        params: serverQueryData
    }).then(function(empData) {

        var relevantResults = empData.data.PrimaryQueryResult.RelevantResults;

        allResults = allResults.concat(relevantResults.Table.Rows);
        props.currentResults = allResults;

        if (relevantResults.TotalRows > (serverQueryData.startrow + relevantResults.RowCount)) {
            props.startrow = serverQueryData.startrow + relevantResults.RowCount;
            return ajaxPeopleSearch(props);
        } else {
            return props.currentResults;
        }
    });
}
/**
 * Returns a promise
 * data contained in response is the users info
 * origin is optional
 * url is site relative url
 * email is the email address of the user
 * @param {{origin:string, url:string, email:string}} props
 * @returns {promise}
 */
export function ajaxEnsureUser(props) {
    
    return ajaxGetContext(props)
    .then((response) => {
    
        props.endPoint = "_api/web";
        checkUrlOrigin(props);
        props.configuredUrl += `/ensureUser('${encodeAccountName(props.email)}')`;

        return axios({       
            url: props.configuredUrl,   
            method: "POST",  
            contentType: ajaxJsonContentType,
            headers: { 
                "Accept": minimalMeta,
                "X-RequestDigest": response.data.FormDigestValue
            }
        });
    });

}
/**
 * Returns a promise
 * data contained in response is the users info
 * origin is optional
 * url is site relative url
 * email is the email address of the user
 * @param {{origin:string, url:string, email:string}} props
 * @returns {promise}
 */
export function ajaxGetSiteUserInfoByEmail(props) {

    props.endPoint = "_api/web/siteusers";
    checkUrlOrigin(props);

    props.configuredUrl += `?$filter=LoginName eq '${encodeAccountName(props.email)}'`;

    return ajaxGetData(props.configuredUrl);
}
/**
 * Returns a promise
 * get results from a caml query
 * origin is optional
 * url is site relative url
 * caml is the query
 * pass eiter list giud or list title, not both
 * @param {{origin:string, url:string, query:string, listGUID:string, listTitle:string}} props
 * @returns {promise}
 */
export function ajaxGetItemsByCaml(props) {

    return ajaxGetContext(props)
    .then((response) => {

        let query = { "query" :
            {"__metadata": 
            { "type": "SP.CamlQuery" },
                "ViewXml": props.caml
            }
        },
        headerdata = {
            'Accept': 'application/json; odata=minimalmetadata',
            'Content-Type': 'application/json; odata=verbose',
            'X-RequestDigest': response.data.FormDigestValue
        };

        listUrlConfigure(props);
        props.listUrl += '/getitems';

        return axios({
            url: props.listUrl,
            method: 'POST',
            data: JSON.stringify(query),
            headers: headerdata
        });
    });

}
/**
 * Returns a promise
 * get a users permissions to site
 * the resolve is an array of permission for the user
 * origin is optional
 * url is site relative url
 * @param {{origin:string, url:string, email:string}} props
 * @returns {promise}
 */
export function ajaxGetUserSitePermissions(props) {

    let encodedEmail = encodeAccountName(props.email);

    props.endPoint = "_api/web";
    checkUrlOrigin(props);

    props.permsLink = `${props.configuredUrl}/getusereffectivepermissions(@user)?@user='${encodedEmail}'`;
    return ajaxGetUserPermissions(props);
}
/**
 * Returns a promise
 * get a users permissions to list
 * the resolve is an array of permission for the user
 * origin is optional
 * url is site relative url
 * caml is the query
 * pass eiter list giud or list title, not both
 * @param {{origin:string, url:string, email:string, listGUID:string, listTitle:string}} props
 * @returns {promise}
 */
export function ajaxGetUserListPermissions(props) {

    let encodedEmail = encodeAccountName(props.email);

    listUrlConfigure(props);

    props.permsLink = `${props.listUrl}/getusereffectivepermissions(@user)?@user='${encodedEmail}'`;
    return ajaxGetUserPermissions(props);
}
/**
 * Returns a promise
 * get the SP groups that a user is apart of
 * the resolve is an array of group names
 * origin is optional
 * url is site relative url
 * userId is the id of user in the site
 * @param {{origin:string, url:string, userId:number}} props
 * @returns {promise}
 */
export function ajaxGetCurrentUserGroups(props) {

    props.endPoint = "/_api/web";
    checkUrlOrigin(props);

    props.configuredUrl += `/GetUserbyId(${props.userId})/Groups`;

    return ajaxGetData(props.configuredUrl)
    .then(function(groups){

        var groupArray = [];

        groups.data.value.forEach(function(item) {
            groupArray.push(item.Title);
        });

        return groupArray;

    });
}
/**
 * Returns a promise
 * creates an item in the list that is passed
 * the resolve is an object with the created item info
 * origin is optional
 * url is site relative url
 * listName is optional
 * pass either listTitle or listGUID not both
 * infoToServer should be a object whos key is the column name and the value is what you want stored in that column
 * @param {{origin:string, url:string, listName:string, listTitle:string, listGUID:string, infoToServer:object}} props
 * @returns {promise}
 */
export function ajaxCreateItem(props) {
    return nonDeleteProcess(props);
}
/**
 * Returns a promise
 * updates an item in the list that is passed
 * the resolve is an object with the update item info
 * origin is optional
 * url is site relative url
 * listName is optional
 * pass either listTitle or listGUID not both
 * itemId is the id number of the item to be updated
 * infoToServer should be a object whos key is the column name and the value is what you want stored in that column
 * @param {{origin:string, url:string, listName:string, listTitle:string, listGUID:string, itemId:number, infoToServer:object}} props
 * @returns {promise}
 */
export function ajaxUpdateItem(props) {

    props.headerData = {
        "X-HTTP-Method": "MERGE",
        "If-Match": props.etag || "*"
    };
    return nonDeleteProcess(props);
}
/**
 * Returns a promise
 * deletes an item in the list that is passed
 * origin is optional
 * url is site relative url
 * pass either listTitle or listGUID not both
 * itemId is the id number of the item to be deleted
 * etag is optional
 * be warned if you use this function, the item you delete will be gone and unrecoverable!!!!
 * @param {{origin:string, url:string, listTitle:string, listGUID:string, itemId:number, etag:string}} props
 * @returns {promise}
 */
export function ajaxDeleteItem(props) {
    //todo try to complete this function without an etag
    props.headerData = {
        'X-HTTP-Method' : 'DELETE',
        "If-Match": props.etag || "*"
    };
    return deleteProcess(props);
}
/**
 * Returns a promise
 * recycles an item in the list that is passed
 * origin is optional
 * url is site relative url
 * pass either listTitle or listGUID not both
 * itemId is the id number of the item to be recycled
 * @param {{origin:string, url:string, listTitle:string, listGUID:string, itemId:number}} props
 * @returns {promise}
 */
export function ajaxRecycleItem(props) {

    props.urlModifier = "/recycle";
    return deleteProcess(props);
}
/**
 * Returns a promise
 * retrieves profile properties for the user email passed
 * if you do not pass a user email it retrieves the current user
 * origin is optional
 * email is optional
 * @param {{origin:string, email:string}} props
 * @returns {promise}
 */
export function userProfileData(props = {}) {

    let addon = null;

    if(props.email) {
        props.endPoint = '_api/sp.userprofiles.peoplemanager';
        addon = `/getpropertiesfor(@v)?@v='${encodeAccountName(props.email)}'&`;
    } else {
        //url for get current user
        props.endPoint = '_api/SP.UserProfiles.PeopleManager/GetMyProperties';
        addon = '?';
    }
    
    checkUrlOrigin(props);
    props.configuredUrl += `${addon}$select=UserProfileProperties`;
    
    return ajaxGetData(props.configuredUrl)
    .then(function(userData){ //success
        if (userData.data['odata.null'] === true) {
            return [];
        } else{
            return userData.data.UserProfileProperties;
        }
    });
}
/**
 * Returns a promise
 * retrieves the columns of the passed list
 * origin is optional
 * url is a site relative url
 * pass listGUID or listTitle not both
 * allData is optional, it will include all hidden and readonly if you pass true
 * @param {{origin:string, url:string, listGUID:string, listTitle:string, allData:boolean}} props
 * @returns {promise}
 */
export function getListColumns(props) {

    if(!props.allData) {
        props.allData = false;
    }
    listUrlConfigure(props);
    props.listUrl += `/fields?$filter=Hidden eq ${props.allData} and ReadOnlyField eq ${props.allData}`;

	return ajaxGetData(props.listUrl);
}