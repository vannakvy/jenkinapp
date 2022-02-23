import express from 'express'

const server = express()
console.log("new changes go here");

server.get('/',(req,res)=>{
    res.send("Hello world")
})

server.listen(4000,()=>console.log("the server is running at port 4000"))