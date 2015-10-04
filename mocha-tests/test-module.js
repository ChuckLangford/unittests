'use strict';

var assert = require('assert');
var testModule = require('../app/test-module');

describe('test-module', function() {
  describe('#getOutput()', function () {
    it('should return a string Hello!', function () {
      assert.strictEqual(testModule.getOutput(), 'Hello!');
    });
  });
});
