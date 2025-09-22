const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>kya bolti tu</h1>");
    resp.end("hellow Akhileshy");

}).listen(4800)


http.createServer((req,resp)=>{
    resp.write("<h1>kya boltifddffd tu</h1>");
    resp.end("hellow Akhileshyyyyyy");

}).listen(4806)