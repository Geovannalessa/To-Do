const express = require("express");
// const servidor = express.Router;
const servidor = express()

servidor.get ('/', (req,res)=>{
    console.log("cadê?")
    res.send("alouu");
})

servidor.listen(8000)