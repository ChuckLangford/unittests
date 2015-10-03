'use strict';

// ----------------------------------------------------------------------------
// require('assert') - Assert is the built in Node assert library
// require('util') - Util is built into Node.  We're using it to color output
// require('../app/test-module') - This is the code we actually want to test
//
// function print(message) - Just a helper function that colors output
// ----------------------------------------------------------------------------
var assert = require('assert');
var util = require('util');
var testModule = require('../app/test-module');

function print(message) {
  return util.inspect(message, {colors:true});
}

// All of the asserts need to go into this one function.  By exporting a single
// function, we can run all the tests we need to for our specified module
module.exports = function() {
  // An example test
  assert.strictEqual(
      testModule.getOutput(), // actual
      'Hello!', // expected
      print('test-module getOutput() did not match expected \'Hello!\'') //error
  );
};
