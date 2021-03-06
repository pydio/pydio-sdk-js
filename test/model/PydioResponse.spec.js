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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PydioApiV2);
  }
}(this, function(expect, PydioApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PydioApiV2.PydioResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PydioResponse', function() {
    it('should create an instance of PydioResponse', function() {
      // uncomment below and update the code to test PydioResponse
      //var instane = new PydioApiV2.PydioResponse();
      //expect(instance).to.be.a(PydioApiV2.PydioResponse);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new PydioApiV2.PydioResponse();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new PydioApiV2.PydioResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instane = new PydioApiV2.PydioResponse();
      //expect(instance).to.be();
    });

    it('should have the property nodesDiff (base name: "nodesDiff")', function() {
      // uncomment below and update the code to test the property nodesDiff
      //var instane = new PydioApiV2.PydioResponse();
      //expect(instance).to.be();
    });

    it('should have the property bgAction (base name: "bgAction")', function() {
      // uncomment below and update the code to test the property bgAction
      //var instane = new PydioApiV2.PydioResponse();
      //expect(instance).to.be();
    });

    it('should have the property tasks (base name: "tasks")', function() {
      // uncomment below and update the code to test the property tasks
      //var instane = new PydioApiV2.PydioResponse();
      //expect(instance).to.be();
    });

  });

}));
