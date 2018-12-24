var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("home"); 
});

app.get("/friends",function(req,res){
    var friends = ["Paola", "Esteban", "Hector", "Mauro", "Samy"];
   res.render("friends", {friends:friends}); 
});

app.post("/addfriends",function(req,res){
    console.log(req.body);//In order for this to work, you need the package body-parser.
    //body-parser will transform the req.body to a javascript object that you can use.
   res.send("Yeah!") ;
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server has started !"); 
});