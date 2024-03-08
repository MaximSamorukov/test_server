
const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req);
   if (req.url === '/first') {
      res.end(JSON.stringify({ value: 'first'}));
      return;
   }
   if (req.url === '/second') {
      res.end(JSON.stringify({ value: 'second'}));
      return;
   }
   res.end(JSON.stringify({ value: 'some other' }));
   return;
});

server.listen(3000, () => console.log('Server starts at port 3000'))