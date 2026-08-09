import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

export function generateStaticParams() {
  return [{ id: '53009' }, { id: '52781' }, { id: '52899' }]
}

export async function generateMetadata({params}){
  const {id} = await params;
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
  const {details={}} = await res.json();
  return {
    title: details.title,
  };
}

const getSingleFood = async(id) =>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    return data.details;
}

const FoodDetailsPage = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);   

    if(!food.title){
      redirect("/foods");
      // return (
      //   <div className="text-center py-20 text-xl font-semibold">
      //   Food not found ❌
      // </div>
      // )
    }

    const {title, foodImg, category,area, price, video} = food || {};

    return (
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Food Image */}
          <div>
            {/* <img
              src={food.foodImg}
              alt={food.title}
              className="w-full rounded-xl shadow-lg"
            /> */}
            <Image
              src={foodImg}
              alt={title}
              className="w-full rounded-xl shadow-lg"
              width={300}
              height={150}
            />
          </div>
  
          {/* Food Details */}
          <div className="space-y-5">
            <span className="badge badge-primary badge-lg">
              {category}
            </span>
  
            <h1 className="text-4xl font-bold">{title}</h1>
  
            <p className="text-lg">
              <span className="font-semibold">Cuisine:</span> {area}
            </p>
  
            <p className="text-3xl font-bold text-primary">
              ৳{price}
            </p>
  
            <p className="text-gray-600">
              Enjoy this delicious <strong>{title}</strong>, a{" "}
              {category} dish from{" "}
              {area} cuisine. Freshly prepared with quality ingredients
              to give you an unforgettable dining experience.
            </p>
  
            <div className="flex gap-4">
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                ▶ Watch Recipe
              </a>
  
              <button className="btn btn-outline">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodDetailsPage;