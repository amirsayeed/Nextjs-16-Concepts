import { getFeedback } from '@/action/server/feedback';
import FeedbackCard from '@/components/card/FeedbackCard';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "feedback",
  };

export const dynamic = "force-dynamic";

// const getFeedbacks = async() =>{
//     const res = await fetch("http://localhost:3000/api/feedback");
//     const data = await res.json();
//     return data;
// }

const FeedbacksPage = async () => {
    const feedbacks = await getFeedback();
    return (
        <div className="">
        <h2 className="text-2xl font-bold">
          {feedbacks.length} Feedbacks found
        </h2>
        <div className="my-5">
          <Link href={"/feedbacks/add"} className="btn">
            Add Feedback
          </Link>
        </div>
        <div className="my-3 space-y-5">
          {feedbacks.map((fd) => (
            <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
          ))}
        </div>
      </div>
    );
};

export default FeedbacksPage;