'use strict';

var assert = require('assert');
var util = require('util');
var cbModule = require('../app/callback-module');

function print(message) {
  return util.inspect(message, {colors:true});
}

// All of the asserts need to go into this one function.  By exporting a single
// function, we can run all the tests we need to for our specified module
module.exports = function() {
  // Example tests
  assert.strictEqual(
      cbModule.processResponse({}), // an error object
      'ERROR', // expected
      print('callback-module processResponse() did not match expected >> ERROR') //error
  );

  assert.strictEqual(
      cbModule.processResponse(null, {value: true}), // valid value
      'TRUE', //expected
      print('callback-module processResponse() did not match expected >> TRUE') //error
  );

  assert.strictEqual(
      cbModule.processResponse(null, {}), // valid value
      'FALSE', //expected
      print('callback-module processResponse() did not match expected >> FALSE') //error
  );
};
