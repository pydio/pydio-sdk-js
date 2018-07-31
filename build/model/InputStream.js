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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The InputStream model module.
* @module model/InputStream
* @version 2.0.0
*/

var InputStream = (function () {
    /**
    * Constructs a new <code>InputStream</code>.
    * Simple binary stream
    * @alias module:model/InputStream
    * @class
    */

    function InputStream() {
        _classCallCheck(this, InputStream);
    }

    /**
    * Constructs a <code>InputStream</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InputStream} obj Optional instance to populate.
    * @return {module:model/InputStream} The populated <code>InputStream</code> instance.
    */

    _createClass(InputStream, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InputStream();
            }
            return obj;
        }
    }]);

    return InputStream;
})();

exports['default'] = InputStream;
module.exports = exports['default'];
