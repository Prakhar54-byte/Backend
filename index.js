require('dotenv').config()

console.log('prakhar and code');
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res)=>{
    res.send('prakhar')
})

app.get('/login',(req,res)=>{
    res.send('<h1>This is login at prakhar</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> This is my site</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})