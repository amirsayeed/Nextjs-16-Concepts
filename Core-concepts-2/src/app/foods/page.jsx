import FoodCard from '@/components/card/FoodCard';
import React from 'react';

const getFoods = async() =>{
    const res = await fetch(` https://taxi-kitchen-api.vercel.app/api/v1/foods/random`)
    const data = await res.json();
    return data.foods;
}

const FoodsPage = async () => {
    const foods = await getFoods();
    // console.log(foods);
    return (
        <div>
           Total Foods Found: {foods.length}
           <div className="grid grid-cols-3 gap-4">
            {foods.map((food) => <FoodCard key={food.id} food={food}></FoodCard>)}
           </div>
        </div>
    );
};

export default FoodsPage;