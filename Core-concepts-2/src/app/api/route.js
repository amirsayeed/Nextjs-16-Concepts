export const feedback = [
    {
        id: 1,
        message: "Food is delicious"
    },
    {
        id: 2,
        message: "Food is not good"
    }
]

export async function GET(request) {
    return Response.json({
       status: 200,
       message: "API is working fine" 
    })
}