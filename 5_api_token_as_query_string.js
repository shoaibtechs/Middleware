const express = require("express");
const app = express();
const port = 8080;

app.listen(port, (req, res)=>{

    console.log(`The server is listenign atport ${port}`);

})


app.use("/api", (req, res, next)=>{

    let{token} =  req.query;

    if(token === "giveaccess")
    {
        next();

    }

    res.send("Access Denied");



})





app.get("/", (req,res)=>{

    res.send("Hello, i am root");


})


app.get("/api", (req, res)=>{


    res.send("Access Granted");

})