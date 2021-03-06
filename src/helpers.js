/*
e
*/
import {getURLOrigin} from 'pd-sputil';
export const minimalMeta = "application/json;odata=minimalmetadata";
export const verboseMeta = "application/json;odata=verbose";
export const listNamePresent = "listName_present";
export const meteredItemsIncorrectDataType = "An array must be passed to utilize the metered functions";
export const listItemEntityPattern = /(SP\.Data\.).+(ListItem)/i;
export const createlistitemtype = function(listName) {
	return 'SP.Data.' + 
		listName.charAt(0).toUpperCase() + 
		listName.slice(1) + 
		'ListItem';
};
export const checkUrlOrigin = function(props) {

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
export const listUrlConfigure = function(props) {

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
export const listItemUrlConfigure = function(props) {
	//for create, update, delete
	var item = props.itemId || '';

	if (props.listItemUrl) {
		return;
	}

	listUrlConfigure(props);

	props.listItemUrl = props.listUrl += "/items("+ item +")";
	return props;
};
export const parseBasePermissions = function(value) {
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
export const createGetAllUrl = function(props) {

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

	if(/&$/.test(props.listUrl)) {
		//if & is the last character then get rid of it
		props.listUrl = props.listUrl.slice(0,-1);
	}

};