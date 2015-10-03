'use strict';

var assert = require('assert');
var util = require('util');
var testModule = require('../app/test-module');

function print(message) {
  return util.inspect(message, {colors:true});
}

module.exports = function() {
  assert.strictEqual(
      testModule.getOutput(),
      'Hello!',
      print('test-module getOutput() did not match expected \'Hello!\'')
  );
};
