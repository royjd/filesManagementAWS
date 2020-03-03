const lambda = require('./index');

const requestBody = {
  layout: 'xx',
  mimeType: 'application/pdf',
  printer: 'xx',
};

lambda.handler({
  uniqueIdForS3Object: 'uniqueIdForS3Object',
  baseURL: 'xx',
  mandant: 'xx',
  objectGroup: 'xx',
  recordId: 'xx',
  authToken: 'Bearer XX',
  requestBody,
});
