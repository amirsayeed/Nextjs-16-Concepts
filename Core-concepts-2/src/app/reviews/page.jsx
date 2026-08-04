import React from 'react';
import ReviewsPage from './ReviewsPage';
import { Anek_Bangla } from 'next/font/google';


export const metadata = {
    title: "All Reviews",
    description: "Best Fast Food Restaurant in Khulna",
  };

  const anek = Anek_Bangla({
    weight: ["500"]
});

const AllReviews = () => {
    return (
        <div className={`${anek.className}`}>
            <ReviewsPage></ReviewsPage>
        </div>
    );
};

export default AllReviews;