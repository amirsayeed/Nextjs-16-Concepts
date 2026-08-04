"use client";
import ReviewCard from '@/components/card/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './loading';

// const getReviews = async () =>{
//     const res = await fetch(` https://taxi-kitchen-api.vercel.app/api/v1/reviews`);
//     const data = await res.json();
//     return data.reviews;
// }

const ReviewsPage = () => {
    // const reviews = await getReviews();
    //console.log(reviews.length);

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(` https://taxi-kitchen-api.vercel.app/api/v1/reviews`)
        .then(res => res.json())
        .then(data => {
            setReviews(data.reviews);
            setLoading(false);
        })
    },[])

    if(loading){
        return <ReviewLoading></ReviewLoading>
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review}></ReviewCard>
            ))}
        </div>
    );
};

export default ReviewsPage;