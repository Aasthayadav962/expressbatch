import express from 'express';

const app=express();

const urlRoute="<h2>Click on the link below to redirect</h2><a href='/'>Home</a><br/><br/><a href='/about'>About</a><br/><br/><a href='/contact'>Contact</a><br/><br/><a href='/service'>Service</a><br/><br/><a href='/register'>Register</a><br/><br/><a href='/login'>Login</a><br/><br/>";

app.get("/",(req,res)=>{
 res.send("<h1>/ or /home url invoked</h1>"+urlRoute);
});

app.get("/about",(req,res)=>{
 res.send("<h1>/about url invoked</h1>"+urlRoute);
});

app.get("/contact",(req,res)=>{
 res.send("<h1>/contact url invoked</h1>"+urlRoute);
});

app.get("/service",(req,res)=>{
 res.send("<h1>/service url invoked</h1>"+urlRoute);
});

app.get("/register",(req,res)=>{
 res.send("<h1>/register url invoked</h1>"+urlRoute);
});

app.get("/login",(req,res)=>{
 res.send("<h1>/login url invoked</h1>"+urlRoute);
});

app.listen(3000);
console.log("Server invoked at link http://localhost:3000");