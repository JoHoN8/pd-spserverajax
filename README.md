<a name="module_pdspserverajax"></a>

## pdspserverajax
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

**Author**: "Jered McGlohon"  

* [pdspserverajax](#module_pdspserverajax)
    * _static_
        * [.getContext(props)](#module_pdspserverajax.getContext) ⇒ <code>promise.&lt;object&gt;</code>
        * [.getData(url)](#module_pdspserverajax.getData) ⇒ <code>promise.&lt;object&gt;</code>
        * [.getAllListResults(props)](#module_pdspserverajax.getAllListResults) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
        * [.getBatchMetered(props)](#module_pdspserverajax.getBatchMetered) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
        * [.getBatchProfiles(props)](#module_pdspserverajax.getBatchProfiles) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
        * [.getListInfo(props)](#module_pdspserverajax.getListInfo) ⇒ <code>promise.&lt;object&gt;</code>
        * [.peopleSearch(props)](#module_pdspserverajax.peopleSearch) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
        * [.ensureUser(props)](#module_pdspserverajax.ensureUser) ⇒ <code>promise.&lt;object&gt;</code>
        * [.getSiteUserInfoByEmail(props)](#module_pdspserverajax.getSiteUserInfoByEmail) ⇒ <code>promise.&lt;object&gt;</code>
        * [.getItemsByCaml(props)](#module_pdspserverajax.getItemsByCaml) ⇒ <code>promise.&lt;object&gt;</code>
        * [.getUserSitePermissions(props)](#module_pdspserverajax.getUserSitePermissions) ⇒ <code>promise.&lt;Array.&lt;string&gt;&gt;</code>
        * [.getUserListPermissions(props)](#module_pdspserverajax.getUserListPermissions) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
        * [.getCurrentUserGroups(props)](#module_pdspserverajax.getCurrentUserGroups) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
        * [.createItem(props)](#module_pdspserverajax.createItem) ⇒ <code>promise.&lt;object&gt;</code>
        * [.updateItem(props)](#module_pdspserverajax.updateItem) ⇒ <code>promise.&lt;object&gt;</code>
        * [.deleteItem(props)](#module_pdspserverajax.deleteItem) ⇒ <code>promise.&lt;object&gt;</code>
        * [.recycleItem(props)](#module_pdspserverajax.recycleItem) ⇒ <code>promise.&lt;object&gt;</code>
        * [.getUserProfileData(props)](#module_pdspserverajax.getUserProfileData) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
        * [.getListColumns(props)](#module_pdspserverajax.getListColumns) ⇒ <code>promise.&lt;object&gt;</code>
        * [.meteredCreateItems(props)](#module_pdspserverajax.meteredCreateItems) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
        * [.meteredUpdateItems(props)](#module_pdspserverajax.meteredUpdateItems) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
        * [.meteredRecycleItems(props)](#module_pdspserverajax.meteredRecycleItems) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * _inner_
        * [~itemCompletedProcessing](#module_pdspserverajax..itemCompletedProcessing) : <code>function</code>
        * [~itemPreProcessing](#module_pdspserverajax..itemPreProcessing) : <code>function</code>

<a name="module_pdspserverajax.getContext"></a>

### pdspserverajax.getContext(props) ⇒ <code>promise.&lt;object&gt;</code>
Gets a context object for server requests.the key from response is FormDigestValue

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |

<a name="module_pdspserverajax.getData"></a>

### pdspserverajax.getData(url) ⇒ <code>promise.&lt;object&gt;</code>
Get data from server using the REST endpoint

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | full odata url |

<a name="module_pdspserverajax.getAllListResults"></a>

### pdspserverajax.getAllListResults(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Gets all results for server requests.once the promise resolves you get an array of objects that are the servers response

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.select] | <code>string</code> |  |
| [props.filter] | <code>string</code> |  |
| [props.expand] | <code>string</code> |  |
| [props.top] | <code>string</code> |  |
| [props.orderBy] | <code>string</code> |  |

<a name="module_pdspserverajax.getBatchMetered"></a>

### pdspserverajax.getBatchMetered(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Gets all items requested in the getUrls property (batch request)

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | relative url of the site that contains the data |
| props.getUrls | <code>Array.&lt;string&gt;</code> | full odata urls |

<a name="module_pdspserverajax.getBatchProfiles"></a>

### pdspserverajax.getBatchProfiles(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Get user profiles from the server (batch request)

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.profileEmails | <code>Array.&lt;string&gt;</code> | email addresses of the users you want profile data for |

<a name="module_pdspserverajax.getListInfo"></a>

### pdspserverajax.getListInfo(props) ⇒ <code>promise.&lt;object&gt;</code>
Get list or library properties from server

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | a site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |

<a name="module_pdspserverajax.peopleSearch"></a>

### pdspserverajax.peopleSearch(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Get user profile info from the SharePoint search service

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.query | <code>string</code> | query that is passed to search service, ex "'" + 'Bureau="'+ divisionName + '"\'' |
| [props.sourceId] | <code>string</code> | source id for the search service to use, defaults to the out of the box people source id |
| props.properties | <code>Array.&lt;string&gt;</code> | specify which properties you want back from the request |

<a name="module_pdspserverajax.ensureUser"></a>

### pdspserverajax.ensureUser(props) ⇒ <code>promise.&lt;object&gt;</code>
Checks if user is in the site collection user table

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email address of the user to check |

<a name="module_pdspserverajax.getSiteUserInfoByEmail"></a>

### pdspserverajax.getSiteUserInfoByEmail(props) ⇒ <code>promise.&lt;object&gt;</code>
Gets user info from the site collection user table

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email address of the user to retrieve |

<a name="module_pdspserverajax.getItemsByCaml"></a>

### pdspserverajax.getItemsByCaml(props) ⇒ <code>promise.&lt;object&gt;</code>
Get request that uses CAML to filter results

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.query | <code>string</code> | CAML query |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |

<a name="module_pdspserverajax.getUserSitePermissions"></a>

### pdspserverajax.getUserSitePermissions(props) ⇒ <code>promise.&lt;Array.&lt;string&gt;&gt;</code>
Get a users permissions to a site

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email of the user to get permissions for |

<a name="module_pdspserverajax.getUserListPermissions"></a>

### pdspserverajax.getUserListPermissions(props) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
Get a users permissions to a list or library

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| props.email | <code>string</code> | email of the user to check permission of |

<a name="module_pdspserverajax.getCurrentUserGroups"></a>

### pdspserverajax.getCurrentUserGroups(props) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
Gets the SharePoint groups that a user has been added to, identify the user by passing the id number of the user for the site.

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.userId | <code>number</code> | users site id number |

<a name="module_pdspserverajax.createItem"></a>

### pdspserverajax.createItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Creates a single item in a list

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.listName] | <code>string</code> | server name for the list |
| props.infoToServer | <code>object</code> | object whos key is the column name and the value is what you want stored in that column |

<a name="module_pdspserverajax.updateItem"></a>

### pdspserverajax.updateItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Updates a single item in a list

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.listName] | <code>string</code> | server name for the list |
| [props.etag] | <code>string</code> | etag of the item to update |
| props.itemId | <code>number</code> | id of the item to update |
| props.infoToServer | <code>object</code> | object whos key is the column name and the value is what you want stored in that column |

<a name="module_pdspserverajax.deleteItem"></a>

### pdspserverajax.deleteItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Deletes a single item from a list or librarybe warned if you use this function, the item you delete will be gone and unrecoverable!!!!

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.etag] | <code>string</code> | etag of the item to update |
| props.itemId | <code>number</code> | id of the item to delete |

<a name="module_pdspserverajax.recycleItem"></a>

### pdspserverajax.recycleItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Sends a single item to the recycle bin of the site collection

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| props.itemId | <code>number</code> | id of the item to recycle |

<a name="module_pdspserverajax.getUserProfileData"></a>

### pdspserverajax.getUserProfileData(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Gets the profile information from the profile serviceif email is passed then that will be the profile data you get backif email is not passed you get current user profile data back

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| [props.email] | <code>string</code> | email of the user you want profile data for |

<a name="module_pdspserverajax.getListColumns"></a>

### pdspserverajax.getListColumns(props) ⇒ <code>promise.&lt;object&gt;</code>
Get the columns of a list or library

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |

<a name="module_pdspserverajax.meteredCreateItems"></a>

### pdspserverajax.meteredCreateItems(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Creates multiple items via REST, items array should contain object with a key of column name and property of value you want stored in that columnex. {	Title: "something"}

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.items | <code>Array.&lt;object&gt;</code> | items to create |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.listName] | <code>string</code> | server name for the list |
| [props.itemCreatedCB] | <code>itemPreProcessing</code> | this call back is called when an item is added to be processed |
| [props.itemCompletedCB] | <code>itemCompletedProcessing</code> | this call back is called when item is completed |

<a name="module_pdspserverajax.meteredUpdateItems"></a>

### pdspserverajax.meteredUpdateItems(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Updates multiple items via REST, items array should contain object with 2 properties itemId and updateInfo and 1 optional property etagex. {	itemId: 3,	etag: ""3""	updateInfo: {		Title: "example string"	}}

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.items | <code>Array.&lt;object&gt;</code> | items to update |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.listName] | <code>string</code> | server name for the list |
| [props.itemCreatedCB] | <code>itemPreProcessing</code> | this call back is called when an item is added to be processed |
| [props.itemCompletedCB] | <code>itemCompletedProcessing</code> | this call back is called when item is completed |

<a name="module_pdspserverajax.meteredRecycleItems"></a>

### pdspserverajax.meteredRecycleItems(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Recycles multiple items via REST

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.items | <code>Array.&lt;number&gt;</code> | ids of items to recycle |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.itemCreatedCB] | <code>itemPreProcessing</code> | this call back is called when an item is added to be processed |
| [props.itemCompletedCB] | <code>itemCompletedProcessing</code> | this call back is called when item is completed |

<a name="module_pdspserverajax..itemCompletedProcessing"></a>

### pdspserverajax~itemCompletedProcessing : <code>function</code>
The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effectsThe order number is your id to locate elements (dom or whatever) based on the specific item processing

**Kind**: inner typedef of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type |
| --- | --- |
| status | <code>string</code> | 
| index | <code>number</code> | 

<a name="module_pdspserverajax..itemPreProcessing"></a>

### pdspserverajax~itemPreProcessing : <code>function</code>
The index and itemData to process will be passed to this functionit MUST return a native promise.the order number is your id to locate elements (dom or whatever) based on the specific item processing

**Kind**: inner typedef of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type |
| --- | --- |
| itemData | <code>any</code> | 
| index | <code>number</code> | 

