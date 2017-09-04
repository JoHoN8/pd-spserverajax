<a name="module_pdspserverajax"></a>

## pdspserverajax
<h4>Title: pd-spservercontacts</h4>
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
    * [.ajaxGetContext(props)](#module_pdspserverajax.ajaxGetContext) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetData(url)](#module_pdspserverajax.ajaxGetData) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetAllListResults(props)](#module_pdspserverajax.ajaxGetAllListResults) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxGetBatchMetered(props)](#module_pdspserverajax.ajaxGetBatchMetered) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxGetBatchProfiles(props)](#module_pdspserverajax.ajaxGetBatchProfiles) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxGetListInfo(props)](#module_pdspserverajax.ajaxGetListInfo) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxPeopleSearch(props)](#module_pdspserverajax.ajaxPeopleSearch) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxEnsureUser(props)](#module_pdspserverajax.ajaxEnsureUser) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetSiteUserInfoByEmail(props)](#module_pdspserverajax.ajaxGetSiteUserInfoByEmail) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetItemsByCaml(props)](#module_pdspserverajax.ajaxGetItemsByCaml) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetUserSitePermissions(props)](#module_pdspserverajax.ajaxGetUserSitePermissions) ⇒ <code>promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.ajaxGetUserListPermissions(props)](#module_pdspserverajax.ajaxGetUserListPermissions) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
    * [.ajaxGetCurrentUserGroups(props)](#module_pdspserverajax.ajaxGetCurrentUserGroups) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
    * [.ajaxCreateItem(props)](#module_pdspserverajax.ajaxCreateItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxUpdateItem(props)](#module_pdspserverajax.ajaxUpdateItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxDeleteItem(props)](#module_pdspserverajax.ajaxDeleteItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxRecycleItem(props)](#module_pdspserverajax.ajaxRecycleItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.userProfileData(props)](#module_pdspserverajax.userProfileData) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.getListColumns(props)](#module_pdspserverajax.getListColumns) ⇒ <code>promise.&lt;object&gt;</code>

<a name="module_pdspserverajax.ajaxGetContext"></a>

### pdspserverajax.ajaxGetContext(props) ⇒ <code>promise.&lt;object&gt;</code>
Gets a context object for server requests.the key from response is FormDigestValue

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |

<a name="module_pdspserverajax.ajaxGetData"></a>

### pdspserverajax.ajaxGetData(url) ⇒ <code>promise.&lt;object&gt;</code>
Get data from server using the REST endpoint

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | full odata url |

<a name="module_pdspserverajax.ajaxGetAllListResults"></a>

### pdspserverajax.ajaxGetAllListResults(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
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

<a name="module_pdspserverajax.ajaxGetBatchMetered"></a>

### pdspserverajax.ajaxGetBatchMetered(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Gets all items requested in the getUrls property (batch request)

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | relative url of the site that contains the data |
| props.getUrls | <code>Array.&lt;string&gt;</code> | full odata urls |

<a name="module_pdspserverajax.ajaxGetBatchProfiles"></a>

### pdspserverajax.ajaxGetBatchProfiles(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Get user profiles from the server (batch request)

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.profileEmails | <code>Array.&lt;string&gt;</code> | email addresses of the users you want profile data for |

<a name="module_pdspserverajax.ajaxGetListInfo"></a>

### pdspserverajax.ajaxGetListInfo(props) ⇒ <code>promise.&lt;object&gt;</code>
Get list or library properties from server

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | a site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |

<a name="module_pdspserverajax.ajaxPeopleSearch"></a>

### pdspserverajax.ajaxPeopleSearch(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
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

<a name="module_pdspserverajax.ajaxEnsureUser"></a>

### pdspserverajax.ajaxEnsureUser(props) ⇒ <code>promise.&lt;object&gt;</code>
Checks if user is in the site collection user table

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email address of the user to check |

<a name="module_pdspserverajax.ajaxGetSiteUserInfoByEmail"></a>

### pdspserverajax.ajaxGetSiteUserInfoByEmail(props) ⇒ <code>promise.&lt;object&gt;</code>
Gets user info from the site collection user table

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email address of the user to retrieve |

<a name="module_pdspserverajax.ajaxGetItemsByCaml"></a>

### pdspserverajax.ajaxGetItemsByCaml(props) ⇒ <code>promise.&lt;object&gt;</code>
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

<a name="module_pdspserverajax.ajaxGetUserSitePermissions"></a>

### pdspserverajax.ajaxGetUserSitePermissions(props) ⇒ <code>promise.&lt;Array.&lt;string&gt;&gt;</code>
Get a users permissions to a site

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email of the user to get permissions for |

<a name="module_pdspserverajax.ajaxGetUserListPermissions"></a>

### pdspserverajax.ajaxGetUserListPermissions(props) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
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

<a name="module_pdspserverajax.ajaxGetCurrentUserGroups"></a>

### pdspserverajax.ajaxGetCurrentUserGroups(props) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
Gets the SharePoint groups that a user has been added to, identify the user by passing the id number of the user for the site.

**Kind**: static method of [<code>pdspserverajax</code>](#module_pdspserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.userId | <code>number</code> | users site id number |

<a name="module_pdspserverajax.ajaxCreateItem"></a>

### pdspserverajax.ajaxCreateItem(props) ⇒ <code>promise.&lt;object&gt;</code>
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

<a name="module_pdspserverajax.ajaxUpdateItem"></a>

### pdspserverajax.ajaxUpdateItem(props) ⇒ <code>promise.&lt;object&gt;</code>
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

<a name="module_pdspserverajax.ajaxDeleteItem"></a>

### pdspserverajax.ajaxDeleteItem(props) ⇒ <code>promise.&lt;object&gt;</code>
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

<a name="module_pdspserverajax.ajaxRecycleItem"></a>

### pdspserverajax.ajaxRecycleItem(props) ⇒ <code>promise.&lt;object&gt;</code>
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

<a name="module_pdspserverajax.userProfileData"></a>

### pdspserverajax.userProfileData(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
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
| [props.allData] | <code>boolean</code> | include read only and hidden columns |

