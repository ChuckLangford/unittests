'use strict';

var assert = require('assert');
var cbModule = require('../app/callback-module');

describe('callback-module', function() {
  describe('#processResponse()', function () {
    it('should return "ERROR" when an error exists', function () {
      assert.strictEqual(cbModule.processResponse({}), 'ERROR');
    });

    it('should return "TRUE" when the response.value is true', function() {
      assert.strictEqual(cbModule.processResponse(null, {value:true}), 'TRUE');
    });

    it('should return "FALSE" when the response.value is false', function() {
      assert.strictEqual(cbModule.processResponse(null, {value:false}), 'FALSE');
    });
  });
});
