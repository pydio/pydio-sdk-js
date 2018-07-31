# PydioApiV2.TaskApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TaskApi.md#createTask) | **POST** /tasks/{taskId} | 
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /tasks/{taskId} | 
[**getTaskInfo**](TaskApi.md#getTaskInfo) | **GET** /tasks/{taskId} | 
[**listTasks**](TaskApi.md#listTasks) | **GET** /tasks | 
[**updateTask**](TaskApi.md#updateTask) | **PATCH** /tasks/{taskId} | 


<a name="createTask"></a>
# **createTask**
> Task createTask(taskId, opts)



Create a task on the server. This will generally trigger a server-side background \&quot;Task\&quot;, which ID will be returned in the PydioResponse[&#39;tasks&#39;] array 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.TaskApi();

let taskId = "taskId_example"; // String | Task to launch on the server

let opts = { 
  'requestBody': new PydioApiV2.Task() // Task | JSON Task object
};
apiInstance.createTask(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Task to launch on the server | 
 **requestBody** | [**Task**](Task.md)| JSON Task object | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTask"></a>
# **deleteTask**
> Task deleteTask(taskId)



Update a task on the server. 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.TaskApi();

let taskId = "taskId_example"; // String | Task to delete on the server

apiInstance.deleteTask(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Task to delete on the server | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTaskInfo"></a>
# **getTaskInfo**
> Task getTaskInfo(taskId)



Get information about a currently running task Id 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.TaskApi();

let taskId = "taskId_example"; // String | Task to monitor on the server

apiInstance.getTaskInfo(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Task to monitor on the server | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listTasks"></a>
# **listTasks**
> [Task] listTasks(workspaceId, opts)



List tasks currently running on the server (and visible to the current user). 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.TaskApi();

let workspaceId = "workspaceId_example"; // String | Id or Alias of the workspace

let opts = { 
  'filter': "filter_example", // String | additional filters for task listing (JSON serialized)
  'path': ["path_example"] // [String] | One or more node pathes
};
apiInstance.listTasks(workspaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| Id or Alias of the workspace | 
 **filter** | **String**| additional filters for task listing (JSON serialized) | [optional] 
 **path** | [**[String]**](String.md)| One or more node pathes | [optional] 

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateTask"></a>
# **updateTask**
> Task updateTask(taskId, opts)



Update a task on the server. 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.TaskApi();

let taskId = "taskId_example"; // String | Task to update on the server

let opts = { 
  'requestBody': new PydioApiV2.Task() // Task | JSON Diff describing the patches to apply on the task object
};
apiInstance.updateTask(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Task to update on the server | 
 **requestBody** | [**Task**](Task.md)| JSON Diff describing the patches to apply on the task object | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

