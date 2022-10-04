let grpc = require("@grpc/grpc-js")
var protoLoader = require('@grpc/proto-loader');
const p = require("path")

var packageDefinition = protoLoader.loadSync(p.join(__dirname, "../student/student.proto"));

const StudentService = grpc.loadPackageDefinition(packageDefinition).student.DataStudent;

const client = new StudentService(
    "localhost:9000",
    grpc.credentials.createInsecure()
  );

client.FindStudentByEmail({email: "rizkaian78@gmail.com"}, (error, response) => {
    console.log(response, "<<< ini response")
 });