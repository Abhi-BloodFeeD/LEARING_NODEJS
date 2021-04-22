const http = require('http')
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('HOME PAGE')  
  }
  if(req.url === '/about'){
    res.end('THIS IS ABOUT PAGE')
  }
  res.end(
    `<h1>OPPS!!!</h1>
    <p>YOU are on wrong page</p>
    <a href="/"><h1>GO HOME</h1></a>
    `)
  })

server.listen(5000)