import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

export async function GET(request,{params}) {
    const {id} = await params;
    const query = {_id: new ObjectId(id)};
    const result = await feedbackCollection.findOne(query) || {};

    return Response.json(result);
}

export async function DELETE(request,{params}) {
    const {id} = await params;
    const query = {_id: new ObjectId(id)};
    const result = await feedbackCollection.deleteOne(query) || {};

    return Response.json(result);
}

export async function PATCH(request,{params}) {
    const {id} = await params;
    const {message} = await request.json();
    const query = {_id: new ObjectId(id)};
    const result = await feedbackCollection.updateOne(query, {$set: {message}}) || {};

    return Response.json(result);
}