const express = require('express');
const conn = require("./db");
const app = express();
const cors = require('cors');




conn.connection.on("connected",(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("successfully connected")
    }
})
app.use(cors());
app.use(express.json());
app.use('/user',require("./routes/user"));
app.listen(3001 , ()=>{
    console.log("server is conected")
})