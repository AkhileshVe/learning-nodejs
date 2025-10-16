const http = require('http');
const fs = require('fs')


http.createServer((req, res) => {
    console.log(req.url, "uhbdfcewbhd")
    if (req.url == "/") {
        fs.readFile('Html/home.html', "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" })
                res.end("<h1>internal server error</h1>")
                return false
            }
            res.writeHead(200, { "content-type": "text/html" })
            res.write(data)
            res.end("ttjjtt")
        })
    }
    else if (req.url == "/home.css") {
        fs.readFile('Html/home.css', "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/css" })
                res.end("<h1>Css not found</h1>")
                return false
            }
            res.writeHead(200, { "content-type": "text/css" })
            res.end(data)
        })
    }

}).listen(3200)


