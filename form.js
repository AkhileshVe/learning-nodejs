const http = require('http');
const fs = require('fs');
const querystring = require('node:querystring'); 
const { queryObjects } = require('node:v8');


http.createServer((req,res)=>{
fs.readFile('Html/form.html',"utf-8", (error,data)=>{
  if(error){
    res.writeHead(200, {"content-type":"text/plain"})
    res.end("<h1>internal server error</h1>")
    return false
  }
  
  if(req.url=="/"){
      res.writeHead(200, {"content-type":"text/html"})
    res.write(data)
  }
  else if(req.url == "/submit"){
    // to get data after submittion
    let databody = [];
    req.on('data',(chunk)=>{
      databody.push(chunk);
    })

    // here in the "end" we collect the all data. and "buffer.concat will join all data"
    req.on("end",()=>{
let rawData = Buffer.concat(databody).toString();
console.log(rawData);
//currently data is like this "name=AKHILESH+VERMA&email=AKHILESHVERMA22007%40GMAIL.COM"
//this is not readable so we use "queryString.parse()" for readable

let readableData = querystring.parse(rawData)
console.log(readableData.name);
let dataString = "my name is " + readableData.name + " and my email is " + readableData.email

fs.writeFileSync("text/" + "stringReadableData" + ".txt", dataString)
})
res.write("<h1>Your form is sumbitted successfully</h1>")
  }
  res.end("")
})

}).listen(3200)



// const server = http.createServer((req, resp)=>{
//   resp.writeHead(200,{"content-type":"text/html"})
//   console.log(req.url)

//   if(req.url=="/"){
//     resp.write(`
//     <form action="/submit" method="post">
//     <input type="text" placeholder="enter name" name="name"/>
//     <input type="text" placeholder ="enter email" name= "email" />
//     <button>submit</button>
//     </form>
//     `)
//   resp.end() 
//   }else if(req.url == "/submit"){
//     resp.write("<h1>Your form is sumbitted successfully</h1>")
//   }
   
// })

// server.listen(3400)