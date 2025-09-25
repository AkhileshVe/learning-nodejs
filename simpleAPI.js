// create simple API

const http = require('http');
const colors = require('colors');
const user = [
    {
name:"akhilesh",
age:20,
place:"indore"
    },
     {
name:"vijay",
age:49,
place:"bhopal"
    },
     {
name:"pooja",
age:39,
place:"rewa"
    }
];

http.createServer((req,resp)=>{
    resp.setHeader("Content-type","application/json")
resp.write(JSON.stringify(user));
    resp.end("hellow Akhiles");
}).listen(6001);

console.log(colors.red("hi is is khhhhkikkkk"))