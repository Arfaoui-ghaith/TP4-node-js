const http = require('http');
const url = require('url');
const fs = require('fs');


const index = fs.readFileSync('./public/index.html', 'utf-8');
const about = fs.readFileSync('./public/about.html', 'utf-8');
const P404 = fs.readFileSync('./public/404.html', 'utf-8');




const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true);

  if (pathName.path === '/') {

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(index);

  } else if (pathName.path === '/about') {

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(about);

  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end(P404);
  }
});

server.listen(8888, '127.0.0.1', () => {
  console.log('we are listening requests on port 8888');
});
