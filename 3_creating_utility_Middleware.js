const express= require("express");
const app  =  express();
const port = 8080;


// Logger Middleware 

app.use((req, res)=>{

    req.time =  new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);

})


app.listen(port, ()=>{
    console.log("The server is listening at port ", port);

})



app.get("/", (req, res)=>{


    res.send("The Root Path");

})



app.get("/random", (req, res)=>{

    res.send("The Random Page");

})


