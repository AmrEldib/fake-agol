'use strict';

var agolDataFaker = require('agol-data-faker');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.
 For a controller (like this) you should export the functions referenced in your Swagger document by name.
 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
 Recommended: use HTTP+modelName as your operationId. Ex: getItemComments for the GET request to access comments on an item.
 */
module.exports = {
  getOrgRoot: getOrgRoot
};

/**
  * Controller function that gives access to the request and response handled by the REST endpoint.
  * @param {object} req request object
  * @param {object} res response object
 */
function getOrgRoot(req, res) {
  // parameters/variables defined in the Swagger document can be referenced using:
  // req.swagger.params.{parameter_name}.value
  agolDataFaker.generateFakeDataForSchema('getOrgRoot').then(function (fakeData) {
    // this sends back a JSON response which is a single string
    res.json(fakeData);
  });
}
