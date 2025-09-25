//Understand Request Params

const http = require('http')

http.createServer((req,resp)=>{
const url = req.url
    if(url == "/"){
        resp.write("<h1>Home Page</h1>")
    }
    else if(url == "/login"){
         resp.write("<h1>Login Page</h1>")
    }else if(url == "/nodes"){
        resp.write("<h1>node js Page</h1>")
    }else{

        resp.end()
    }
}).listen(5600)