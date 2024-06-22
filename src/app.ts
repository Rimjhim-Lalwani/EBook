import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRouter from './user/userRouter';
const app=express();
app.use(express.json());
app.get('/',(req,res,next)=>{
    res.json({message:"Welcome to ebook"});
// to throw and create an error
    // const error=createHttpError(400,"something went wrong!");
    // throw error;
})
app.use('/api/users',userRouter);
app.use(globalErrorHandler);

export default app;