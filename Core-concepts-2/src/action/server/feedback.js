"use server";
import { connect } from "@/app/lib/dbConnect";

export const PostFeedback = async (message) => {
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