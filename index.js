const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
// const mongoose = require('mongoose')

const app = express()

const mongourl = process.env.MONGO_URL
const port = process.env.PORT

app.listen(port, ()=>{
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