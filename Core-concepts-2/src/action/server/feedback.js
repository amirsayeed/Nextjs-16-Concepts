"use server";
import { connect } from "@/lib/dbConnect";

export const postFeedback = async (message) => {
    const res = await connect("feedbacks").insertOne({
        message, 
        date: new Date().toISOString()
    });
    return {
        ...res,
        insertedId: res.insertedId.toString()
    }
};

export const getFeedback=async()=>{
    const feedback = await connect("feedbacks").find().toArray();
    return feedback;

}