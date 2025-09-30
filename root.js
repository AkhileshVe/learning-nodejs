const http = require("http")
const userdata = require('./userForm')
const userDataSubmit = require('./userDataSubmit')



http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    
    if(req.url == "/"){
       userdata(req,resp)
   }else if(req.url == "/submit"){
    userDataSubmit(req,resp)
   }

   resp.end("end")
}

).listen(3200)
