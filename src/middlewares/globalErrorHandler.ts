import  { NextFunction, Request, Response } from 'express'
import  { HttpError } from 'http-errors';
import { config } from '../config/config';

//rest all middlewares(written as arrow functions take 3 parameters(req,res,next but error handler is a special middleware that takes 4 parameters ie req res next and err))

const globalErrorHandler=(
    err:HttpError, 
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const statusCode=err.statusCode || 500;

    return res.status(statusCode).json({
        message:err.message,
        errorStack:config.env==='development'?err.stack:'',
    });
};
export default globalErrorHandler;
