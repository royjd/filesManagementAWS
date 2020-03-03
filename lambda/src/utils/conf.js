const conf = {};
conf.region = process.env.REGION || 'region';
conf.printBucketName = process.env.BUCKET_NAME || 'bucketname';
module.exports = conf;
