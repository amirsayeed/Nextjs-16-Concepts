"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = () => {
    const router = useRouter();
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        // const data = await postFeedback(message);
        
        const res = await fetch("http://localhost:3000/api/feedback",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({message})
        });

        if(res.ok){
            router.push("/feedbacks");
        }
    }
    return (
        <div>
           <form className="space-y-5 text-center" onSubmit={handleSubmit}>
           <textarea
            required
            className="w-xl border border-dashed p-3"
            name="message"
            id=""
            cols="30"
            rows="10"></textarea>{" "}
            <hr />
            <button className="btn">Add Feedback</button>
           </form> 
        </div>
    );
};

export default FeedbackForm;