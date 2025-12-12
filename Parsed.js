const url = require("url");
const http = require("http");
const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    console.log(parsed.query);
    res.end("Query Received");
});


let url1 = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
let q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
let qdata = q.query;
console.log(qdata.month);

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});