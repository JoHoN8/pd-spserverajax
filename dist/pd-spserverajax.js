(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("pd-sputil"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "pd-sputil"], factory);
	else if(typeof exports === 'object')
		exports["pdspserverajax"] = factory(require("jquery"), require("pd-sputil"));
	else
		root["pdspserverajax"] = factory(root["$"], root["pdsputil"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["ajaxGetContext"] = ajaxGetContext;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetData"] = ajaxGetData;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetAllListResults"] = ajaxGetAllListResults;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetBatch"] = ajaxGetBatch;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetListInfo"] = ajaxGetListInfo;
/* harmony export (immutable) */ __webpack_exports__["ajaxPeopleSearch"] = ajaxPeopleSearch;
/* harmony export (immutable) */ __webpack_exports__["ajaxEnsureUser"] = ajaxEnsureUser;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetSiteUserInfoByEmail"] = ajaxGetSiteUserInfoByEmail;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetItemsByCaml"] = ajaxGetItemsByCaml;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetUserSitePermissions"] = ajaxGetUserSitePermissions;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetUserListPermissions"] = ajaxGetUserListPermissions;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetCurrentUserGroups"] = ajaxGetCurrentUserGroups;
/* harmony export (immutable) */ __webpack_exports__["ajaxCreateItem"] = ajaxCreateItem;
/* harmony export (immutable) */ __webpack_exports__["ajaxUpdateItem"] = ajaxUpdateItem;
/* harmony export (immutable) */ __webpack_exports__["ajaxDeleteItem"] = ajaxDeleteItem;
/* harmony export (immutable) */ __webpack_exports__["ajaxRecycleItem"] = ajaxRecycleItem;
/* harmony export (immutable) */ __webpack_exports__["userProfileData"] = userProfileData;
/* harmony export (immutable) */ __webpack_exports__["getListColumns"] = getListColumns;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pd_sputil__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pd_sputil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__);
/**
    app name pd-spservercontacts
 */



var minimalMeta = "application/json;odata=minimalmetadata";
var ajaxJsonContentType = "application/json;odata=verbose";
var createlistitemtype = function createlistitemtype(listName) {
    return 'SP.Data.' + listName.charAt(0).toUpperCase() + listName.slice(1) + 'ListItem';
};
var guidHexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var createGUID = function createGUID() {
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
var checkUrlOrigin = function checkUrlOrigin(props) {

    props.configuredUrl = props.origin || location.origin;

    if (props.url) {
        props.configuredUrl += props.url;
    }

    if (props.endPoint) {
        props.configuredUrl += "/" + props.endPoint;
    }
    return props;

    //fell through so the incorrect datatype was passed to function, error
};
var listUrlConfigure = function listUrlConfigure(props) {

    if (!props.url || props.listUrl) {
        return;
    }

    props.endPoint = "_api/web";

    checkUrlOrigin(props);

    if (props.listGUID) {
        props.listUrl = props.configuredUrl += "/lists(guid'" + props.listGUID + "')";
    } else if (props.listTitle) {
        props.listUrl = props.configuredUrl += "/lists/getbytitle('" + props.listTitle + "')";
    }
    return props;
};
var listItemUrlConfigure = function listItemUrlConfigure(props) {
    //for create, update, delete
    var item = props.itemId || '';

    if (props.listItemUrl) {
        return;
    }

    listUrlConfigure(props);

    props.listItemUrl = props.listUrl += "/items(" + item + ")";
    return props;
};
var getEntityType = function getEntityType(props) {

    var entityData;

    if (props.listName) {
        entityData = createlistitemtype(props.listName);
        return __WEBPACK_IMPORTED_MODULE_0_jquery__["Deferred"]().resolve(entityData);
    }

    return ajaxGetListInfo(props).then(function (data) {
        return data.ListItemEntityTypeFullName;
    });
};
var nonDeleteProcess = function nonDeleteProcess(props) {

    if (!props.headerData) {
        props.headerData = {};
    }

    return getEntityType(props).then(function (type) {
        props.item = __WEBPACK_IMPORTED_MODULE_0_jquery__["extend"]({
            '__metadata': { 'type': type }
        }, props.infoToServer);

        return ajaxGetContext(props);
    }).then(function (context) {

        props.headerData['X-RequestDigest'] = context.FormDigestValue;
        props.headerData.Accept = 'application/json; odata=minimalmetadata';

        listItemUrlConfigure(props);

        return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
            url: props.listItemUrl,
            type: 'POST',
            contentType: 'application/json;odata=verbose',
            data: JSON.stringify(props.item),
            headers: props.headerData
        });
    });
};
var deleteProcess = function deleteProcess(props) {

    if (!props.headerData) {
        props.headerData = {};
    }

    return ajaxGetContext(props).then(function (context) {

        props.headerData['X-RequestDigest'] = context.FormDigestValue;
        props.headerData.Accept = 'application/json; odata=minimalmetadata';

        listItemUrlConfigure(props);

        if (props.urlModifier) {
            props.listItemUrl += props.urlModifier;
        }

        return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
            url: props.listItemUrl,
            type: 'POST',
            contentType: 'application/json;odata=verbose',
            headers: props.headerData
        });
    });
};
var parseBasePermissions = function parseBasePermissions(value) {
    var permissions = new SP.BasePermissions();
    permissions.initPropertiesFromJson(value);
    var permLevels = [];
    for (var permLevelName in SP.PermissionKind.prototype) {
        if (SP.PermissionKind.hasOwnProperty(permLevelName)) {
            var permLevel = SP.PermissionKind.parse(permLevelName);
            if (permissions.has(permLevel)) {
                permLevels.push(permLevelName);
            }
        }
    }
    return permLevels;
};
var createGetAllUrl = function createGetAllUrl(props) {

    if (props.listUrl) {
        //already setup, get out
        return;
    }
    if (!props.endPoint) {
        props.endPoint = "_api/web";
    }
    listUrlConfigure(props);

    props.listUrl += "/items?";

    if (props.select) {
        props.listUrl += "$select=" + props.select + "&";
    }
    if (props.top) {
        props.listUrl += "$top=" + props.top + "&";
    }
    if (props.expand) {
        props.listUrl += "$expand=" + props.expand + "&";
    }
    if (props.filter) {
        props.listUrl += "$filter=" + props.filter + "&";
    }
    if (props.orderBy) {
        props.listUrl += "$orderby=" + props.orderBy + "&";
    }

    if (/\$$/.test(props.listUrl)) {
        //if $ is the last character then get rid of it
        props.listUrl.slice(0, -1);
    }
};
var ajaxGetUserPermissions = function ajaxGetUserPermissions(props) {

    return ajaxGetData(props.permsLink).then(function (response) {
        return parseBasePermissions(response);
    });
};

/**
 * Gets a context object for server requests.
 * origin is optional
 * url is site relative url
 * returns a jquery promise
 * the key from response is FormDigestValue
 * @param {{origin:string, url:string}} props
 * @returns {promise}
 */
function ajaxGetContext(props) {

    props.endPoint = "_api/contextinfo";
    checkUrlOrigin(props);

    return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
        url: props.configuredUrl,
        method: "POST",
        headers: { "Accept": "application/json; odata=minimalmetadata" }
    }).then(function (response) {
        props.endPoint = null;
        props.configuredUrl = null;
        return response;
    });
}
/**
 * Returns a jquery promise
 * url is full odata url
 * @param {string} url
 * @returns {promise}
 */
function ajaxGetData(url) {
    return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
        url: url,
        type: 'GET',
        headers: { 'Accept': 'application/json; odata=minimalmetadata' }
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
 * returns a jquery promise
 * once the promise resolves you get an array of objects that are the servers response
 * @param {{origin:string, url:string, listGUID:string, listTitle:string, select:string, filter:string, expand:string, top:string, orderBy:string}} props
 * @returns {promise}
 */
function ajaxGetAllListResults(props) {

    if (!props.listGUID && !props.listTitle) {
        return __WEBPACK_IMPORTED_MODULE_0_jquery__["Deferred"]().reject("must pass listGUID or listTitle to ajaxGetAllListResults");
    }

    createGetAllUrl(props);

    return ajaxGetData(props.listUrl).then(function (response) {
        var url,
            currentResults = props.allResults || [];

        props.allResults = currentResults.concat(response.value);

        if (response['odata.nextLink']) {
            props.listUrl = response['odata.nextLink'];
            return ajaxGetAllListResults(props);
        }
        return props.allResults;
    });
}
/**
 * Returns a jquery promise
 * origin is optional
 * once the promise resolves you get an array of objects that are the servers response
 * @param {{origin:string, url:string}} props
 * @param {string[]} arrayOfUrls
 * @returns {promise}
 */
function ajaxGetBatch(props, arrayOfUrls) {

    var batchGUID = createGUID(),
        batchBody,
        batchHeader,
        batchContents = [];

    //batch (operation)
    arrayOfUrls.forEach(function (item) {
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

    return ajaxGetContext(props).then(function (response) {

        props.endPoint = '_api/$batch';
        checkUrlOrigin(props);

        batchHeader = {
            'X-RequestDigest': response.FormDigestValue,
            'Content-Type': 'multipart/mixed; boundary="batch_' + batchGUID + '"'
        };

        return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
            url: props.configuredUrl,
            type: 'POST',
            data: batchBody,
            headers: batchHeader
        }).then(function (response) {
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
    });
}
/**
 * Returns a jquery promise
 * data contained in response is the properties for a list
 * origin is optional
 * url is site relative url
 * pass listTitle or listGUID not both
 * @param {{origin:string, url:string, listGUID:string, listTitle:string}} props
 * @returns {promise}
 */
function ajaxGetListInfo(props) {

    listUrlConfigure(props);
    return ajaxGetData(props.listUrl);
}
/**
 * Returns a jquery promise
 * data contained in response is the people info
 * origin optional
 * url is site relative url optional
 * sourceId optional
 * query required, ex "'" + 'Bureau="'+ divisionName + '"\''
 * @param {{origin:string, url:string, query:string, sourceId:string}} props
 * @returns {promise}
 */
function ajaxPeopleSearch(props) {

    var allResults = props.currentResults || [],
        serverQueryData = {
        startrow: 0,
        rowlimit: 500,
        TrimDuplicates: false,
        selectproperties: "'" + __WEBPACK_IMPORTED_MODULE_1_pd_sputil__["profileProps"].join(',') + "'"
    };

    serverQueryData.startrow = props.startrow ? props.startrow : 0;
    serverQueryData.sourceId = props.sourceId ? props.sourceId : "'b09a7990-05ea-4af9-81ef-edfab16c4e31'";

    props.endPoint = "_api/search/query";
    serverQueryData.querytext = props.query;

    checkUrlOrigin(props);

    return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
        url: props.configuredUrl,
        type: 'GET',
        headers: { 'Accept': 'application/json; odata=minimalmetadata' },
        data: serverQueryData
    }).then(function (empData) {

        var relevantResults = empData.PrimaryQueryResult.RelevantResults;

        allResults = allResults.concat(relevantResults.Table.Rows);
        props.currentResults = allResults;

        if (relevantResults.TotalRows > serverQueryData.startrow + relevantResults.RowCount) {
            props.startrow = serverQueryData.startrow + relevantResults.RowCount;
            return ajaxPeopleSearch(props);
        } else {
            return props.currentResults;
        }
    });
}
/**
 * Returns a jquery promise
 * data contained in response is the users info
 * origin is optional
 * url is site relative url
 * email is the email address of the user
 * @param {{origin:string, url:string, email:string}} props
 * @returns {promise}
 */
function ajaxEnsureUser(props) {

    return ajaxGetContext(props).then(function (response) {

        props.endPoint = "_api/web";
        checkUrlOrigin(props);
        props.configuredUrl += "/ensureUser('" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__["encodeAccountName"])(props.email) + "')";

        return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
            url: props.configuredUrl,
            type: "POST",
            contentType: ajaxJsonContentType,
            headers: {
                "Accept": minimalMeta,
                "X-RequestDigest": response.FormDigestValue
            }
        });
    });
}
/**
 * Returns a jquery promise
 * data contained in response is the users info
 * origin is optional
 * url is site relative url
 * email is the email address of the user
 * @param {{origin:string, url:string, email:string}} props
 * @returns {promise}
 */
function ajaxGetSiteUserInfoByEmail(props) {

    props.endPoint = "_api/web/siteusers";
    checkUrlOrigin(props);

    props.configuredUrl += "?$filter=LoginName eq '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__["encodeAccountName"])(props.email) + "'";

    return ajaxGetData(props.configuredUrl);
}
/**
 * Returns a jquery promise
 * get results from a caml query
 * origin is optional
 * url is site relative url
 * caml is the query
 * pass eiter list giud or list title, not both
 * @param {{origin:string, url:string, query:string, listGUID:string, listTitle:string}} props
 * @returns {promise}
 */
function ajaxGetItemsByCaml(props) {

    return ajaxGetContext(props).then(function (response) {

        var query = { "query": { "__metadata": { "type": "SP.CamlQuery" },
                "ViewXml": props.caml
            }
        },
            headerdata = {
            'Accept': 'application/json; odata=minimalmetadata',
            'Content-Type': 'application/json; odata=verbose',
            'X-RequestDigest': response.FormDigestValue
        };

        listUrlConfigure(props);
        props.listUrl += '/getitems';

        return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
            url: props.listUrl,
            type: 'POST',
            data: JSON.stringify(query),
            headers: headerdata
        });
    });
}
/**
 * Returns a jquery promise
 * get a users permissions to site
 * the resolve is an array of permission for the user
 * origin is optional
 * url is site relative url
 * @param {{origin:string, url:string, email:string}} props
 * @returns {promise}
 */
function ajaxGetUserSitePermissions(props) {

    var encodedEmail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__["encodeAccountName"])(props.email);

    props.endPoint = "_api/web";
    checkUrlOrigin(props);

    props.permsLink = props.configuredUrl + "/getusereffectivepermissions(@user)?@user='" + encodedEmail + "'";
    return ajaxGetUserPermissions(props);
}
/**
 * Returns a jquery promise
 * get a users permissions to list
 * the resolve is an array of permission for the user
 * origin is optional
 * url is site relative url
 * caml is the query
 * pass eiter list giud or list title, not both
 * @param {{origin:string, url:string, email:string, listGUID:string, listTitle:string}} props
 * @returns {promise}
 */
function ajaxGetUserListPermissions(props) {

    var encodedEmail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__["encodeAccountName"])(props.email);

    listUrlConfigure(props);

    props.permsLink = props.listUrl + "/getusereffectivepermissions(@user)?@user='" + encodedEmail + "'";
    return ajaxGetUserPermissions(props);
}
/**
 * Returns a jquery promise
 * get the SP groups that a user is apart of
 * the resolve is an array of group names
 * origin is optional
 * url is site relative url
 * userId is the id of user in the site
 * @param {{origin:string, url:string, userId:number}} props
 * @returns {promise}
 */
function ajaxGetCurrentUserGroups(props) {

    props.endPoint = "/_api/web";
    checkUrlOrigin(props);

    props.configuredUrl += "/GetUserbyId(" + props.userId + ")/Groups";

    return ajaxGetData(props.configuredUrl).then(function (groups) {

        var groupArray = [];

        groups.value.forEach(function (item) {
            groupArray.push(item.Title);
        });

        return groupArray;
    });
}
/**
 * Returns a jquery promise
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
function ajaxCreateItem(props) {
    return nonDeleteProcess(props);
}
/**
 * Returns a jquery promise
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
function ajaxUpdateItem(props) {

    props.headerData = {
        "X-HTTP-Method": "MERGE",
        "If-Match": props.etag || "*"
    };
    return nonDeleteProcess(props);
}
/**
 * Returns a jquery promise
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
function ajaxDeleteItem(props) {
    //todo try to complete this function without an etag
    props.headerData = {
        'X-HTTP-Method': 'DELETE',
        "If-Match": props.etag || "*"
    };
    return deleteProcess(props);
}
/**
 * Returns a jquery promise
 * recycles an item in the list that is passed
 * origin is optional
 * url is site relative url
 * pass either listTitle or listGUID not both
 * itemId is the id number of the item to be recycled
 * @param {{origin:string, url:string, listTitle:string, listGUID:string, itemId:number}} props
 * @returns {promise}
 */
function ajaxRecycleItem(props) {

    props.urlModifier = "/recycle";
    return deleteProcess(props);
}
/**
 * Returns a jquery promise
 * retrieves profile properties for the user email passed
 * if you do not pass a user email it retrieves the current user
 * origin is optional
 * email is optional
 * @param {{origin:string, email:string}} props
 * @returns {promise}
 */
function userProfileData(props) {

    var addon = null;

    if (props.email) {
        props.endPoint = '_api/sp.userprofiles.peoplemanager';
        addon = "/getpropertiesfor(@v)?@v='" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__["encodeAccountName"])(props.email) + "'&";
    } else {
        //url for get current user
        props.endPoint = '_api/SP.UserProfiles.PeopleManager/GetMyProperties';
        addon = '?';
    }

    checkUrlOrigin(props);
    props.configuredUrl += addon + "$select=UserProfileProperties";

    return ajaxGetData(props.configuredUrl).then(function (userData) {
        //success
        if (userData['odata.null'] === true) {
            return [];
        } else {
            return userData.UserProfileProperties;
        }
    });
}
/**
 * Returns a jquery promise
 * retrieves the columns of the passed list
 * origin is optional
 * url is a site relative url
 * pass listGUID or listTitle not both
 * allData is optional, it will include all hidden and readonly if you pass true
 * @param {{origin:string, url:string, listGUID:string, listTitle:string, allData:boolean}} props
 * @returns {promise}
 */
function getListColumns(props) {

    if (!props.allData) {
        props.allData = false;
    }
    listUrlConfigure(props);
    props.listUrl += "/fields?$filter=Hidden eq " + props.allData + " and ReadOnlyField eq " + props.allData;

    return ajaxGetData(props.listUrl);
}

/***/ })
/******/ ]);
});