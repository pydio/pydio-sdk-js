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

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _modelTask = require('../model/Task');

var _modelTask2 = _interopRequireDefault(_modelTask);

/**
* Task service.
* @module api/TaskApi
* @version 2.0.0
*/

var TaskApi = (function () {

  /**
  * Constructs a new TaskApi. 
  * @alias module:api/TaskApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function TaskApi(apiClient) {
    _classCallCheck(this, TaskApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * Create a task on the server. This will generally trigger a server-side background \&quot;Task\&quot;, which ID will be returned in the PydioResponse[&#39;tasks&#39;] array 
   * @param {String} taskId Task to launch on the server
   * @param {Object} opts Optional parameters
   * @param {module:model/Task} opts.requestBody JSON Task object
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Task} and HTTP response
   */

  _createClass(TaskApi, [{
    key: 'createTaskWithHttpInfo',
    value: function createTaskWithHttpInfo(taskId, opts) {
      opts = opts || {};
      var postBody = opts['requestBody'];

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling createTask");
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = _modelTask2['default'];

      return this.apiClient.callApi('/tasks/{taskId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a task on the server. This will generally trigger a server-side background \&quot;Task\&quot;, which ID will be returned in the PydioResponse[&#39;tasks&#39;] array 
     * @param {String} taskId Task to launch on the server
     * @param {Object} opts Optional parameters
     * @param {module:model/Task} opts.requestBody JSON Task object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Task}
     */
  }, {
    key: 'createTask',
    value: function createTask(taskId, opts) {
      return this.createTaskWithHttpInfo(taskId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a task on the server. 
     * @param {String} taskId Task to delete on the server
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Task} and HTTP response
     */
  }, {
    key: 'deleteTaskWithHttpInfo',
    value: function deleteTaskWithHttpInfo(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling deleteTask");
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _modelTask2['default'];

      return this.apiClient.callApi('/tasks/{taskId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update a task on the server. 
     * @param {String} taskId Task to delete on the server
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Task}
     */
  }, {
    key: 'deleteTask',
    value: function deleteTask(taskId) {
      return this.deleteTaskWithHttpInfo(taskId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get information about a currently running task Id 
     * @param {String} taskId Task to monitor on the server
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Task} and HTTP response
     */
  }, {
    key: 'getTaskInfoWithHttpInfo',
    value: function getTaskInfoWithHttpInfo(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getTaskInfo");
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = _modelTask2['default'];

      return this.apiClient.callApi('/tasks/{taskId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get information about a currently running task Id 
     * @param {String} taskId Task to monitor on the server
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Task}
     */
  }, {
    key: 'getTaskInfo',
    value: function getTaskInfo(taskId) {
      return this.getTaskInfoWithHttpInfo(taskId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List tasks currently running on the server (and visible to the current user). 
     * @param {String} workspaceId Id or Alias of the workspace
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter additional filters for task listing (JSON serialized)
     * @param {Array.<String>} opts.path One or more node pathes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Task>} and HTTP response
     */
  }, {
    key: 'listTasksWithHttpInfo',
    value: function listTasksWithHttpInfo(workspaceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling listTasks");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'filter': opts['filter'],
        'workspaceId': workspaceId,
        'path': this.apiClient.buildCollectionParam(opts['path'], 'multi')
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [_modelTask2['default']];

      return this.apiClient.callApi('/tasks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List tasks currently running on the server (and visible to the current user). 
     * @param {String} workspaceId Id or Alias of the workspace
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter additional filters for task listing (JSON serialized)
     * @param {Array.<String>} opts.path One or more node pathes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Task>}
     */
  }, {
    key: 'listTasks',
    value: function listTasks(workspaceId, opts) {
      return this.listTasksWithHttpInfo(workspaceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a task on the server. 
     * @param {String} taskId Task to update on the server
     * @param {Object} opts Optional parameters
     * @param {module:model/Task} opts.requestBody JSON Diff describing the patches to apply on the task object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Task} and HTTP response
     */
  }, {
    key: 'updateTaskWithHttpInfo',
    value: function updateTaskWithHttpInfo(taskId, opts) {
      opts = opts || {};
      var postBody = opts['requestBody'];

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTask");
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = _modelTask2['default'];

      return this.apiClient.callApi('/tasks/{taskId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update a task on the server. 
     * @param {String} taskId Task to update on the server
     * @param {Object} opts Optional parameters
     * @param {module:model/Task} opts.requestBody JSON Diff describing the patches to apply on the task object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Task}
     */
  }, {
    key: 'updateTask',
    value: function updateTask(taskId, opts) {
      return this.updateTaskWithHttpInfo(taskId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TaskApi;
})();

exports['default'] = TaskApi;
module.exports = exports['default'];
