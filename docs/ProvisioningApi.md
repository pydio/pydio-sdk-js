# PydioApiV2.ProvisioningApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminAddWorkspaceFeature**](ProvisioningApi.md#adminAddWorkspaceFeature) | **POST** /admin/workspaces/{workspaceId}/features/{metaId} | 
[**adminCreateWorkspace**](ProvisioningApi.md#adminCreateWorkspace) | **POST** /admin/workspaces | 
[**adminDeleteWorkspace**](ProvisioningApi.md#adminDeleteWorkspace) | **DELETE** /admin/workspaces/{workspaceId} | 
[**adminEditWorkspace**](ProvisioningApi.md#adminEditWorkspace) | **PATCH** /admin/workspaces/{workspaceId} | 
[**adminEditWorkspaceFeature**](ProvisioningApi.md#adminEditWorkspaceFeature) | **PATCH** /admin/workspaces/{workspaceId}/features/{metaId} | 
[**adminGetWorkspace**](ProvisioningApi.md#adminGetWorkspace) | **GET** /admin/workspaces/{workspaceId} | 
[**adminListWorkspaces**](ProvisioningApi.md#adminListWorkspaces) | **GET** /admin/workspaces | 
[**adminRemoveWorkspaceFeature**](ProvisioningApi.md#adminRemoveWorkspaceFeature) | **DELETE** /admin/workspaces/{workspaceId}/features/{metaId} | 
[**adminUpdateWorkspace**](ProvisioningApi.md#adminUpdateWorkspace) | **PATCH** /admin/workspaces | 
[**createPeople**](ProvisioningApi.md#createPeople) | **POST** /admin/people/{path} | 
[**createRole**](ProvisioningApi.md#createRole) | **POST** /admin/roles/{roleId} | 
[**deletePeople**](ProvisioningApi.md#deletePeople) | **DELETE** /admin/people/{path} | 
[**deleteRole**](ProvisioningApi.md#deleteRole) | **DELETE** /admin/roles/{roleId} | 
[**getPeople**](ProvisioningApi.md#getPeople) | **GET** /admin/people/{path} | 
[**getRole**](ProvisioningApi.md#getRole) | **GET** /admin/roles/{roleId} | 
[**getRoles**](ProvisioningApi.md#getRoles) | **GET** /admin/roles | 
[**patchPeople**](ProvisioningApi.md#patchPeople) | **PATCH** /admin/people/{path} | 
[**updateRole**](ProvisioningApi.md#updateRole) | **PATCH** /admin/roles/{roleId} | 


<a name="adminAddWorkspaceFeature"></a>
# **adminAddWorkspaceFeature**
> PydioResponse adminAddWorkspaceFeature(workspaceId, metaId, parameters, opts)



Add a metasource 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let workspaceId = "workspaceId_example"; // String | id or alias of this workspace

let metaId = "metaId_example"; // String | plugin id for new meta

let parameters = new PydioApiV2.MetaSourceParameters(); // MetaSourceParameters | Meta source parameters

let opts = { 
  'format': "format_example" // String | Format produced in output (defaults to xml)
};
apiInstance.adminAddWorkspaceFeature(workspaceId, metaId, parameters, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| id or alias of this workspace | 
 **metaId** | **String**| plugin id for new meta | 
 **parameters** | [**MetaSourceParameters**](MetaSourceParameters.md)| Meta source parameters | 
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminCreateWorkspace"></a>
# **adminCreateWorkspace**
> AdminWorkspace adminCreateWorkspace(payload)



Create a workspace from scratch by posting JSON data 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let payload = new PydioApiV2.AdminWorkspace(); // AdminWorkspace | Repository details

apiInstance.adminCreateWorkspace(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**AdminWorkspace**](AdminWorkspace.md)| Repository details | 

### Return type

[**AdminWorkspace**](AdminWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminDeleteWorkspace"></a>
# **adminDeleteWorkspace**
> PydioResponse adminDeleteWorkspace(workspaceId)



Load detail of a workspace 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let workspaceId = "workspaceId_example"; // String | Id or Alias / Load detail of this workspace

apiInstance.adminDeleteWorkspace(workspaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| Id or Alias / Load detail of this workspace | 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminEditWorkspace"></a>
# **adminEditWorkspace**
> AdminWorkspace adminEditWorkspace(workspaceId, payload)



NOT IMPLEMENTED YET - Edit details of a workspace 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let workspaceId = "workspaceId_example"; // String | Id or Alias / Update details for this workspace

let payload = new PydioApiV2.AdminWorkspace(); // AdminWorkspace | Repository details

apiInstance.adminEditWorkspace(workspaceId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| Id or Alias / Update details for this workspace | 
 **payload** | [**AdminWorkspace**](AdminWorkspace.md)| Repository details | 

### Return type

[**AdminWorkspace**](AdminWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminEditWorkspaceFeature"></a>
# **adminEditWorkspaceFeature**
> PydioResponse adminEditWorkspaceFeature(workspaceId, metaId, parameters)



Edit a metasource 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let workspaceId = "workspaceId_example"; // String | id or alias of this workspace

let metaId = "metaId_example"; // String | plugin id for meta

let parameters = new PydioApiV2.MetaSourceParameters(); // MetaSourceParameters | Meta source parameters

apiInstance.adminEditWorkspaceFeature(workspaceId, metaId, parameters).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| id or alias of this workspace | 
 **metaId** | **String**| plugin id for meta | 
 **parameters** | [**MetaSourceParameters**](MetaSourceParameters.md)| Meta source parameters | 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminGetWorkspace"></a>
# **adminGetWorkspace**
> AdminWorkspace adminGetWorkspace(workspaceId, opts)



Load detail of a workspace 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let workspaceId = "workspaceId_example"; // String | Id or Alias / Load detail of this workspace

let opts = { 
  'loadFillValues': true, // Boolean | Load additional data to build a form for editing this role
  'format': "format_example" // String | Format produced in output (defaults to xml)
};
apiInstance.adminGetWorkspace(workspaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| Id or Alias / Load detail of this workspace | 
 **loadFillValues** | **Boolean**| Load additional data to build a form for editing this role | [optional] 
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 

### Return type

[**AdminWorkspace**](AdminWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminListWorkspaces"></a>
# **adminListWorkspaces**
> NodeList adminListWorkspaces(opts)



List Workspaces 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let opts = { 
  'format': "format_example" // String | Format produced in output (defaults to xml)
};
apiInstance.adminListWorkspaces(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 

### Return type

[**NodeList**](NodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminRemoveWorkspaceFeature"></a>
# **adminRemoveWorkspaceFeature**
> PydioResponse adminRemoveWorkspaceFeature(workspaceId, metaId)



Edit a metasource 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let workspaceId = "workspaceId_example"; // String | id or alias of this workspace

let metaId = "metaId_example"; // String | plugin id for meta

apiInstance.adminRemoveWorkspaceFeature(workspaceId, metaId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| id or alias of this workspace | 
 **metaId** | **String**| plugin id for meta | 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="adminUpdateWorkspace"></a>
# **adminUpdateWorkspace**
> AdminWorkspace adminUpdateWorkspace(payload)



Update a workspace by posting JSON data 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let payload = new PydioApiV2.AdminWorkspace(); // AdminWorkspace | Repository details

apiInstance.adminUpdateWorkspace(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**AdminWorkspace**](AdminWorkspace.md)| Repository details | 

### Return type

[**AdminWorkspace**](AdminWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="createPeople"></a>
# **createPeople**
> PydioResponse createPeople(path, resourceType, opts)



Create a new user or a new group with this path. To create a user,  make sure to pass a userPass parameter. Otherwise it will create a  group. 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let path = "path_example"; // String | User or group identifier, including full group path

let resourceType = "resourceType_example"; // String | Wether it's a user or a group

let opts = { 
  'format': "format_example", // String | Format produced in output (defaults to xml)
  'groupLabel': "groupLabel_example", // String | Label of the new group if we are creating a group
  'userPass': "userPass_example" // String | Password of the new user if we are creating a user
};
apiInstance.createPeople(path, resourceType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| User or group identifier, including full group path | 
 **resourceType** | **String**| Wether it&#39;s a user or a group | 
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 
 **groupLabel** | **String**| Label of the new group if we are creating a group | [optional] 
 **userPass** | **String**| Password of the new user if we are creating a user | [optional] 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRole"></a>
# **createRole**
> Role createRole(roleId, role)



Create a new role with this ID 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let roleId = "roleId_example"; // String | Id of the role to load

let role = new PydioApiV2.Role(); // Role | JSON description of the new role

apiInstance.createRole(roleId, role).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| Id of the role to load | 
 **role** | [**Role**](Role.md)| JSON description of the new role | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePeople"></a>
# **deletePeople**
> PydioResponse deletePeople(path, opts)



Delete Role by Id 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let path = "path_example"; // String | User or group identifier, including full group path

let opts = { 
  'format': "format_example" // String | Format produced in output (defaults to xml)
};
apiInstance.deletePeople(path, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| User or group identifier, including full group path | 
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRole"></a>
# **deleteRole**
> PydioResponse deleteRole(roleId)



Delete Role by Id 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let roleId = "roleId_example"; // String | Id of the role to delete

apiInstance.deleteRole(roleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| Id of the role to delete | 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPeople"></a>
# **getPeople**
> NodeList getPeople(path, opts)



List roles 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let path = "path_example"; // String | User or group identifier, including full group path (optional)

let opts = { 
  'format': "format_example", // String | Format produced in output (defaults to xml)
  'list': true // Boolean | list children of the current resource
};
apiInstance.getPeople(path, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| User or group identifier, including full group path (optional) | 
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 
 **list** | **Boolean**| list children of the current resource | [optional] [default to true]

### Return type

[**NodeList**](NodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getRole"></a>
# **getRole**
> Role getRole(roleId, opts)



Get Role by Id 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let roleId = "roleId_example"; // String | Id of the role to load

let opts = { 
  'format': "format_example", // String | Format produced in output (defaults to xml)
  'loadFillValues': true // Boolean | Load additional data to build a form for editing this role
};
apiInstance.getRole(roleId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| Id of the role to load | 
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 
 **loadFillValues** | **Boolean**| Load additional data to build a form for editing this role | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRoles"></a>
# **getRoles**
> NodeList getRoles(opts)



List roles 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let opts = { 
  'format': "format_example" // String | Format produced in output (defaults to xml)
};
apiInstance.getRoles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 

### Return type

[**NodeList**](NodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="patchPeople"></a>
# **patchPeople**
> PydioResponse patchPeople(path, resourceType, patchTuple, opts)



Update user or group specific data with this path. Use resourceType parameter to discriminate, and send a parameterName/parameterValue couple to be patched.  Authorized parameterName values are described below, along with the parameterValue corresponding specification:  - For groups   - groupLabel : relabel an existing group - For users   - userPass: change user password   - userProfile: update user profile   - userLock: set/remove a lock on a user. Value must be a lockname:lockvalue string where lockvalue is \&quot;true\&quot; or \&quot;fale\&quot;.   - userRoles: Bunch update roles, eventually reorder them, as a JSON encoded array.   - userAddRole: add a role to the user   - userRemoveRole: remove a role currently applied to the user.   - userPreferences: a JSON associative array of key/values to update.  To edit user/group permissions or parameters, use the role api instead,  using the object specific role_id (AJXP_GRP_/groupPath or AJXP_USR_/userId). 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let path = "path_example"; // String | User or group identifier, including full group path

let resourceType = "resourceType_example"; // String | Wether it's a user or a group

let patchTuple = new PydioApiV2.PeoplePatch(); // PeoplePatch | parameterName / parameterValue association

let opts = { 
  'format': "format_example" // String | Format produced in output (defaults to xml)
};
apiInstance.patchPeople(path, resourceType, patchTuple, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| User or group identifier, including full group path | 
 **resourceType** | **String**| Wether it&#39;s a user or a group | 
 **patchTuple** | [**PeoplePatch**](PeoplePatch.md)| parameterName / parameterValue association | 
 **format** | **String**| Format produced in output (defaults to xml) | [optional] 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRole"></a>
# **updateRole**
> Role updateRole(roleId, role)



Update the role 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.ProvisioningApi();

let roleId = "roleId_example"; // String | Id of the role to load

let role = new PydioApiV2.Role(); // Role | JSON description of the new role

apiInstance.updateRole(roleId, role).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| Id of the role to load | 
 **role** | [**Role**](Role.md)| JSON description of the new role | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

