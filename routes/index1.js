import express from 'express';

const router=express.Router();

router.get("/",(req,res)=>{
 res.send("<h1>/ or /home url invoked , visitor panel</h1>");
});

router.get("/about",(req,res)=>{
 res.send("<h1>/about url invoked , visitor panel</h1>");
});

router.get("/contact",(req,res)=>{
 res.send("<h1>/contact url invoked , visitor panel</h1>");
});

router.get("/service",(req,res)=>{
 res.send("<h1>/home url invoked , visitor panel</h1>");
});

export default router;