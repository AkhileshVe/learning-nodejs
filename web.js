// Send HTML File in Response using FS Module

const http = require('http');
const fs = require('fs');
const { error } = require('console');

http.createServer((req,res)=>{
fs.readFile('Html/web.html','utf-8',(err,data)=>{

    if(err){
        res.write("<h1>Internal server error</h1>")
        res.end()
        return
    }

    res.write(data)
    res.end()
})

}).listen(3200)