const grpc = require('grpc');
const PROTO_PATH = 'pb/helloworld.proto';
const serviceDef = grpc.load(PROTO_PATH).helloworld;
const port = 9000;

function SayHello(call, callback) {
  callback(null, { message: 'Hello ' + call.request.name });
}

const server = new grpc.Server();

server.addService(serviceDef.Greeter.service, { sayHello: SayHello });

server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
console.log(`Server start on port ${port}`);
server.start();
