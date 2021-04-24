
  const http = require('http')
  const {readFileSync} = require('fs');
  
  const homePage = readFileSync('./index.html')

  const server = http.createServer((req,res)=>{
    const url = req.url
    //homepage
    if(url ==='/'){
      res.writeHead(200,{'content-type':'text/html'})
      res.write(homePage)
      res.end()
    }
    else if(url ===`/about`){
      res.writeHead(200,{'content-type':'text/html'})
      res.write(`<h1>home page</h1>`)
      res.end()
    }
    else{
      res.writeHead(404,{'content-type':'text/html'})
      res.write(`<h1>404 PAGE NOT FOUND</h1>`)
      res.end()
    }
  })
  server.listen(5000);