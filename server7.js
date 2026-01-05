//Template engine & pages
import express from 'express';

import IndexRouter from './routes/index.js';
import AdminRouter from './routes/admin.js';

const app=express();

//configuration to load template engine & pages
app.set("view engine","ejs");
app.set("views","./views");

//route level middleware
app.use("/admin",AdminRouter);
app.use("/",IndexRouter);


app.listen(3000);
console.log("Server invoked at link http://localhost:3000");