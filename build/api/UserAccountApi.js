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

/**
* UserAccount service.
* @module api/UserAccountApi
* @version 2.0.0
*/

var UserAccountApi = (function () {

  /**
  * Constructs a new UserAccountApi. 
  * @alias module:api/UserAccountApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function UserAccountApi(apiClient) {
    _classCallCheck(this, UserAccountApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/repositories 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */

  _createClass(UserAccountApi, [{
    key: 'userInfoWithHttpInfo',
    value: function userInfoWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/repositories 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: 'userInfo',
    value: function userInfo() {
      return this.userInfoWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/preferences 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: 'userPreferencesWithHttpInfo',
    value: function userPreferencesWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/user/preferences', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/preferences 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: 'userPreferences',
    value: function userPreferences() {
      return this.userPreferencesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/repositories 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: 'userWorkspacesWithHttpInfo',
    value: function userWorkspacesWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/user/workspaces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List accessible workspace for currently logged user. Alias for /state/?xPath&#x3D;user/repositories 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: 'userWorkspaces',
    value: function userWorkspaces() {
      return this.userWorkspacesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UserAccountApi;
})();

exports['default'] = UserAccountApi;
module.exports = exports['default'];
