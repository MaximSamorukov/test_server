
const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req);
   const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': false,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
   };
   if (req.url === '/first') {

      res.writeHead(200, headers);
      res.end(JSON.stringify({ value: 'first'}));
      return;
   }
   if (req.url === '/second') {
      res.writeHead(200, headers);
            res.end(JSON.stringify({ value: 'second'}));
      return;
   }
   res.writeHead(200, headers);
   res.end(JSON.stringify({ value: 'some other' }));
   return;
});
const port = 4000;
server.listen(port, () => console.log('Server starts at port ', port));