const { log } = require('console');
const fs = require('fs');


//--------------------1-------------------------------
//Create new text file with data
// fs.writeFileSync("files/apple.txt", "this is a fruit")

// fs.writeFileSync("files/banana.txt", "This is a fruit")


//---------------------2------------------------------

// Update text file data
// fs.appendFileSync("files/apple.txt"," this is good for our health")


//---------------------------------------------------
//Read the files
const data = fs.readFileSync("files/apple.txt", "utf-8")
console.log(data)
//vijaykumar billa karta khulla khulla
//vijaykumar billa karta khulla khullagit 
//--------------------3-------------------------------
// Delete text files
// fs.unlinkSync("files/apple.txt")
//console.log(process.argv)

//----------------------4-----------------------------
//how we take data from terminal
// nodemon fsCRUD.js write my "name is akhilesh"

const opretion = process.argv[2]
if (process.argv[2] == "write") {
    const name = process.argv[3]
    const content = process.argv[4]
    console.log(opretion, name, content);
    fs.writeFileSync("files/" + name + ".txt", content)
}
else if (process.argv[2] == "read") {
    const name = process.argv[3]
    const data = fs.readFileSync("files/" + name + ".txt", "utf-8")
    console.log(data)
}
else if (process.argv[2] == "update") {
    const name = process.argv[3]
    const content = process.argv[4]
    const data = fs.appendFileSync("files/" + name + ".txt", content)
    const data1 = fs.readFileSync("files/" + name + ".txt", "utf-8")
    console.log(data1)
}
else if (process.argv[2] == "delete") {
    const name = process.argv[3]
    const data = fs.unlinkSync("files/" + name + ".txt")
    data
}

//---------------------------------------------------