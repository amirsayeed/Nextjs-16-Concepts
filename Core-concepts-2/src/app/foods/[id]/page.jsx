import React from 'react';

export function generateStaticParams() {
  return [{ id: '53009' }, { id: '52781' }, { id: '52899' }]
}

const getSingleFood = async(id) =>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    return data.details;
}

const FoodDetailsPage = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);
  
    return (
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Food Image */}
          <div>
            <img
              src={food.foodImg}
              alt={food.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
  
          {/* Food Details */}
          <div className="space-y-5">
            <span className="badge badge-primary badge-lg">
              {food.category}
            </span>
  
            <h1 className="text-4xl font-bold">{food.title}</h1>
  
            <p className="text-lg">
              <span className="font-semibold">Cuisine:</span> {food.area}
            </p>
  
            <p className="text-3xl font-bold text-primary">
              ৳{food.price}
            </p>
  
            <p className="text-gray-600">
              Enjoy this delicious <strong>{food.title}</strong>, a{" "}
              {food.category.toLowerCase()} dish from{" "}
              {food.area} cuisine. Freshly prepared with quality ingredients
              to give you an unforgettable dining experience.
            </p>
  
            <div className="flex gap-4">
              <a
                href={food.video}
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