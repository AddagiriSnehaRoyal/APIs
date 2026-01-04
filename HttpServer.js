// const http = require("http");

// const server = http.createServer((req, res) =>{
//     res.write("Hello from Node HTTP server!");
//     res.end();
// });

const http = require("http");

require("dotenv").config();
console.log("THE PORT IS",process.env.PORT);
console.log(process.env.NAME);

const server = http.createServer((req, res) => {
    // if (req.url === "/"){
    //     res.end("Welcome to Home page");
    // }


    //     if(req.url == "/api/user"){
    //     res.setHeader("Content-Type", "application/json");
    //     res.end(JSON.stringify({ name: "Sneha", role: "Student"}));
    // }

    const fs = require("fs");

    if (req.url === "/html") {
        const html = fs.readFileSync("index.html");
        res.setHeader("Content-Type", "text/html");
        res.end(html);
    }

   else if (req.url === "/style.css") {
        const css = fs.readFileSync("style.css");
        res.setHeader("Content-Type", "text/css");
        res.end(css);
    }
    
    else if (req.url === "/about") {
        res.end("About page");
    }
    else if (req.url === "/contact") {
        res.end("Contact page");
    }
    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});



