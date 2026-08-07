import { feedback } from "../../route";

export async function GET(request,{params}) {
    const {id} = await params;
    const feedbackItem = feedback.find(item => item.id == id) || {};

    return Response.json({
        status: 200,
        data: feedbackItem
    })
}