/**
    app name spajax
 */

/**
    app name pd-spservercontacts
 */
import * as $ from "jquery";
import * as spUtil from "pd-sputil";

const profilePropsCleaner = function (props) {
    var propertiesObj = {};

    props.forEach(function(item) {

        if ( spUtil.profileProps.indexOf(item.Key) === -1 ) {
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

    if(email) {
        let formattedUserName = spUtil.encodeAccountName(email);

        url += `${origin}/_api/sp.userprofiles.peoplemanager`;
        url += `/getpropertiesfor(@v)?@v='${formattedUserName}'`;
        url += '&$select=UserProfileProperties';
    } else {
        //url for get current user
        url += `${origin}/_api/SP.UserProfiles.PeopleManager/GetMyProperties?`;
        url += '&$select=UserProfileProperties';
    }
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
const checkUrlOrigin = function(props, addOn) {

    let siteOrigin = props.origin || location.origin;

    props.configuredUrl = `${siteOrigin}/${props.url}`;

    if(addOn) {
        props.configuredUrl += addOn;
    }
    return props;

    //fell through so the incorrect datatype was passed to function, error
};
const listUrlConfigure = function(props) {

    if (!props.url || props.listUrl) {
        return;
    }

    checkUrlOrigin(props, "/_api/web");

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
const nonDeleteProcess = function(props, headerData) {

    var item,
        header = headerData || {};

    return getEntityType(props)
    .then(function(type) {
        item = $.extend({
            '__metadata': {'type': type}
        }, props.infoToServer);

        return ajaxGetContext(props.url);
    }).then(function(context) {

        header['X-RequestDigest'] = context.FormDigestValue;
        header.Accept = 'application/json; odata=minimalmetadata';

        listItemUrlConfigure(props);

        return $.ajax({
            url: props.listItemUrl,
            type: 'POST',
            contentType: 'application/json;odata=verbose',
            data: JSON.stringify(item),
            headers: header
        });
    });
};
const deleteProcess = function(props, headerData, urlModifier) {

    var header = headerData || {};

    return ajaxGetContext(props.url)
    .then(function(context) {

        header['X-RequestDigest'] = context.FormDigestValue;
        header.Accept = 'application/json; odata=minimalmetadata';

        listItemUrlConfigure(props);

        if (urlModifier) {
            props.listItemUrl += urlModifier;
        }

        return $.ajax({
            url: props.listItemUrl,
            type: 'POST',
            contentType: 'application/json;odata=verbose',
            headers: header
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

export function ajaxGetContext(url) {
    //response.FormDigestValue
    var props = {url: url};
    
    checkUrlOrigin(props, "/_api/contextinfo");

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
const createGetAllUrl = function(props) {

    checkUrlOrigin(props, "/_api/web");

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
export function ajaxGetBatch(ArrayOfUrls, props) {
    // props = {
    // 	url: ,
    // 	context:
    // }
    var batchGUID = createGUID(),
        digestValue,
        batchBody,
        batchHeader,
        goingToUrl,
        batchContents = [];

    //get context
    if(props && props.context) {
        digestValue = props.context;
    } else {
        digestValue = document.getElementById('__REQUESTDIGEST').value;
    }

    //getUrl
    if(props && props.url) {
        //must be the whole url, "https://something.sharepoint.com/sites/spdev"
        goingToUrl = props.url;
    } else {
        goingToUrl = spUtil.getPageInfo().webAbsoluteUrl;
    }

    batchHeader = {
    'X-RequestDigest': digestValue,
    'Content-Type': 'multipart/mixed; boundary="batch_' + batchGUID + '"'
    };

    //batch (operation)
    ArrayOfUrls.forEach(function(item) {
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
        url: goingToUrl + '/_api/$batch',
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
    // 	url: '',
    // 	listGUID: 'dfdf-dfdfdaqfe-asdfasdf-ewf'
    // }
    listUrlConfigure(props);
    return ajaxGetData(props.listUrl);
}
export function ajaxPeopleSearch(origin, requestQuery, currentResults ) {
    //returns employees only
    //origin should be absoult url 'https://something.sharepoint.com/_api/search/query'
    var allResults = currentResults || [],
        serverQueryData = {
            sourceid: "'213c743c-4c9b-4433-ad8c-6d4c9cd4d769'",
            startrow: 0,
            rowlimit: 500,
            TrimDuplicates: false,
            selectproperties: "'" + spUtil.profileProperties.join(',') + "'"
        };
    
        if ( typeof requestQuery === 'string' ) {
            serverQueryData.querytext = "'" + requestQuery + "'";
        } else{
            //querytext: "'" + 'Bureau="'+ division + '"\''
            serverQueryData = $.extend({}, serverQueryData, requestQuery);
        }

    return $.ajax({
        url: origin,
        type: 'GET',
        headers: {'Accept': 'application/json; odata=minimalmetadata'},
        data: serverQueryData
    }).then(function(empData) { //success function

        var relevantResults = empData.PrimaryQueryResult.RelevantResults;

        allResults = allResults.concat(relevantResults.Table.Rows);

        if (relevantResults.TotalRows > (serverQueryData.startrow + relevantResults.RowCount)) {
            serverQueryData.startrow = serverQueryData.startrow + relevantResults.RowCount;
            return ajaxPeopleSearch(origin, serverQueryData, allResults);
        } else {
            return allResults;
        }
    });
}
export function ajaxEnsureUser(acctName, siteURL, context) {
    //acctName should be i:0#.f|membership|user@domain.onmicrosoft.com link this
    var site = siteURL || spUtil.getPageInfo().webAbsoluteUrl,
        endpointUrl = site + "/_api/web/ensureUser('" + encodeURIComponent(acctName) + "')";
    return $.ajax({       
        url: endpointUrl,   
        type: "POST",  
        contentType: "application/json;odata=verbose",
        headers: { 
            "Accept": "application/json;odata=minimalmetadata",
            "X-RequestDigest": context || document.getElementById('__REQUESTDIGEST').value
        }
    });
}
export function ajaxGetSiteUserInfoByKey(key) {
    //key is i:0#.f|membership|user@domain.onmicrosoft.com
    var encodedKey = encodeURIComponent(key),
        url = spUtil.getPageInfo().webAbsoluteUrl + "/_api/web/siteusers?"+
        "$filter=LoginName eq '"+ encodedKey +"'";
    return ajaxGetData(url);
}
export function ajaxGetItemsByCaml(properties) {
    //_api/web/lists/GetByTitle('1232312312')
    var query = { "query" :
            {"__metadata": 
            { "type": "SP.CamlQuery" },
                "ViewXml": properties.caml
            }
        },
        headerdata = {
            'Accept': 'application/json; odata=minimalmetadata',
            'Content-Type': 'application/json; odata=verbose',
            'X-RequestDigest': properties.context || document.getElementById('__REQUESTDIGEST').value
        };

    return $.ajax({
        url: properties.url + '/getitems',
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
            type: site,
            url: "/sites/EA/routing", url of the site to check
            userEmail: blahblah@elderaffairs.org
        }
        for a list / library
        {
            type: list,    list or library
            url: "/sites/EA/routing", url of the site to check
            userEmail: blahblah@elderaffairs.org,
            listTitle: 'Route State'     listTitle or listGUID
        }
    */
    var type = props.type ? props.type.toLowerCase() : null,
        toSend;

    props.encodedEmail = spUtil.encodeAccountName(props.userEmail);

    if (type === 'site') {
        //getting site url
        checkUrlOrigin(props, "/_api/web");
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
        props.permissions = parseBasePermissions(response);
        return props;
    });
}
export function ajaxGetCurrentUserGroups(props) {
    // porps = {
    // 	userId: 9,
    // 	url: "/sites/EA/routing",
    // }
    //userid should be the id number of the person on the site - _spPageContextInfo.userId

    checkUrlOrigin(props, "/_api/web");

    return ajaxGetData(props.configuredUrl + "/GetUserbyId(" + props.userId + ")/Groups")
    .then(function(groups){

        var groupArray = [];

        groups.value.forEach(function(item) {
            groupArray.push(item.Title);
        });

        return groupArray;

    });
}
export function ajaxCreateItem(properties) {
    // listTitle or listGUID
    // {
    // 	listName: 'routeState', optional
    // 	listTitle: 'Route State'
    // 	url: "/sites/EA/routing",
    // 	infoToServer: {
    //    Title: 'Route '+ routeId +' progress tracker',
    //    TaskStatus: 'Draft',
    //    parentRouteID: routeId
    // }
    return nonDeleteProcess(properties);
}
export function ajaxUpdateItem(properties) {
    // listTitle or listGUID
    // {
    // 	listName: 'routeState', optional
    // 	listTitle: 'Route State'
    // 	url: "/sites/EA/routing",
    // 	itemId: 3,
    // 	infoToServer: {
    //    Title: 'Route '+ routeId +' progress tracker',
    //    TaskStatus: 'Draft',
    //    parentRouteID: routeId
    // }
    return nonDeleteProcess(properties, {
        "X-HTTP-Method": "MERGE",
        "If-Match": properties.etag || "*",
    });
}
export function ajaxDeleteItem(properties) {
    //****be warned if you use this function, the item you delete will be gone and unrecoverable!!!!****
    // listTitle or listGUID
    // ajaxCreateItem({
    //		listTitle: 'Route State'
    //		url: "/sites/EA/routing",
    //		itemId: 3
    // })
    return deleteProcess(properties, {
        'X-HTTP-Method' : 'DELETE',
        "If-Match": properties.etag || "*"
    });
}
export function ajaxRecycleItem(properties) {
    // listTitle or listGUID
    // ajaxCreateItem({
    //		listTitle: 'Route State'
    //		url: "/sites/EA/routing",
    //		itemId: 3
    // })
    return deleteProcess(properties, null, "/recycle");
}
export function userProfileData(origin, userEmail) {
    //must pass origin, userEmail is optional
    //if you dont pass userEmail then you get current logged in user

    var url = createProfileUrl(origin, userEmail);
    
    return ajaxGetData(url)
    .then(function(properties){ //success

        if (properties['odata.null'] === true) {

            return 'User Not Found';

        } else{

            return profilePropsCleaner(properties.UserProfileProperties);

        }

    });
}
export function getListColumns(siteUrl, listId, includeAll) {
	//includeAll is for hidden and readOnly
	var includeOthers = includeAll || false,
		url = siteUrl + "/_api/web/lists(guid'"+listId+"')/fields?$filter=Hidden eq "+includeOthers+" and ReadOnlyField eq "+ includeOthers;

	return ajaxGetData(url);
}