const { readFile , writeFile} =require('fs');
// const { writeFileSync } = require('node:fs');


console.log("START")

readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt','utf8',(err,result)=>{
      if(err){
        console.log(err)
        return
      }
      const second = result
      writeFile('./content/solution.txt', `HERE IS RESULT ${first} , ${second}`,
      (err,result)=>{
      if(err){
        console.log(err)
        return
      }
      console.log('DONE WITH THIS TASK')
      })
  }) 
}) 
console.log("STARTING SECOND FILE")