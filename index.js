const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const port = process.env.PROT || 5000
const app = express()

//middleware
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('John is running  and waiting for ema')
})



app.listen(port,()=>{
    console.log('Jhon server is running on port',port)
})