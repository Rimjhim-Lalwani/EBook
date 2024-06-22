import express from 'express'
const app=express();

//Routes
//HTTP methods : GET, POST, DELETE, PUT, PATCH
app.get('/',(req,res)=>{
    res.json({message:"Welcome to ebook"});
})





export default app;