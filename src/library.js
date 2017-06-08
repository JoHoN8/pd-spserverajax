/**
    app name pd-spservercontacts
 */
import * as $ from "jquery";
import * as spu from "pd-sputil";

const minimalMeta = "application/json;odata=minimalmetadata";
const ajaxJsonContentType = "application/json;odata=verbose";
const profilePropsCleaner = function (props) {
    var propertiesObj = {};

    props.forEach(function(item) {

        if ( spu.profileProps.indexOf(item.Key) === -1 ) {
            return;
        }
        if ( item.Key === "PreferredName" ) {
            propertiesObj.DisplayName = item.Value || 'None';
        }
        if ( item.Key === "SPS-JobTitle" ) {
            propertiesObj.JobTitle = item.Value || 'None';
        }
        if ( item.Key === "SPS-Department" ) {
            propertiesObj.Department = item.Value || 'None';
        }
        if ( item.Key === "SPS-Location" ) {
            propertiesObj.Location = item.Value || 'None';
        }

        propertiesObj[item.Key] = item.Value || 'None';

    });
    
    return propertiesObj;
};
const createProfileUrl = function(origin, email) {
    let url;

    
    return url;
};
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

    props.configuredUrl = props.origin || location.origin;

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
        return $.Deferred().resolve(entityData);
    }

    return ajaxGetListInfo(props)
    .then(function(data) {
        return data.ListItemEntityTypeFullName;
    });
};
const nonDeleteProcess = function(props) {

    if(!props.headerData) {
        props.headerData = {};
    }

    return getEntityType(props)
    .then(function(type) {
        props.item = $.extend({
            '__metadata': {'type': type}
        }, props.infoToServer);

        return ajaxGetContext(props.url);
    }).then(function(context) {

        //clear endpoint from get context
        props.endPoint = null;
        props.headerData['X-RequestDigest'] = context.FormDigestValue;
        props.headerData.Accept = 'application/json; odata=minimalmetadata';

        listItemUrlConfigure(props);

        return $.ajax({
            url: props.listItemUrl,
            type: 'POST',
            contentType: 'application/json;odata=verbose',
            data: JSON.stringify(props.item),
            headers: props.headerData
        });
    });
};
const deleteProcess = function(props) {

    if(!props.headerData) {
        props.headerData = {};
    }

    return ajaxGetContext(props.url)
    .then(function(context) {

        //clear endpoint from get context
        props.endPoint = null;
        props.headerData['X-RequestDigest'] = context.FormDigestValue;
        props.headerData.Accept = 'application/json; odata=minimalmetadata';

        listItemUrlConfigure(props);

        if (props.urlModifier) {
            props.listItemUrl += props.urlModifier;
        }

        return $.ajax({
            url: props.listItemUrl,
            type: 'POST',
            contentType: 'application/json;odata=verbose',
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

    if(!props.endPoint) {
        props.endPoint = "_api/web";
    }
    checkUrlOrigin(props);

    props.listUrl += "?";

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

    if(/\$$/.test(props.listUrl)) {
        //if $ is the last character then get rid of it
        props.listUrl.slice(0,-1);
    }

};

export function ajaxGetContext(props) {
    //response.FormDigestValue
    // props is
    // {
    //     url: , relative site url
    //     origin:
    // }
    
    props.endPoint = "_api/contextinfo";
    checkUrlOrigin(props);

    return $.ajax({
        url: props.configuredUrl,
        method: "POST",
        headers: { "Accept": "application/json; odata=minimalmetadata" }
    });
}
export function ajaxGetData(url) {
    return $.ajax({
        url: url,
        type: 'GET',
        headers: {'Accept': 'application/json; odata=minimalmetadata'}
    });
}
export function ajaxGetAllListResults(props, allResults) {
    // props is, either pass listGUID or listTitle not both
    // {
    //     origin: ,
    //     listGUID: ,
    //     listTitle: ,
    //     select: ,
    //     filter: ,
    //     expand: ,
    //     top: 
    // }

    if(!props.listGUID || !props.listTitle) {
        return $.Deferred().reject("must pass listGUID or listTitle to ajaxGetAllListResults");
    }

    createGetAllUrl(props);

    return ajaxGetData(props.listUrl)
    .then(function(response) {
        var url,
            data = allResults || [];
        
        response.value.forEach(function(item) {
            data.push(item);
        });
        if (response['odata.nextLink']) {
            url = response['odata.nextLink'];
            return ajaxGetAllResults(url, data);
        }
        return data;
    });
}
export function ajaxGetBatch(props, arrayOfUrls) {
    // props = {
    // origin: ,
    // 	url: , relative siteUrl
    // 	context:
    // }
    var batchGUID = createGUID(),
        digestValue,
        batchBody,
        batchHeader,
        goingToUrl,
        batchContents = [];

    //get context
    if(props.context) {
        digestValue = props.context;
    } else {
        //todo get context from server not page
        digestValue = document.getElementById('__REQUESTDIGEST').value;
    }

    props.endPoint = '_api/$batch';
    checkUrlOrigin(props);

    batchHeader = {
    'X-RequestDigest': digestValue,
    'Content-Type': 'multipart/mixed; boundary="batch_' + batchGUID + '"'
    };

    //batch (operation)
    arrayOfUrls.forEach(function(item) {
        batchContents.push('--batch_' + batchGUID);
        batchContents.push('Content-Type: application/http');
        batchContents.push('Content-Transfer-Encoding: binary');
        batchContents.push('');
        batchContents.push('GET ' + item + ' HTTP/1.1');
        batchContents.push('Accept: application/json;odata=minimalmetadata');
        batchContents.push('');
    });

    batchContents.push('--batch_' + batchGUID + '--');

    batchBody = batchContents.join('\r\n');

    return $.ajax({
        url: props.configuredUrl,
        type: 'POST',
        data: batchBody,
        headers: batchHeader
    }).then(function(response) {
        var parsedArray = [],
            responseToArray = response.split('\n');

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
}
export function ajaxGetListInfo(props) {
    //if you are pulling for rest create you need property - EntityTypeName
    //will accept listGUID or listTitle
    // {
    //  origin: ,
    // 	url: '',
    // 	listGUID: 'dfdf-dfdfdaqfe-asdfasdf-ewf'
    // }

    listUrlConfigure(props);
    return ajaxGetData(props.listUrl);
}
export function ajaxPeopleSearch(props, currentResults ) {
    //returns props with results in props.results
    // props is
    // {
    //     origin: ,
    //     url: , site relative url
    //     query: "'" + 'Bureau="'+ division + '"\''
    // }
    var allResults = currentResults || [],
        serverQueryData = {
            sourceid: "'213c743c-4c9b-4433-ad8c-6d4c9cd4d769'",
            startrow: 0,
            rowlimit: 500,
            TrimDuplicates: false,
            selectproperties: "'" + spu.profileProperties.join(',') + "'"
        };

        props.endPoint = "_api/search/query";
        serverQueryData.querytext = props.query;

        checkUrlOrigin(props);

    return $.ajax({
        url: props.configuredUrl,
        type: 'GET',
        headers: {'Accept': 'application/json; odata=minimalmetadata'},
        data: serverQueryData
    }).then(function(empData) {

        var relevantResults = empData.PrimaryQueryResult.RelevantResults;

        allResults = allResults.concat(relevantResults.Table.Rows);

        if (relevantResults.TotalRows > (serverQueryData.startrow + relevantResults.RowCount)) {
            serverQueryData.startrow = serverQueryData.startrow + relevantResults.RowCount;
            return ajaxPeopleSearch(props, allResults);
        } else {
            return allResults;
        }
    });
}
export function ajaxEnsureUser(props, context) {
    //email should be user@domain.onmicrosoft.com
    // props is 
    // {
    //     origin: ,
    //     url: , site relative url,
    //     email: ,
    //     context: optional
    // }
    //todo set up context to uuse the context function not the page context
    props.endPoint = "_api/web";
    checkUrlOrigin(props);

    props.configuredUrl += `/ensureUser('${spu.encodeAccountName(props.email)}')`;
    return $.ajax({       
        url: props.configuredUrl,   
        type: "POST",  
        contentType: ajaxJsonContentType,
        headers: { 
            "Accept": minimalMeta,
            "X-RequestDigest": context || document.getElementById('__REQUESTDIGEST').value
        }
    });
}
export function ajaxGetSiteUserInfoByEmail(props) {
    //email is user@domain.onmicrosoft.com
    // props is
    // {
    //     origin: ,
    //     url: , site relative url
    //     email:
    // }

    props.endPoint = "_api/web/siteusers";
    checkUrlOrigin(props);

    props.configuredUrl += `?$filter=LoginName eq '${spu.encodeAccountName(props.email)}'`;

    return ajaxGetData(props.configuredUrl);
}
export function ajaxGetItemsByCaml(props) {
    //_api/web/lists/GetByTitle('1232312312')
    // props is
    // {
    //     origin: ,
    //     url: ,site relative url,
    //     caml: ,
    //     context: optional
    // }
    //todo get context to use function not page
    var query = { "query" :
        {"__metadata": 
        { "type": "SP.CamlQuery" },
            "ViewXml": props.caml
        }
    },
    headerdata = {
        'Accept': 'application/json; odata=minimalmetadata',
        'Content-Type': 'application/json; odata=verbose',
        'X-RequestDigest': props.context || document.getElementById('__REQUESTDIGEST').value
    };

    props.endPoint = 'getitems';
    checkUrlOrigin(props);

    return $.ajax({
        url: props.configuredUrl,
        type: 'POST',
        data: JSON.stringify(query),
        headers: headerdata
    });
}
export function ajaxGetUserPermissions(props) {
    /*
        this function will give you an array of the permission a user has to a site or list/library
        for a site
        {
            origin: ,
            type: site,
            url: "/sites/EA/routing", url of the site to check
            userEmail: blahblah@microsoft.org
        }
        for a list / library
        {
            origin: ,
            type: list,    list or library
            url: "/sites/EA/routing", url of the site to check
            userEmail: blahblah@microsoft.org,
            listTitle: 'Route State'     listTitle or listGUID
        }
    */
    var type = props.type ? props.type.toLowerCase() : null,
        toSend;

    props.encodedEmail = spu.encodeAccountName(props.userEmail);

    if (type === 'site') {
        //getting site url
        props.endPoint = "_api/web";
        checkUrlOrigin(props);
        toSend = props.configuredUrl + "/getusereffectivepermissions(@user)?@user='"+props.encodedEmail+"'";
    } else if (type === 'list' || type === 'library') {
        //setting up list url
        listUrlConfigure(props);
        toSend = props.listUrl + "/getusereffectivepermissions(@user)?@user='"+props.encodedEmail+"'";
    } else {
        //didnot get enough data
        throw new Error('incomplete data passed to ajaxGetUserPermissions');
    }



    return ajaxGetData(toSend)
    .then(function(response) {
        return parseBasePermissions(response);
    });
}
export function ajaxGetCurrentUserGroups(props) {
    // porps = {
    // 	userId: 9,
    // 	url: "/sites/EA/routing",
    // }
    //userid should be the id number of the person on the site - _spPageContextInfo.userId

    props.endPoint = "_api/contextinfo";
    checkUrlOrigin(props, "/_api/web");

    props.configuredUrl += `/GetUserbyId(${props.userId})/Groups`;

    return ajaxGetData(props.configuredUrl)
    .then(function(groups){

        var groupArray = [];

        groups.value.forEach(function(item) {
            groupArray.push(item.Title);
        });

        return groupArray;

    });
}
export function ajaxCreateItem(props) {
    // listTitle or listGUID
    // {
    //  origin: ,
    // 	listName: 'routeState', optional
    // 	listTitle: 'Route State'
    // 	url: "/sites/EA/routing",
    // 	infoToServer: {
    //    Title: 'Route '+ routeId +' progress tracker',
    //    TaskStatus: 'Draft',
    //    parentRouteID: routeId
    // }
    return nonDeleteProcess(props);
}
export function ajaxUpdateItem(props) {
    // listTitle or listGUID
    // {
    //  origin: ,
    // 	listName: 'routeState', optional
    // 	listTitle: 'Route State'
    // 	url: "/sites/EA/routing",
    // 	itemId: 3,
    // 	infoToServer: {
    //    Title: 'Route '+ routeId +' progress tracker',
    //    TaskStatus: 'Draft',
    //    parentRouteID: routeId
    // }

    props.headerData = {
        "X-HTTP-Method": "MERGE",
        "If-Match": props.etag || "*"
    };
    return nonDeleteProcess(props);
}
export function ajaxDeleteItem(props) {
    //****be warned if you use this function, the item you delete will be gone and unrecoverable!!!!****
    // listTitle or listGUID
        // {
    //  origin: ,
    // 	listTitle: 'Route State'
    // 	url: "/sites/EA/routing",
    // 	itemId: 3,
    //  etag: optional
    // }

    props.headerData = {
        'X-HTTP-Method' : 'DELETE',
        "If-Match": props.etag || "*"
    };
    return deleteProcess(props);
}
export function ajaxRecycleItem(props) {
    // listTitle or listGUID
    // {
    //  origin: ,
    // 	listTitle: 'Route State'
    // 	url: "/sites/EA/routing",
    // 	itemId: 3,
    // }

    props.urlModifier = "/recycle";
    return deleteProcess(props);
}
export function userProfileData(props) {
    //must pass origin, userEmail is optional
    //if you dont pass userEmail then you get current logged in user
    // props is 
    // {
    //     origin: ,
    //     email: 
    // }

    let addon = null;

    checkUrlOrigin(props);

    if(props.email) {
        props.endPoint = '_api/sp.userprofiles.peoplemanager';
        addon = `/getpropertiesfor(@v)?@v='${spu.encodeAccountName(props.email)}'&`;
    } else {
        //url for get current user
        props.endPoint = '_api/SP.UserProfiles.PeopleManager/GetMyProperties';
        addon = '?';
    }
    props.configuredUrl += `${addon}$select=UserProfileProperties`;
    
    return ajaxGetData(props.configuredUrl)
    .then(function(userData){ //success

        if (userData['odata.null'] === true) {

            return 'User Not Found';

        } else{

            return profilePropsCleaner(userData.UserProfileProperties);

        }

    });
}
export function getListColumns(props) {
	//includeAll is for hidden and readOnly
    //either pass listTitle or listGUID not both
    // props is
    // {
    //     origin: ,
    //     url: ,
    //     listGUID: ,
    //     listTitle: ,
    //     allData: 
    // }

    if(!props.allData) {
        props.allData = false;
    }
    listUrlConfigure(props);
    props.listUrl += `/fields?$filter=Hidden eq ${props.allData} and ReadOnlyField eq ${props.allData}`;

	return ajaxGetData(props.listUrl);
}