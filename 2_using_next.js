const express = require("express");
const app = express();
const port = 8080;



app.use((req, res, next)=>{

    console.log("I am middlaware 1 ");
    next();

})




app.use((req, res, next)=>{

    console.log("I am middlaware 2 ");
    next();

})





app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);

})


app.get("/", (req, res)=>{

    res.send("Hi, i am root :)");

})


app.get("/random", (req, res)=>{

    res.send("This is random page");

})
  


