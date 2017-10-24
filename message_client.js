const grpc = require('grpc');
const PROTO_PATH = 'pb/message.proto';
const serviceDef = grpc.load(PROTO_PATH).message;

const client = new serviceDef.UserService(
  'localhost:9000',
  grpc.credentials.createInsecure()
);

client.getByUserId({ userId: 666 }, function(err, response) {
  console.log(`Get user by Id 666`);
  console.log(response);
});
