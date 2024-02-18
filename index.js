const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Brother!!")
})

app.listen(5001,()=>{
    console.log("I am running....")
})