const http = require('http');
const colors = require('colors');

http.createServer((req,resp)=>{
    resp.write("<h1>kya bfvolti tu</h1>");
    resp.end("hellow Ajjjkhiles");

}).listen(4800)

console.log(colors.red("hi is is kkikkkk"))