/**
	<p>
	Requires:
		<ul>
		<li>babel polyfill - object assign and promise</li>
		<li>axios - the response of the server is in the data property when a plain axios response is returned</li>
		<li>pd-sputil - encodeAccountName, getURLOrigin</li>
		</ul>
	</p>
	<p>
		pdspserverajax - is exposed is a global namespace if added to browser via script tag
	</p>
	@author "Jered McGlohon"
	@module pdspserverajax
 */

import * as axios from 'axios';
import * as ajaxHelpers from './helpers';
import {encodeAccountName, getURLOrigin, createGUID} from 'pd-sputil';
import {MeteredRequestProcessor} from 'pd-meteredrequestprocessor';

const depTest = function() {
	
	try {
		if (Promise && Object.assign) {
			//all good move on
		}
	} catch (error) {
		throw new Error("Promise API and Object.assign is not available. Please add a polyfill to continue.");
	}
	try {
		if (axios) {
			//all good move on
		}
	} catch (error) {
		throw new Error("axios API is not available. Please add a axios to continue.");
	}
};
depTest();

const ajaxGetUserPermissions = function(props) {

	return getData(props.permsLink)
	.then(function(response) {
		return ajaxHelpers.parseBasePermissions(response.data);
	});
};
const getEntityType = function(props) {
	
	var entityData;

	if (props.listName) {
		entityData = ajaxHelpers.listItemEntityPattern.test(props.listName) 
		? props.listName
		: ajaxHelpers.createlistitemtype(props.listName);
		return Promise.resolve(entityData);
	}

	return getListInfo(props)
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

		return getContext(props);
	}).then(function(context) {

		props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
		props.headerData.Accept = ajaxHelpers.minimalMeta;
		props.headerData['Content-Type'] = ajaxHelpers.verboseMeta;

		ajaxHelpers.listItemUrlConfigure(props);

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

	return getContext(props)
	.then(function(context) {

		props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
		props.headerData.Accept = ajaxHelpers.minimalMeta;
		props.headerData['Content-Type'] = ajaxHelpers.verboseMeta;

		ajaxHelpers.listItemUrlConfigure(props);

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

/**
 * Gets a context object for server requests.
 * the key from response is FormDigestValue
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @returns {promise.<object>}
 */
export function getContext(props) {
	
	props.endPoint = "_api/contextinfo";
	ajaxHelpers.checkUrlOrigin(props);

	return axios({
		method: "POST",
		headers: { "Accept": ajaxHelpers.minimalMeta },
		url: props.configuredUrl,
	}).then((response) => {
		props.endPoint = null;
		props.configuredUrl = null;
		return response;
	});
}
/**
 * Get data from server using the REST endpoint
 * @param {string} url - full odata url
 * @returns {promise<object>}
 */
export function getData(url) {

	return axios({
		method: 'GET',
		headers: {'Accept': ajaxHelpers.minimalMeta},
		url: url
	});
}
/**
 * Gets all results for server requests.
 * once the promise resolves you get an array of objects that are the servers response
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.select]
 * @param {string} [props.filter]
 * @param {string} [props.expand]
 * @param {string} [props.top]
 * @param {string} [props.orderBy]
 * @returns {promise.<object[]>}
 */
export function getAllListResults(props) {

	if(!props.listGUID && !props.listTitle) {
		return Promise.reject("must pass listGUID or listTitle to getAllListResults");
	}

	ajaxHelpers.createGetAllUrl(props);

	return getData(props.listUrl)
	.then(function(response) {
		var currentResults = props.allResults || [],
			responseData = response.data;

		props.allResults = currentResults.concat(responseData.value);
		
		if (responseData['odata.nextLink']) {
			props.listUrl = responseData['odata.nextLink'];
			return getAllListResults(props);
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
		batchContents.push(`Accept: ${ajaxHelpers.minimalMeta}`);
		batchContents.push('');
	});

	batchContents.push('--batch_' + batchGUID + '--');

	batchBody = batchContents.join('\r\n');

	return getContext(props)
	.then((response) => {

		props.endPoint = '_api/$batch';
		ajaxHelpers.checkUrlOrigin(props);

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
 * Gets all items requested in the getUrls property (batch request)
 * 
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - relative url of the site that contains the data
 * @param {string[]} props.getUrls - full odata urls
 * @returns {promise<object[]>}
 */
export function getBatchMetered(props) {
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
			return getBatchMetered(props);
		}

		return props.allResults;
	});
}
/**
 * Get user profiles from the server (batch request)
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string[]} props.profileEmails - email addresses of the users you want profile data for
 * @returns {promise<object[]>}
 */
export function getBatchProfiles(props) {
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
	
	return getBatchMetered({
		origin: origin,
		url: url,
		getUrls: profileUrls
	});
}
/**
 * Get list or library properties from server
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - a site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @returns {promise<object>}
 */
export function getListInfo(props) {

	ajaxHelpers.listUrlConfigure(props);
	return getData(props.listUrl);
}
/**
 * Get user profile info from the SharePoint search service
 * @param {object}
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.query - query that is passed to search service, ex "'" + 'Bureau="'+ divisionName + '"\''
 * @param {string} [props.sourceId] - source id for the search service to use, defaults to the out of the box people source id
 * @param {string[]} props.properties - specify which properties you want back from the request
 * @returns {promise<object[]>}
 */
export function peopleSearch(props) {

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

	ajaxHelpers.checkUrlOrigin(props);

	return axios({
		url: props.configuredUrl,
		method: 'GET',
		headers: {'Accept': ajaxHelpers.minimalMeta},
		params: serverQueryData
	}).then(function(empData) {

		var relevantResults = empData.data.PrimaryQueryResult.RelevantResults;

		allResults = allResults.concat(relevantResults.Table.Rows);
		props.currentResults = allResults;

		if (relevantResults.TotalRows > (serverQueryData.startrow + relevantResults.RowCount)) {
			props.startrow = serverQueryData.startrow + relevantResults.RowCount;
			return peopleSearch(props);
		} else {
			return props.currentResults;
		}
	});
}
/**
 * Checks if user is in the site collection user table
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.email - email address of the user to check
 * @returns {promise<object>}
 */
export function ensureUser(props) {
	
	return getContext(props)
	.then((response) => {
	
		props.endPoint = "_api/web";
		ajaxHelpers.checkUrlOrigin(props);
		props.configuredUrl += `/ensureUser('${encodeAccountName(props.email)}')`;

		return axios({       
			url: props.configuredUrl,   
			method: "POST",  
			contentType: ajaxHelpers.verboseMeta,
			headers: { 
				"Accept": ajaxHelpers.minimalMeta,
				"X-RequestDigest": response.data.FormDigestValue
			}
		});
	});

}
/**
 * Gets user info from the site collection user table
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.email - email address of the user to retrieve
 * @returns {promise<object>}
 */
export function getSiteUserInfoByEmail(props) {

	props.endPoint = "_api/web/siteusers";
	ajaxHelpers.checkUrlOrigin(props);

	props.configuredUrl += `?$filter=LoginName eq '${encodeAccountName(props.email)}'`;

	return getData(props.configuredUrl);
}
/**
 * Get request that uses CAML to filter results
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.query - CAML query
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @returns {promise<object>}
 */
export function getItemsByCaml(props) {

	return getContext(props)
	.then((response) => {

		let query = { "query" :
			{"__metadata": 
			{ "type": "SP.CamlQuery" },
				"ViewXml": props.caml
			}
		},
		headerdata = {
			'Accept': ajaxHelpers.minimalMeta,
			'Content-Type': ajaxHelpers.verboseMeta,
			'X-RequestDigest': response.data.FormDigestValue
		};

		ajaxHelpers.listUrlConfigure(props);
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
 * Get a users permissions to a site
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.email - email of the user to get permissions for
 * @returns {promise<string[]>}
 */
export function getUserSitePermissions(props) {

	let encodedEmail = encodeAccountName(props.email);

	props.endPoint = "_api/web";
	ajaxHelpers.checkUrlOrigin(props);

	props.permsLink = `${props.configuredUrl}/getusereffectivepermissions(@user)?@user='${encodedEmail}'`;
	return ajaxGetUserPermissions(props);
}
/**
 * Get a users permissions to a list or library
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} props.email - email of the user to check permission of
 * @returns {promise<sting[]>}
 */
export function getUserListPermissions(props) {

	let encodedEmail = encodeAccountName(props.email);

	ajaxHelpers.listUrlConfigure(props);

	props.permsLink = `${props.listUrl}/getusereffectivepermissions(@user)?@user='${encodedEmail}'`;
	return ajaxGetUserPermissions(props);
}
/**
 * Gets the SharePoint groups that a user has been added to, identify the user by passing the id number of the user for the site.
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {number} props.userId - users site id number
 * @returns {promise<sting[]>}
 */
export function getCurrentUserGroups(props) {

	props.endPoint = "/_api/web";
	ajaxHelpers.checkUrlOrigin(props);

	props.configuredUrl += `/GetUserbyId(${props.userId})/Groups`;

	return getData(props.configuredUrl)
	.then(function(groups){

		var groupArray = [];

		groups.data.value.forEach(function(item) {
			groupArray.push(item.Title);
		});

		return groupArray;

	});
}
/**
 * Creates a single item in a list
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {object} props.infoToServer - object whos key is the column name and the value is what you want stored in that column
 * @returns {promise<object>}
 */
export function createItem(props) {
	return nonDeleteProcess(props);
}
/**
 * Updates a single item in a list
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {string} [props.etag] - etag of the item to update
 * @param {number} props.itemId - id of the item to update
 * @param {object} props.infoToServer - object whos key is the column name and the value is what you want stored in that column
 * @returns {promise<object>}
 */
export function updateItem(props) {

	props.headerData = {
		"X-HTTP-Method": "MERGE",
		"If-Match": props.etag || "*"
	};
	return nonDeleteProcess(props);
}
/**
 * Deletes a single item from a list or library
 * be warned if you use this function, the item you delete will be gone and unrecoverable!!!!
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.etag] - etag of the item to update
 * @param {number} props.itemId - id of the item to delete
 * @returns {promise<object>}
 */
export function deleteItem(props) {
	//todo try to complete this function without an etag
	props.headerData = {
		'X-HTTP-Method' : 'DELETE',
		"If-Match": props.etag || "*"
	};
	return deleteProcess(props);
}
/**
 * Sends a single item to the recycle bin of the site collection
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {number} props.itemId - id of the item to recycle
 * @returns {promise<object>}
 */
export function recycleItem(props) {

	props.urlModifier = "/recycle";
	return deleteProcess(props);
}
/**
 * Gets the profile information from the profile service
 * if email is passed then that will be the profile data you get back
 * if email is not passed you get current user profile data back
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} [props.email] - email of the user you want profile data for 
 * @returns {promise<object[]>}
 */
export function getUserProfileData(props = {}) {

	let addon = null;

	if(props.email) {
		props.endPoint = '_api/sp.userprofiles.peoplemanager';
		addon = `/getpropertiesfor(@v)?@v='${encodeAccountName(props.email)}'&`;
	} else {
		//url for get current user
		props.endPoint = '_api/SP.UserProfiles.PeopleManager/GetMyProperties';
		addon = '?';
	}
	
	ajaxHelpers.checkUrlOrigin(props);
	props.configuredUrl += `${addon}$select=UserProfileProperties`;
	
	return getData(props.configuredUrl)
	.then(function(userData){ //success
		if (userData.data['odata.null'] === true) {
			return [];
		} else{
			return userData.data.UserProfileProperties;
		}
	});
}
/**
 * Get the columns of a list or library
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @returns {promise<object>}
 */
export function getListColumns(props) {

	if(!props.allData) {
		props.allData = false;
	}
	ajaxHelpers.listUrlConfigure(props);
	props.listUrl += `/fields?$filter=Hidden eq ${props.allData} and ReadOnlyField eq ${props.allData}`;

	return getData(props.listUrl);
}
class meteredAjax extends MeteredRequestProcessor{
	constructor() {
		super();
	}
	_checkMeteredDataType(props) {
		if (!props.items || (Array.isArray(props.items) === false)) {
			throw new Error(ajaxHelpers.meteredItemsIncorrectDataType);
		}
	}
	_getMeteredListName(props) {
		let entityData = null;
		
		if (props.listName) {
			entityData = Promise.resolve(ajaxHelpers.listNamePresent);
		} else {
			entityData = getEntityType(props);
		}
		return entityData;
	}
}
/**
 * The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effects
 * The order number is your id to locate elements (dom or whatever) based on the specific item processing
 *
 * @callback itemCompletedProcessing
 * @param {string} status
 * @param {number} index
 */
/**
 * The index and itemData to process will be passed to this function
 * it MUST return a native promise.
 * the order number is your id to locate elements (dom or whatever) based on the specific item processing
 *
 * @callback itemPreProcessing
 * @param {any} itemData
 * @param {number} index
 */


/**
 * Creates multiple items via REST, 
 * items array should contain object with a key of column name and property of value you want stored in that column
 * ex. {
 * 	Title: "something"
 * }
 * @param {object} props
 * @param {object[]} props.items - items to create
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 * @returns {promise<object[]>}
 */
export function meteredCreateItems(props) {
	
	let requestPro = new meteredAjax();
	requestPro._checkMeteredDataType(props);
	
	return requestPro._getMeteredListName(props)
	.then(entityType => {
		if (entityType !== ajaxHelpers.listNamePresent) {
			props.listName = entityType;
		}

		
		let prepedItems = props.items.map(item => {
			let obj = {
				url: props.url,
				listName: entityType,
				infoToServer: item
			};
			if (props.listGUID) {
				obj.listGUID = props.listGUID;
			} else {
				obj.listTitle = props.listTitle;
			}
			return obj;
		});

		requestPro.setPreProcessingCB(function(itemData, index) {
			if (props.itemCreatedCB) {
				props.itemCreatedCB(itemData, index);
			}
			return createItem(itemData);
		});
		requestPro.setItemProcessedCB(props.itemCompletedCB);
		return requestPro.init(prepedItems);

	});
	
}
/**
 * Updates multiple items via REST, 
 * items array should contain object with 2 properties itemId and updateInfo and 1 optional property etag
 * ex. {
 * 	itemId: 3,
 * 	etag: ""3""
 * 	updateInfo: {
 * 		Title: "example string"
 * 	}
 * }
 * @param {object} props
 * @param {object[]} props.items - items to update
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 * @returns {promise<object[]>}
 */
export function meteredUpdateItems(props) {
	let requestPro = new meteredAjax();
	requestPro._checkMeteredDataType(props);

	return requestPro._getMeteredListName(props)
	.then(entityType => {
		if (entityType !== ajaxHelpers.listNamePresent) {
			props.listName = entityType;
		}
		
		let prepedItems = props.items.map(item => {
			let obj = {
				url: props.url,
				listName: entityType,
				infoToServer: item.updateInfo,
				itemId: item.itemId,
				etag :item.etag
			};
			if (props.listGUID) {
				obj.listGUID = props.listGUID;
			} else {
				obj.listTitle = props.listTitle;
			}
			return obj;
		});

		requestPro.setPreProcessingCB(function(itemData, index) {
			if (props.itemCreatedCB) {
				props.itemCreatedCB(itemData, index);
			}
			return updateItem(itemData);
		});
		requestPro.setItemProcessedCB(props.itemCompletedCB);
		return requestPro.init(prepedItems);
	
	});
}
/**
 * Recycles multiple items via REST
 * @param {object} props
 * @param {number[]} props.items - ids of items to recycle
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 * @returns {promise<object[]>}
 */
export function meteredRecycleItems(props) {

	let requestPro = new meteredAjax();
	requestPro._checkMeteredDataType(props);
	
	let prepedItems = props.items.map(item => {
		let obj = {
			url: props.url,
			itemId: item
		};
		if (props.listGUID) {
			obj.listGUID = props.listGUID;
		} else {
			obj.listTitle = props.listTitle;
		}
		return obj;
	});

	requestPro.setPreProcessingCB(function(itemData, index) {
		if (props.itemCreatedCB) {
			props.itemCreatedCB(itemData, index);
		}
		return recycleItem(itemData);
	});
	requestPro.setItemProcessedCB(props.itemCompletedCB);
	return requestPro.init(prepedItems);
}