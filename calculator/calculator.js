

const express = require('express');
const bodyParser =require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  // console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2 ;
  res.send("The Calculation Is "+result+" !");
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var bmi = w/(h*w) ;
  res.send("The BMICalculation Is "+bmit+" !");
});

app.listen(4131, function(){
  console.log("Server Is running on port 4131");
});
