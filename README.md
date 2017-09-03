<a name="module_pd-spserverajax"></a>

## pd-spserverajax
pd-spservercontacts
	requires babel polyfill for object assign and promise
	needs encodeAccountName, getURLOrigin from pd-sputil
	needs all of axios - when using this library you get the response of the server from data property when a plain axios response is returned
	exposes a global pdspserverajax if used in script tag of browser


* [pd-spserverajax](#module_pd-spserverajax)
    * [.ajaxGetContext(props)](#module_pd-spserverajax.ajaxGetContext) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetData(url)](#module_pd-spserverajax.ajaxGetData) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetAllListResults(props)](#module_pd-spserverajax.ajaxGetAllListResults) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxGetBatchMetered(props)](#module_pd-spserverajax.ajaxGetBatchMetered) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxGetBatchProfiles(props)](#module_pd-spserverajax.ajaxGetBatchProfiles) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxGetListInfo(props)](#module_pd-spserverajax.ajaxGetListInfo) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxPeopleSearch(props)](#module_pd-spserverajax.ajaxPeopleSearch) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.ajaxEnsureUser(props)](#module_pd-spserverajax.ajaxEnsureUser) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetSiteUserInfoByEmail(props)](#module_pd-spserverajax.ajaxGetSiteUserInfoByEmail) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetItemsByCaml(props)](#module_pd-spserverajax.ajaxGetItemsByCaml) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxGetUserSitePermissions(props)](#module_pd-spserverajax.ajaxGetUserSitePermissions) ⇒ <code>promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.ajaxGetUserListPermissions(props)](#module_pd-spserverajax.ajaxGetUserListPermissions) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
    * [.ajaxGetCurrentUserGroups(props)](#module_pd-spserverajax.ajaxGetCurrentUserGroups) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
    * [.ajaxCreateItem(props)](#module_pd-spserverajax.ajaxCreateItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxUpdateItem(props)](#module_pd-spserverajax.ajaxUpdateItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxDeleteItem(props)](#module_pd-spserverajax.ajaxDeleteItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.ajaxRecycleItem(props)](#module_pd-spserverajax.ajaxRecycleItem) ⇒ <code>promise.&lt;object&gt;</code>
    * [.userProfileData(props)](#module_pd-spserverajax.userProfileData) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.getListColumns(props)](#module_pd-spserverajax.getListColumns) ⇒ <code>promise.&lt;object&gt;</code>

<a name="module_pd-spserverajax.ajaxGetContext"></a>

### pd-spserverajax.ajaxGetContext(props) ⇒ <code>promise.&lt;object&gt;</code>
Gets a context object for server requests.the key from response is FormDigestValue

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |

<a name="module_pd-spserverajax.ajaxGetData"></a>

### pd-spserverajax.ajaxGetData(url) ⇒ <code>promise.&lt;object&gt;</code>
Get data from server using the REST endpoint

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | full odata url |

<a name="module_pd-spserverajax.ajaxGetAllListResults"></a>

### pd-spserverajax.ajaxGetAllListResults(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Gets all results for server requests.once the promise resolves you get an array of objects that are the servers response

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

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

<a name="module_pd-spserverajax.ajaxGetBatchMetered"></a>

### pd-spserverajax.ajaxGetBatchMetered(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Gets all items requested in the getUrls property (batch request)

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | relative url of the site that contains the data |
| props.getUrls | <code>Array.&lt;string&gt;</code> | full odata urls |

<a name="module_pd-spserverajax.ajaxGetBatchProfiles"></a>

### pd-spserverajax.ajaxGetBatchProfiles(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Get user profiles from the server (batch request)

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.profileEmails | <code>Array.&lt;string&gt;</code> | email addresses of the users you want profile data for |

<a name="module_pd-spserverajax.ajaxGetListInfo"></a>

### pd-spserverajax.ajaxGetListInfo(props) ⇒ <code>promise.&lt;object&gt;</code>
Get list or library properties from server

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | a site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |

<a name="module_pd-spserverajax.ajaxPeopleSearch"></a>

### pd-spserverajax.ajaxPeopleSearch(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Get user profile info from the SharePoint search service

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.query | <code>string</code> | query that is passed to search service, ex "'" + 'Bureau="'+ divisionName + '"\'' |
| [props.sourceId] | <code>string</code> | source id for the search service to use, defaults to the out of the box people source id |
| props.properties | <code>Array.&lt;string&gt;</code> | specify which properties you want back from the request |

<a name="module_pd-spserverajax.ajaxEnsureUser"></a>

### pd-spserverajax.ajaxEnsureUser(props) ⇒ <code>promise.&lt;object&gt;</code>
Checks if user is in the site collection user table

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email address of the user to check |

<a name="module_pd-spserverajax.ajaxGetSiteUserInfoByEmail"></a>

### pd-spserverajax.ajaxGetSiteUserInfoByEmail(props) ⇒ <code>promise.&lt;object&gt;</code>
Gets user info from the site collection user table

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email address of the user to retrieve |

<a name="module_pd-spserverajax.ajaxGetItemsByCaml"></a>

### pd-spserverajax.ajaxGetItemsByCaml(props) ⇒ <code>promise.&lt;object&gt;</code>
Get request that uses CAML to filter results

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.query | <code>string</code> | CAML query |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |

<a name="module_pd-spserverajax.ajaxGetUserSitePermissions"></a>

### pd-spserverajax.ajaxGetUserSitePermissions(props) ⇒ <code>promise.&lt;Array.&lt;string&gt;&gt;</code>
Get a users permissions to a site

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.email | <code>string</code> | email of the user to get permissions for |

<a name="module_pd-spserverajax.ajaxGetUserListPermissions"></a>

### pd-spserverajax.ajaxGetUserListPermissions(props) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
Get a users permissions to a list or library

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| props.email | <code>string</code> | email of the user to check permission of |

<a name="module_pd-spserverajax.ajaxGetCurrentUserGroups"></a>

### pd-spserverajax.ajaxGetCurrentUserGroups(props) ⇒ <code>promise.&lt;Array.&lt;sting&gt;&gt;</code>
Gets the SharePoint groups that a user has been added to, identify the user by passing the id number of the user for the site.

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.userId | <code>number</code> | users site id number |

<a name="module_pd-spserverajax.ajaxCreateItem"></a>

### pd-spserverajax.ajaxCreateItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Creates a single item in a list

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.listName] | <code>string</code> | server name for the list |
| props.infoToServer | <code>object</code> | object whos key is the column name and the value is what you want stored in that column |

<a name="module_pd-spserverajax.ajaxUpdateItem"></a>

### pd-spserverajax.ajaxUpdateItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Updates a single item in a list

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

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

<a name="module_pd-spserverajax.ajaxDeleteItem"></a>

### pd-spserverajax.ajaxDeleteItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Deletes a single item from a list or librarybe warned if you use this function, the item you delete will be gone and unrecoverable!!!!

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.etag] | <code>string</code> | etag of the item to update |
| props.itemId | <code>number</code> | id of the item to delete |

<a name="module_pd-spserverajax.ajaxRecycleItem"></a>

### pd-spserverajax.ajaxRecycleItem(props) ⇒ <code>promise.&lt;object&gt;</code>
Sends a single item to the recycle bin of the site collection

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| props.itemId | <code>number</code> | id of the item to recycle |

<a name="module_pd-spserverajax.userProfileData"></a>

### pd-spserverajax.userProfileData(props) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Gets the profile information from the profile serviceif email is passed then that will be the profile data you get backif email is not passed you get current user profile data back

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| [props.email] | <code>string</code> | email of the user you want profile data for |

<a name="module_pd-spserverajax.getListColumns"></a>

### pd-spserverajax.getListColumns(props) ⇒ <code>promise.&lt;object&gt;</code>
Get the columns of a list or library

**Kind**: static method of [<code>pd-spserverajax</code>](#module_pd-spserverajax)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| [props.allData] | <code>boolean</code> | include read only and hidden columns |

