const { readFile , writeFile} =require('fs');
// const { writeFileSync } = require('node:fs');


console.log("START 1")

readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(result)
})

console.log("START 2")
