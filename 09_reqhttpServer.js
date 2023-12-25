const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home page");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page");
  } else {
    res.end(`
     <h1>Oopps!</h1>
     <p>Something went wrong</p>
     <a href="/"> Back Home </a>
    `);
  }
});

server.listen(5000);
