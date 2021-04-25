const express=require('express')
const app = express()
const morgan = require('morgan')
// const logger=require('./logger')
// const authorize = require('./authorize')
// const path = require('path')

app.use(morgan('tiny'))
app.get('/',(req,res)=>{
  res.send('HOME')
})
app.get('/about',(req,res)=>{
  res.send('ABOUT')
})
app.get('/api/products',(req,res)=>{
  res.send('PRODUCTS')
})
app.get('/api/items',(req,res)=>{
  console.log(req.user)
  res.send('ITEMS')
})
// app.use(express.static('./public'))
// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'./index.html'))
// })
// app.all('*',(req,res)=>{
//   res.status(404).send('<h1>ERROE!!!!!</h1>')
// })
app.listen(5000,()=>{
  console.log("Listening on port 5000")
})