//middleware : route level middleware
import express from 'express';

import IndexRouter from './routes/index1.js';
import AdminRouter from './routes/admin1.js';

const app=express();

//route level middleware
app.use("/admin",AdminRouter);
app.use("/",IndexRouter);


app.listen(3000);
console.log("Server invoked at link http://localhost:3000");