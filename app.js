
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

// mongoose.connect("mongodb://localhost:27017/mainDB", {useNewUrlParser: true, useUnifiedTopology: true});

// const userSchema = {
//   email: String,
//   password: String
// };
//
// const User = new mongoose.model("User", userSchema);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
//
// const userSchema = {
//   fullname: String,
//   age: String,
//   email: String,
//   user_name: String
// };

// const User = mongoose.model("User", userSchema);

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/app", function(req, res){
  res.render("app");
});

app.post("/register", function(req, res){

  // const user = new User ({
  //   fullname: req.body.fullname,
  //   age: req.body.age,
  //   email: req.body.email,
  //   user_name: req.body.userName
  // });

  user.save();

  res.redirect("/user");

});

// app.get("/users/:userName", function(req, res){
//
//       res.render("user", {
//         fullname: user.fullname,
//         age: user.age,
//         email: user.email,
//         user_name: user.user_name
//       });
//   });

app.get("/user", function(req, res){
  res.render("user");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.")
});
