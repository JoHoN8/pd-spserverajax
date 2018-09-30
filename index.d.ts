import * as axios from './node_modules/axios'

// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file for function modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace pdspserverajax;

//interfaces
interface anyOject {
	[key:string]: any
}
declare interface props {
	origin?: string,
	url: string
}
declare interface meteredGetProps extends props {
	getUrls: string[]
}
declare interface batchProfilesProps extends props {
	profileEmails: string[]
}
declare interface listTitle {
	listTitle:string;
}
declare interface listGuid {
	listGUID:string;
}
declare interface listInfoByListTitle extends props, listTitle {}
declare interface listInfoByListGuid extends props, listGuid {}

declare interface allResults extends props {
	select?: string,
	filter?: string,
	expand?: string,
	top?: string,
	orderBy?: string
}
declare interface allResultsByListTitle extends allResults {
	listTitle:string;
}
declare interface allResultsByListGuid extends allResults {
	listGUID:string;
}
declare interface getByEmailProps extends props {
	email: string
}

declare interface getUserListPermissions extends props {
	email: string
}
declare interface getUserListPermissionsByListTitle extends getUserListPermissions, listTitle {}
declare interface getUserListPermissionsByListGuid extends getUserListPermissions, listGuid {}

declare interface getByCamlProps extends props {
	query:string
}
declare interface getWithCamlByListTitle extends getByCamlProps, listTitle {}
declare interface getWithCamlByListGuid extends getByCamlProps, listGuid {}

declare interface userGroups extends props {
	userId:number
}
declare interface listPostBase extends props {
	listName?: string,
	infoToServer: any
}
declare interface listPostByListTitle extends listPostBase, listTitle {}
declare interface listPostByListGuid extends listPostBase, listGuid {}

declare interface listItemProps {
	etag?: string,
	itemId: number
}
declare interface listItemPropsByListTitle extends listItemProps, listPostByListTitle {}
declare interface listItemPropsByListGuid extends listItemProps, listPostByListGuid {}

declare interface listItemRecycleProps {
	itemId: number
}
declare interface listItemRecycleByListTitle extends listItemRecycleProps, listPostByListTitle {}
declare interface listItemRecycleByListGuid extends listItemRecycleProps, listPostByListGuid {}

declare interface profilePropertiesProps {
	origin:string,
	email:string
}
declare interface meteredResponse {
	response: any,
	status: string,
	completed: boolean
}
declare interface peopleSerachProps extends props {
	query: string,
	sourceId?: string,
	properties: string[]
}
declare interface meteredBaseProps extends props {
	itemCreatedCB?: (itemData:any, index:number) => void,
	itemCompletedCB?: (status:string, index:number) => void
}
declare interface meteredByListTitle extends listTitle, meteredBaseProps {}
declare interface meteredByListGuid extends listGuid, meteredBaseProps {}

declare interface meteredCreateProps {
	listName?: string,
	items: listPostBase[]
}
declare interface meteredCreateByListTitle extends meteredCreateProps, meteredByListTitle {}
declare interface meteredCreateByListGuid extends meteredCreateProps, meteredByListGuid {}

declare interface meteredUpdateProps {
	listName?: string,
	items: (listItemPropsByListTitle|listItemPropsByListGuid)[]
}
declare interface meteredUpdateByListTitle extends meteredUpdateProps, meteredByListTitle {}
declare interface meteredUpdateByListGuid extends meteredUpdateProps, meteredByListGuid {}

declare interface meteredRecycleProps {
	items: (listItemRecycleByListTitle|listItemRecycleByListGuid)[]
}
declare interface meteredRecycleByListTitle extends meteredRecycleProps, meteredByListTitle {}
declare interface meteredRecycleByListGuid extends meteredRecycleProps, meteredByListGuid {}

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export function getContext(props:props): Promise<axios.AxiosResponse>;
export function getData(url:string): Promise<axios.AxiosResponse>;
export function getAllListResults(props:allResultsByListTitle|allResultsByListGuid): Promise<any[]>;
export function getBatchMetered(props:meteredGetProps): Promise<any[]>;
export function getBatchProfiles(props:batchProfilesProps): Promise<any[]>;
export function getListInfo(props:listInfoByListTitle|listInfoByListGuid): Promise<axios.AxiosResponse>;
export function peopleSearch(props:peopleSerachProps): Promise<any[]>;
export function ensureUser(props:getByEmailProps): Promise<axios.AxiosResponse>;
export function getSiteUserInfoByEmail(props:getByEmailProps): Promise<axios.AxiosResponse>;
export function getItemsByCaml(props:getWithCamlByListTitle|getWithCamlByListGuid): Promise<axios.AxiosResponse>;
export function getUserSitePermissions(props:getByEmailProps): Promise<string[]>;
export function getUserListPermissions(props:getUserListPermissionsByListTitle|getUserListPermissionsByListGuid): Promise<string[]>;
export function getCurrentUserGroups(props:userGroups): Promise<string[]>;
export function createItem(props:listPostByListTitle|listPostByListGuid): Promise<axios.AxiosResponse>;
export function updateItem(props:listItemPropsByListTitle|listItemPropsByListGuid): Promise<axios.AxiosResponse>;
export function deleteItem(props:listItemPropsByListTitle|listItemPropsByListGuid): Promise<axios.AxiosResponse>;
export function recycleItem(props:listItemRecycleByListTitle|listItemRecycleByListGuid): Promise<axios.AxiosResponse>;
export function getUserProfileData(props?:profilePropertiesProps): Promise<any>;
export function getListColumns(props:listInfoByListTitle|listInfoByListGuid): Promise<axios.AxiosResponse>;
export function meteredCreateItems(props:meteredCreateByListTitle|meteredCreateByListGuid): Promise<meteredResponse[]>;
export function meteredUpdateItems(props:meteredUpdateByListTitle|meteredUpdateByListGuid): Promise<meteredResponse[]>;
export function meteredRecycleItems(props:meteredRecycleByListTitle|meteredRecycleByListGuid): Promise<meteredResponse[]>;
