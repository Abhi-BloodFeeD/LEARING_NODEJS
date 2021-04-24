const express = require('express')
const app = express()

 app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Home Page</h1>`)
})
app.get('/about',(req,res)=>{
  res.status(200).send(`<h1>ABOUT Page</h1>`)
})
app.all('*',(req,res)=>{
  res.status(404).send('<h1>GALAT AA GAYE BHAI</h1>')
})
app.listen(5000 , ()=>{
  console.log("server Listening on port 5000")
})