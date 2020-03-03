const _ = require('lodash');
const Blob = require('cross-blob');
const putObjectToS3 = require('./src/putObjectToS3');

exports.handler = async function (event) {
  const {
    uniqueIdForS3Object,
    baseURL,
    mandant,
    objectGroup,
    recordId,
    authToken,
    requestBody,
  } = event;
  const aFileParts = ['<a id="a"><b id="b">Coucou :) !</b></a>'];

  // Le blob
  const oMyBlob = new Blob(aFileParts, {type: "text/plain"});
  
  // console.log('BLOB',Blob)
  try{
    await putObjectToS3({
      uniqueIdForS3Object,
      blobResponse: '<a id="a"><b id="b">Coucou :) !</b></a>',
    });
  } catch (error) {
    console.log(error)
  }
  console.log('Done');
};
