// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/nodes/tvm-366060774_2-20160320t215552z/disablescheduling?api-version=2015-12-01.2.2', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '401ad586-ef0d-44d2-b8e6-e7c0428e0752',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_2-20160320t215552z/disablescheduling',
  date: 'Sun, 20 Mar 2016 22:01:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/nodes/tvm-366060774_2-20160320t215552z/disablescheduling?api-version=2015-12-01.2.2', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '401ad586-ef0d-44d2-b8e6-e7c0428e0752',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-366060774_2-20160320t215552z/disablescheduling',
  date: 'Sun, 20 Mar 2016 22:01:32 GMT',
  connection: 'close' });
 return result; }]];