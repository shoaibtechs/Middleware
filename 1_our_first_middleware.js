const express = require("express");
const app =  express();
const port =  8080;



app.use((req, res)=>{

    console.log("Hello, i am middle ware!!");
    res.send("Hello, i am middle ware!!");

})



app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);

})



app.get("/", (req,res)=>{

    res.send("Hello, I am root");

})


app.get("/random", (req, res)=>{

    res.send("This is the random page!!");


})