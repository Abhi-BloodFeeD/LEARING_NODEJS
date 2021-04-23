const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url==='/'){
  res.end(`<h1>HOME PAGE</h1>`)
}
if(req.url === '/about'){
   res.end(`<h1>About PAGE</h1>`)
  for(let i=0;i<100;i++){
    for(let j=0;j<1000;j++){

      console.log(`${i} , ${j}`)
    }
  }
  res.end(`UNKNOWN PAGE`)
  }
})

server.listen(5000,()=>{
  console.log('Server Listening on 5000.......')
})