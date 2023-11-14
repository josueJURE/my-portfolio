import * as http from "http";

// console.log("hello");
console.log(process.env.NODEMAILER_USERNAME);
console.log(process.env.NODEMAILER_PASSWORD);
// console.log(process.env);

var server = http.createServer(function (request, response) {
  //   console.log(request);

  console.log("method:", request.method);

  let body = [];
  request
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      var query = new URLSearchParams(body);
      console.log(query);
      console.log(query.get("email"));
    });
});

server.listen(8080);

// url
// method
//
