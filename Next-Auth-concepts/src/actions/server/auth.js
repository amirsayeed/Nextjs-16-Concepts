"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';

export const postUser = async(payload) =>{
    console.log(payload);

    const isExist = await dbConnect("users").findOne({email:payload.email});

    if(isExist){
        return{
            success: false,
            message: "user already exists"
        }
    }

    const hashPass = await bcrypt.hash(payload.password, 10);
    
    const newUser = {
        ...payload,
        createdAt: new Date().toISOString(),
        role: "user",
        password: hashPass
    } 

    console.log(newUser);

    const result = await dbConnect("users").insertOne(newUser);
    if(result.acknowledged){
        return {
            success: true,
            message: `user created with ${result.insertedId.toString()}`
        }
    }

}