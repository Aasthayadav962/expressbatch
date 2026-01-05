import express from 'express';

const app=express();

app.get("/",(req,res)=>{
 res.send("<h1>This is express server working</h1>");
});

app.listen(3000);
console.log("Server invoked at link http://localhost:3000");