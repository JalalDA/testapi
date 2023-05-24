const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
const http = require('http')
const {Server} = require("socket.io")
// const mongoose = require('mongoose')

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors :{
        origin : "*"
    }
})

const mongourl = process.env.MONGO_URL
const port = process.env.PORT

io.on('connection', socket=>{
    socket.on("login", user=>{
        `${user} has login with socketId = ${socket.id}`
    })
})

server.listen(port, ()=>{
    console.log(`App listen on port ${port}`);
})

// mongoose.connect(mongourl).then(()=>{
//     console.log("DB Connected");
// }).catch((err)=>console.log("Error connected"))

app.get('/', (req, res)=>{
    res.status(200).json({
        msg : "Wellcome to my test API"
    })
})