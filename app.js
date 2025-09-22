var fs = require('fs');
var os = require('os');
console.log(20+20)

fs.writeFileSync("akhilesh.txt", "my name is akhilesh ")

console.log("akhilesh verma")

function fruit(item){
    console.log("fruit name is ", item)
}

fruit("apple")

console.log(os.platform())
console.log(os.hostname())
console.log(os.cpus())
fs.readFile()