

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//modules needed for sign up
const path = require('path');
const fetch = require("node-fetch");

const app = express();


app.set('view engine', 'ejs');

//bodyParser use
app.use(bodyParser.urlencoded({extended: true}));

//express access public dir
app.use(express.static("public"));

//home get req
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

//sign-up post req
app.post("/",function(req,res){
//   const fname = req.body.fname;
//   const lname = req.body.lname;
//   const email = req.body.email;
//   const password = req.body.password;
//
//   if (!fname || !lname || !email) {
//    res.redirect("failure");
//    return;
//  }
//
//   const data = {
//     members:[
//       {
//         email_address: email,
//         status : "subscribed",
//         merge_fields : {
//           FNAME : fname ,
//           LNAME : lname
//         }
//
//       }
//     ]
//   };
//
//   const jsonData = JSON.stringify(data);
//
//
//
//
//
// //fetch method - api, list-id , server , method ,success-failure
//
//   fetch('https://<usX-SERVER>.api.mailchimp.com/3.0/lists/{list-id}', {
//      method: 'POST',
//      headers: {
//        Authorization: 'auth <API_KEY>'
//      },
//      body: jsonData
//    })
//      .then(res.statusCode === 200 ?
//        res.redirect("home") :
//        res.redirect("failure"))
//      .catch(err => console.log(err))

  res.redirect("home");
 });

// //home
// app.get("/home",function(req,res){
//   res.render("home");
// })

// //failure
//  app.get("/failure",function(req,res){
//    res.render("failure");
//  });




//listen method
app.listen(4131, function() {
  console.log("Server started on port 4131");
});
