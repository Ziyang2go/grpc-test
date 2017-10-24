const grpc = require('grpc');
const PROTO_PATH = 'pb/helloworld.proto';
const serviceDef = grpc.load(PROTO_PATH).helloworld;

const client = new serviceDef.Greeter(
  'localhost:9000',
  grpc.credentials.createInsecure()
);

client.sayHello({ name: 'Ziyang' }, function(err, response) {
  console.log('Greeting:', response.message);
});
