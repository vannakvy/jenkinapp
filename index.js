import express from 'express'

const server = express()

server.get('/',(req,res)=>{
    res.send("Hello world")
})

server.listen(4000,()=>console.log("the server is running at port 4000"))