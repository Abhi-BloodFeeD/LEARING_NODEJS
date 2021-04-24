  const http = require('http')
  
  const server = http.createServer((req,res)=>{
    console.log('USER HERE')
    res.end()
  }) 
  
  server.listen(5000)
