'use strict';

module.exports.processResponse = processResponse;
module.exports.exposedRouteFunction = exposedRouteFunction;

// ----------------------------------------------------------------------------
// Simulate a Mongoose Query
// ----------------------------------------------------------------------------
function mongooseFind(obj, cb) {
  cb(null, {value: true});
}

// ----------------------------------------------------------------------------
// Run the business logic processing that may or may not need to happen after
// receiving results from the database.  This could easily be placed in another
// module.
// ----------------------------------------------------------------------------
function processResponse(err, response) {
  if (err) {
    return 'ERROR';
  } else {
    if (response.value) {
      return 'TRUE';
    } else {
      return 'FALSE';
    }
  }
}

// ----------------------------------------------------------------------------
// This is a simulation of an exposed controller route.  No business logic
// should exist here.
// ----------------------------------------------------------------------------
function exposedRouteFunction(req, res) {
  mongooseFind({}, function(err, response){
    res.end(processResponse(err, response));
  });
}
