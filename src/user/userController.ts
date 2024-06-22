import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    console.log("reqdata",req.body);
    const {name,email,password}=req.body;
   
    //Validation
    
    if(!name || !email || !password){
        // return res.json({message:"Please fill all details"}) we can use global error handler instead
        //ERROR CODES:
        //400-499 : client error
        //500-599 : server error
        //200-299 : success codes
        //100-199 : informational
        //300-399 : redirection
        const error=createHttpError(400,"All fields are required");
        return next(error); //passes error to global error handler

    }
    //Process
    //Response

    res.json({message:"User registered successfully"});
}
export {createUser};