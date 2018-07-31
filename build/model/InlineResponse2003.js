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

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

/**
* The InlineResponse2003 model module.
* @module model/InlineResponse2003
* @version 2.0.0
*/

var InlineResponse2003 = (function () {
    /**
    * Constructs a new <code>InlineResponse2003</code>.
    * @alias module:model/InlineResponse2003
    * @class
    */

    function InlineResponse2003() {
        _classCallCheck(this, InlineResponse2003);

        this.seq_id = undefined;
        this.node = undefined;
    }

    /**
    * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2003} obj Optional instance to populate.
    * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
    */

    _createClass(InlineResponse2003, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InlineResponse2003();

                if (data.hasOwnProperty('seq_id')) {
                    obj['seq_id'] = _ApiClient2['default'].convertToType(data['seq_id'], 'Number');
                }
                if (data.hasOwnProperty('node')) {
                    obj['node'] = _Node2['default'].constructFromObject(data['node']);
                }
            }
            return obj;
        }

        /**
        * @member {Number} seq_id
        */
    }]);

    return InlineResponse2003;
})();

exports['default'] = InlineResponse2003;
module.exports = exports['default'];

/**
* @member {module:model/Node} node
*/
