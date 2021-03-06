/**
 * Pydio API V2
 * Access to a Pydio Server. Second version of the API.
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';

/**
* Workspace service.
* @module api/WorkspaceApi
* @version 2.0.0
*/
export default class WorkspaceApi {

    /**
    * Constructs a new WorkspaceApi. 
    * @alias module:api/WorkspaceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Sends back all changes since a given sequence ID.    This plugin requires **meta.syncable** active on the workspace. 
     * @param {Number} sequenceId File to upload
     * @param {String} workspaceId Id or Alias of the workspace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse2003>} and HTTP response
     */
    changesWithHttpInfo(sequenceId, workspaceId) {
      let postBody = null;

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new Error("Missing the required parameter 'sequenceId' when calling changes");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling changes");
      }


      let pathParams = {
        'sequenceId': sequenceId,
        'workspaceId': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [InlineResponse2003];

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}/changes/{sequenceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Sends back all changes since a given sequence ID.    This plugin requires **meta.syncable** active on the workspace. 
     * @param {Number} sequenceId File to upload
     * @param {String} workspaceId Id or Alias of the workspace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2003>}
     */
    changes(sequenceId, workspaceId) {
      return this.changesWithHttpInfo(sequenceId, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get information about the given workspace. Info can be gathered via various plugins. Pass the expected metadata type via the X-Pydio-Ws-Info header. Currently supported values are quota|info|changes 
     * @param {module:model/String} xPydioWSInfo 
     * @param {String} workspaceId Id or Alias of the workspace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getWorkspaceInfoWithHttpInfo(xPydioWSInfo, workspaceId) {
      let postBody = null;

      // verify the required parameter 'xPydioWSInfo' is set
      if (xPydioWSInfo === undefined || xPydioWSInfo === null) {
        throw new Error("Missing the required parameter 'xPydioWSInfo' when calling getWorkspaceInfo");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getWorkspaceInfo");
      }


      let pathParams = {
        'workspaceId': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Pydio-WS-Info': xPydioWSInfo
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get information about the given workspace. Info can be gathered via various plugins. Pass the expected metadata type via the X-Pydio-Ws-Info header. Currently supported values are quota|info|changes 
     * @param {module:model/String} xPydioWSInfo 
     * @param {String} workspaceId Id or Alias of the workspace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    getWorkspaceInfo(xPydioWSInfo, workspaceId) {
      return this.getWorkspaceInfoWithHttpInfo(xPydioWSInfo, workspaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
