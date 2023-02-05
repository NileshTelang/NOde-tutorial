

const express = require('express');

const app = express();

app.get("/",function(request,response){
  // console.log(request);
  response.send("<h1>HEY NOVA !</h1>");
})

app.get("/contact",function(req,res){
  res.send("Contact Me At : kt@hotmail.com");
})

app.get("/about",function(req,res){
  res.send("I am crazy !");
})

app.listen(41000, function(){
  console.log("Server Started On port 41000 .");
});
