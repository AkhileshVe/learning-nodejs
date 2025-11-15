//path module and global constant

const path = require('path'); 
const file = "text/peter.txt"

//path module 
console.log(path.extname(file)); //.txt
console.log(path.dirname(file)); // text
console.log(path.basename(file));  // peter.txt
console.log(path.resolve("text", "peter.txt")); // /Users/akhileshverma/Documents/Node project/text/peter.txt

// global constant
console.log(__dirname); // /Users/akhileshverma/Documents/Node project
console.log(__filename); ///Users/akhileshverma/Documents/Node project/path.js