# PydioApiV2.FileApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNode**](FileApi.md#createNode) | **POST** /fs/{path} | 
[**deleteNode**](FileApi.md#deleteNode) | **DELETE** /fs/{path} | 
[**download**](FileApi.md#download) | **GET** /io/{path} | 
[**getNodeInfos**](FileApi.md#getNodeInfos) | **GET** /fs/{path} | 
[**updateNode**](FileApi.md#updateNode) | **PATCH** /fs/{path} | 
[**uploadStream**](FileApi.md#uploadStream) | **PUT** /io/{path} | 


<a name="createNode"></a>
# **createNode**
> PydioResponse createNode(path, opts)



Create new resources or move/copy existing resources: + Create a new folder (pass a path **with a trailing slash**), or a new empty file (no trailing slash). + Copy a resource to a new destination: pass destination as {path}, and origin via copy_from parameter. + Rename / Move a resource : basically a copy operation followed by a delete of original 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.FileApi();

let path = "path_example"; // String | Workspace id or alias + full path to the node, e.g. \"/my-files/path/to/node\"

let opts = { 
  'copySource': "copySource_example", // String | If it's a move or a copy, indicated the path of the original node. Path must contain the original workspace Id, as it can be used for cross repository copy as well.
  'deleteSource': true, // Boolean | If it's a move/rename, will remove original after copy operation
  'override': false, // Boolean | Ignore existing resource and override it
  'recursive': false // Boolean | For directories, create parents if necessary
};
apiInstance.createNode(path, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Workspace id or alias + full path to the node, e.g. \&quot;/my-files/path/to/node\&quot; | 
 **copySource** | **String**| If it&#39;s a move or a copy, indicated the path of the original node. Path must contain the original workspace Id, as it can be used for cross repository copy as well. | [optional] 
 **deleteSource** | **Boolean**| If it&#39;s a move/rename, will remove original after copy operation | [optional] 
 **override** | **Boolean**| Ignore existing resource and override it | [optional] [default to false]
 **recursive** | **Boolean**| For directories, create parents if necessary | [optional] [default to false]

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="deleteNode"></a>
# **deleteNode**
> PydioResponse deleteNode(path)



Delete existing resource 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.FileApi();

let path = "path_example"; // String | Workspace id or alias + full path to the node, e.g. \"/my-files/path/to/node\"

apiInstance.deleteNode(path).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Workspace id or alias + full path to the node, e.g. \&quot;/my-files/path/to/node\&quot; | 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="download"></a>
# **download**
> File download(path, opts)



Get resource content. Depending on the attachment parameter, will try to either trigger a download, or send binary stream with appropriate headers. Depending on the active plugins, may be able to serve: + Plain text + MP3/Wav Stream + MP4 Stream + On-the-fly generated images + On-the-fly generated thumbnails for images or pdf 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.FileApi();

let path = "path_example"; // String | Workspace id or alias + full path to the node, e.g. \"/my-files/path/to/node\"

let opts = { 
  'attachment': true, // Boolean | if set, send back a force-download, otherwise use Accept header to try to find the best response Content-Type.
  'additionalParameters': "additionalParameters_example" // String | some plugin can take more parameters to send various contents derived from main resource. For example, for images, you can pass get_thumb & dimension 
};
apiInstance.download(path, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Workspace id or alias + full path to the node, e.g. \&quot;/my-files/path/to/node\&quot; | 
 **attachment** | **Boolean**| if set, send back a force-download, otherwise use Accept header to try to find the best response Content-Type. | [optional] 
 **additionalParameters** | **String**| some plugin can take more parameters to send various contents derived from main resource. For example, for images, you can pass get_thumb &amp; dimension  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="getNodeInfos"></a>
# **getNodeInfos**
> NodeList getNodeInfos(path, meta, opts)



Get information about a node and its metadata. By default, it will return  Pydio \&quot;primary\&quot; metadata (stat, internal informations). Extended metadata can be added by some plugins.   For collections (folders), pass the **children** parameter to list its content.   To access the actual content of the nodes, see the I/O API. 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.FileApi();

let path = "path_example"; // String | Workspace id or alias + full path to the node, e.g. \"/my-files/path/to/node\"

let meta = "standard"; // String | Level of precision for expected metadata

let opts = { 
  'children': "children_example", // String | Load children if node is a collection
  'recursive': true, // Boolean | If requiring children, load grandchildren recursively
  'maxDepth': -1, // Number | If requiring children recursively, stop at the given depth. If -1, no limit.
  'maxNodes': -1, // Number | If requiring children recursively, stop at the given depth. If -1, no limit.
  'remoteOrder': false, // Boolean | Apply server-side sorting
  'orderColumn': "orderColumn_example", // String | Order column to use for server-side sorting
  'orderDirection': "orderDirection_example", // String | Order direction to use for server-side sorting (asc or desc)
  'pagePosition': false, // Boolean | For a single file, try to detect the page position in the parent node listing.
  'xIndexationRequired': true // Boolean | Invalidate current index and trigger a background indexation
};
apiInstance.getNodeInfos(path, meta, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Workspace id or alias + full path to the node, e.g. \&quot;/my-files/path/to/node\&quot; | 
 **meta** | **String**| Level of precision for expected metadata | [default to standard]
 **children** | **String**| Load children if node is a collection | [optional] 
 **recursive** | **Boolean**| If requiring children, load grandchildren recursively | [optional] 
 **maxDepth** | **Number**| If requiring children recursively, stop at the given depth. If -1, no limit. | [optional] [default to -1]
 **maxNodes** | **Number**| If requiring children recursively, stop at the given depth. If -1, no limit. | [optional] [default to -1]
 **remoteOrder** | **Boolean**| Apply server-side sorting | [optional] [default to false]
 **orderColumn** | **String**| Order column to use for server-side sorting | [optional] 
 **orderDirection** | **String**| Order direction to use for server-side sorting (asc or desc) | [optional] 
 **pagePosition** | **Boolean**| For a single file, try to detect the page position in the parent node listing. | [optional] [default to false]
 **xIndexationRequired** | **Boolean**| Invalidate current index and trigger a background indexation | [optional] 

### Return type

[**NodeList**](NodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updateNode"></a>
# **updateNode**
> PydioResponse updateNode(path, metadata)



Update existing resources metadata (see I/O for content modification). Basic metadata is provided by core plugins, but they can be extended by other plugins. For example : &#x60;{\&quot;core\&quot;: {\&quot;chmod\&quot;: 777}}, {\&quot;user_meta\&quot;:[{\&quot;metaName\&quot;:\&quot;metaValue\&quot;}]}&#x60; &#x60;{\&quot;bookmarks\&quot;:{\&quot;bookmarked\&quot;: true}, \&quot;locks\&quot;:{\&quot;locked\&quot;:true}, \&quot;meta.watch\&quot;:{\&quot;watch\&quot;:true}}&#x60; etc... 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.FileApi();

let path = "path_example"; // String | Workspace id or alias + full path to the node, e.g. \"/my-files/path/to/node\"

let metadata = "metadata_example"; // String | Json-serialized metadata to update

apiInstance.updateNode(path, metadata).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Workspace id or alias + full path to the node, e.g. \&quot;/my-files/path/to/node\&quot; | 
 **metadata** | **String**| Json-serialized metadata to update | 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="uploadStream"></a>
# **uploadStream**
> PydioResponse uploadStream(path, raw, opts)



Create or update resource by posting to Input Stream 

### Example
```javascript
import PydioApiV2 from 'pydio_api_v2';

let apiInstance = new PydioApiV2.FileApi();

let path = "path_example"; // String | Workspace id or alias + full path to the node, e.g. \"/my-files/path/to/node\"

let raw = new PydioApiV2.InputStream(); // InputStream | binary data

let opts = { 
  'xRenameIfExists': true, // Boolean | Automatically increment filename if it already exists
  'xAppendTo': "xAppendTo_example", // String | Append uploaded data at the end of existing file
  'xPartialUpload': true, // Boolean | If the current put is a part of a file. If set, the X-Partial-Target-Bytesize header is required.
  'xPartialTargetBytesize': 56 // Number | In case of partial upload, the size of the full file as expected at the end of upload.
};
apiInstance.uploadStream(path, raw, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Workspace id or alias + full path to the node, e.g. \&quot;/my-files/path/to/node\&quot; | 
 **raw** | [**InputStream**](InputStream.md)| binary data | 
 **xRenameIfExists** | **Boolean**| Automatically increment filename if it already exists | [optional] 
 **xAppendTo** | **String**| Append uploaded data at the end of existing file | [optional] 
 **xPartialUpload** | **Boolean**| If the current put is a part of a file. If set, the X-Partial-Target-Bytesize header is required. | [optional] 
 **xPartialTargetBytesize** | **Number**| In case of partial upload, the size of the full file as expected at the end of upload. | [optional] 

### Return type

[**PydioResponse**](PydioResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

