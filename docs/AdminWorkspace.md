# PydioApiV2.AdminWorkspace

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id of this workspace | [optional] 
**slug** | **String** | human readable identifier, computed from display | [optional] 
**display** | **String** | Label for this workspace | 
**displayStringId** | **String** | an i18n identifier to adapt the label to the user language | [optional] 
**accessType** | **String** | plugin name to be used as driver to access the storage. Resulting plugin id is \&quot;access.accessType\&quot;. | 
**writeable** | **Boolean** | wether this workspace/template is writeable or not (not writeable if defined in bootstrap php configs). | [optional] 
**isTemplate** | **Boolean** | wether this is a template or a concrete workspace. | [optional] 
**groupPath** | **String** | If this repository has a groupPath | [optional] 
**parameters** | **Object** | a key/value object containing all driver parameters. | [optional] 
**features** | **Object** | The additional features parameters. | [optional] 
**mask** | **Object** | permission mask applied on workspace files and folders | [optional] 
**info** | [**AdminWorkspaceInfo**](AdminWorkspaceInfo.md) |  | [optional] 


