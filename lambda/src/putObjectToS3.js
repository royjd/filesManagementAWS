const AWS = require('aws-sdk');
const conf = require('./utils/conf');

module.exports = async ({ uniqueIdForS3Object, metadata, blobResponse }) => {
  const s3 = new AWS.S3({ region: conf.region });
  const params = {
    Bucket: conf.printBucketName,
    Key: uniqueIdForS3Object,
    Body: blobResponse, 
  };

  await s3.putObject(params).promise();
};
