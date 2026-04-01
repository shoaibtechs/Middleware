const express = require("express");
const app =  express();
const port = 8080;




app.use("/random", (req, res, next)=>{

    console.log("I am the middleware for the /random page :) ");
    next();


})


app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);

})


app.get("/", (req,res)=>{

    res.send("The root path");

})

app.get("/random", (req, res)=>{

    res.send("The Random Page")

})