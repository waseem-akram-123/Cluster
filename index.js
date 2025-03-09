const express = require ("express");

const app = express();
const PORT = 8000;

app.get ("/", (req,res)=> {
    return res.json ({messgae : `Hello from Node Server :) ${process.pid}`});
})


app.listen (PORT, ()=> console.log (`server started at PORT ${PORT}`));