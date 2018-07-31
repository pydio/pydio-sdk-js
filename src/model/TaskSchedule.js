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


import ApiClient from '../ApiClient';





/**
* The TaskSchedule model module.
* @module model/TaskSchedule
* @version 2.0.0
*/
export default class TaskSchedule {
    /**
    * Constructs a new <code>TaskSchedule</code>.
    * @alias module:model/TaskSchedule
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TaskSchedule</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TaskSchedule} obj Optional instance to populate.
    * @return {module:model/TaskSchedule} The populated <code>TaskSchedule</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskSchedule();

            
            
            

            if (data.hasOwnProperty('scheduleType')) {
                obj['scheduleType'] = ApiClient.convertToType(data['scheduleType'], 'String');
            }
            if (data.hasOwnProperty('scheduleValue')) {
                obj['scheduleValue'] = ApiClient.convertToType(data['scheduleValue'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} scheduleType
    */
    scheduleType = undefined;
    /**
    * @member {String} scheduleValue
    */
    scheduleValue = undefined;








}

