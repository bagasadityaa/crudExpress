const express = require('express');
const app = express()
const port = 3000;
const bodyparser = require("body-parser");

app.use(bodyparser.json())
app.get("/", (req, res)=>{
    res.send("Hello")
})
app.listen(port, ()=> {
    console.log(`listening port ${port}`)
})