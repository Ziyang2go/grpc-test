const grpc = require('grpc');
const PROTO_PATH = 'pb/message.proto';
const serviceDef = grpc.load(PROTO_PATH).message;
const port = 9000;

function getUserById(call, callback) {
  callback(null, {
    id: call.request.userId,
    regNumber: call.request.userId.toString(),
  });
}

const server = new grpc.Server();

server.addService(serviceDef.UserService.service, { getByUserId: getUserById });

server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
console.log(`Server start on port ${port}`);
server.start();
