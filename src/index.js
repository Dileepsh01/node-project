
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";


dotenv.config({
    path:'./env'
})


connectDB()






/*
import express from "express";

 ;( async()=>{

    try{
       await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
       app.on("error", (error)=>{
console.log("ERROR: ", error);
throw error;

       })
       app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on ${process.env.PORT}`);
        
       })

    }
    catch(error){
        console.log( "ERROR:",  error);
        throw error;
        
    }




 } ) ()
    */