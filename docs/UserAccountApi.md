# PydioApiV2.UserAccountApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userInfo**](UserAccountApi.md#userInfo) | **GET** /user | 
[**userPreferences**](UserAccountApi.md#userPreferences) | **GET** /user/preferences | 
[**userWorkspaces**](UserAccountApi.md#userWorkspaces) | **GET** /user/workspaces | 


<a name="userInfo"></a>
# **userInfo**
> Object userInfo()



List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/repositories 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.UserAccountApi();
apiInstance.userInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userPreferences"></a>
# **userPreferences**
> Object userPreferences()



List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/preferences 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.UserAccountApi();
apiInstance.userPreferences().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userWorkspaces"></a>
# **userWorkspaces**
> Object userWorkspaces()



List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/repositories 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.UserAccountApi();
apiInstance.userWorkspaces().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

