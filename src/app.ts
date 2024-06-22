import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler';
const app=express();

app.get('/',(req,res,next)=>{
    res.json({message:"Welcome to ebook"});
// to throw and create an error
    // const error=createHttpError(400,"something went wrong!");
    // throw error;
})

app.use(globalErrorHandler);

export default app;