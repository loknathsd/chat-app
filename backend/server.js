const express = require('express')

const {chats} = require('./data/data')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();


const port = 5000

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
   const id = (req.params.id)
    const singleChat = chats.find(c=> c._id ==id )
    res.send(singleChat);
})


const PORT = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})