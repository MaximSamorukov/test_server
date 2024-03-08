
const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req);
   if (req.url === '/first') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ value: 'first'}));
      return;
   }
   if (req.url === '/second') {
      res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ value: 'second'}));
      return;
   }
   res.writeHead(200, {'Content-Type': 'application/json'});
   res.end(JSON.stringify({ value: 'some other' }));
   return;
});
const port = 4000;
server.listen(port, () => console.log('Server starts at port ', port));