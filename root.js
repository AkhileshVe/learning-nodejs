const http = require("http")
const userdata = require('./userForm')
const userDataSubmit = require('./userDataSubmit')
const querystring = require('node:querystring'); 


http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    
    if(req.url == "/"){
       userdata(req,resp)
   }else if (req.url == "/submit") {
        let databody = [];
        req.on('data', (chunk) => {
            databody.push(chunk);
        })

        req.on("end", () => {
            let rawData = Buffer.concat(databody).toString();
            console.log(rawData);
            let readableData = querystring.parse(rawData)
            console.log(readableData.name,readableData.email);
            
        })
        userDataSubmit(req, resp)
    }

   resp.end("end")
}

).listen(3200)
