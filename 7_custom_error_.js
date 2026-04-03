const express = require("express");
const app = express();
const port = 8080;


app.listen(port, ()=>{

    console.log("The server is listening at port ", port);

})


app.get("/api", (req, res)=>{

    throw new Error("The is a custom error ");

})