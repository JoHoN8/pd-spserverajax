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
declare interface listProps extends props {
	listGuid: string,
	listTitle?: string
}
declare interface meteredGetProps extends props {
	getUrls: string[]
}
declare interface batchProfilesProps extends props {
	profileEmails: string[]
}
declare interface allResults extends listProps {
	select?: string,
	filter?: string,
	expand?: string,
	top?: string,
	orderBy?: string
}
declare interface getByEmailProps extends props {
	email: string
}
declare interface getUserListPermissions extends listProps {
	email: string
}
declare interface getByCamlProps extends listProps {
	query:string
}
declare interface userGroups extends props {
	userId:number
}
declare interface listPostBase extends listProps {
	listName?: string,
	infoToServer: anyOject
}
declare interface listItemProps extends listPostBase {
	etag?: string,
	itemId: number
}
declare interface listItemRecycleProps extends listPostBase {
	itemId: number
}
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
declare interface meteredBaseProps extends listProps {
	itemCreatedCB?: (itemData:anyOject, index:number) => void,
	itemCompletedCB?: (status:string, index:number) => void
}
declare interface meteredCreateProps extends meteredBaseProps {
	listName?: string,
	items: listPostBase[]
}
declare interface meteredUpdateProps extends meteredBaseProps {
	listName?: string,
	items: listItemProps[]
}
declare interface meteredRecycleProps extends meteredBaseProps {
	items: listItemRecycleProps[]
}
/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export function getContext(props:props): Promise<axios.AxiosResponse>;
export function getAllListResults(props:allResults): Promise<anyOject[]>;
export function getBatchMetered(props:meteredGetProps): Promise<anyOject[]>;
export function getBatchProfiles(props:batchProfilesProps): Promise<anyOject[]>;
export function getListInfo(props:listProps): Promise<axios.AxiosResponse>;
export function peopleSearch(props:peopleSerachProps): Promise<anyOject[]>;
export function ensureUser(props:getByEmailProps): Promise<axios.AxiosResponse>;
export function getSiteUserInfoByEmail(props:getByEmailProps): Promise<axios.AxiosResponse>;
export function getItemsByCaml(props:getByCamlProps): Promise<axios.AxiosResponse>;
export function getUserSitePermissions(props:getByEmailProps): Promise<string[]>;
export function getUserListPermissions(props:getUserListPermissions): Promise<string[]>;
export function getCurrentUserGroups(props:userGroups): Promise<string[]>;
export function createItem(props:listPostBase): Promise<axios.AxiosResponse>;
export function updateItem(props:listItemProps): Promise<axios.AxiosResponse>;
export function deleteItem(props:listItemProps): Promise<axios.AxiosResponse>;
export function recycleItem(props:listItemRecycleProps): Promise<axios.AxiosResponse>;
export function getUserProfileData(props?:profilePropertiesProps): Promise<anyOject>;
export function getListColumns(props:listProps): Promise<axios.AxiosResponse>;
export function meteredCreateItems(props:meteredCreateProps): Promise<meteredResponse[]>;
export function meteredUpdateItems(props:listItemProps): Promise<meteredResponse[]>;
export function meteredRecycleItems(props:meteredRecycleProps): Promise<meteredResponse[]>;
