const http = require('http');
const fs = require('fs');


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
  }else if(req.url == "/submit"){
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