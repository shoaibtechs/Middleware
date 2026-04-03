const express =  require("express");
const app = express();
const port = 8080;


const checkToken = (req, res, next) =>{


    let {token} = req.query;

    if(token === "giveaccess")
    {

     return next();

    }

    res.send("Access Denied");

};





app.listen(port, ()=>{

    console.log("The server is listeinng at port ", port);

})



app.get("/", (req, res)=>{

    res.send("Hello, i am root path");

})


app.get("/api", checkToken, (req, res)=>{


    res.send("Access Granted");


})

/* Now the middleware will not gonna work for this route, but if the middleware was written with "app,use " 
 then ti would have been workig for this route */

 app.get("/api/products", (req, res)=>{

    res.send("Access Granted");


})




