# PydioApiV2.WorkspaceApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changes**](WorkspaceApi.md#changes) | **GET** /workspaces/{workspaceId}/changes/{sequenceId} | 
[**getWorkspaceInfo**](WorkspaceApi.md#getWorkspaceInfo) | **GET** /workspaces/{workspaceId} | 


<a name="changes"></a>
# **changes**
> [InlineResponse2003] changes(sequenceId, workspaceId)



Sends back all changes since a given sequence ID.    This plugin requires **meta.syncable** active on the workspace. 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.WorkspaceApi();

let sequenceId = 56; // Number | File to upload

let workspaceId = "workspaceId_example"; // String | Id or Alias of the workspace

apiInstance.changes(sequenceId, workspaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sequenceId** | **Number**| File to upload | 
 **workspaceId** | **String**| Id or Alias of the workspace | 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWorkspaceInfo"></a>
# **getWorkspaceInfo**
> InlineResponse2002 getWorkspaceInfo(xPydioWSInfo, workspaceId)



Get information about the given workspace. Info can be gathered via various plugins. Pass the expected metadata type via the X-Pydio-Ws-Info header. Currently supported values are quota|info|changes 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.WorkspaceApi();

let xPydioWSInfo = "xPydioWSInfo_example"; // String | 

let workspaceId = "workspaceId_example"; // String | Id or Alias of the workspace

apiInstance.getWorkspaceInfo(xPydioWSInfo, workspaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPydioWSInfo** | **String**|  | 
 **workspaceId** | **String**| Id or Alias of the workspace | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

