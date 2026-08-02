import ReviewCard from '@/components/card/ReviewCard';
import React from 'react';

const getReviews = async () =>{
    const res = await fetch(` https://taxi-kitchen-api.vercel.app/api/v1/reviews`);
    const data = await res.json();
    return data.reviews;
}

const page = async () => {
    const reviews = await getReviews();
    console.log(reviews.length);
    return (
        <div className="grid grid-cols-3 gap-4">
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review}></ReviewCard>
            ))}
        </div>
    );
};

export default page;