import FoodCard from '@/components/card/FoodCard';
import InputSearch from '@/components/InputSearch';
import React from 'react';

const getFoods = async(search) =>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    const data = await res.json();
    return data.foods || [];
}

const FoodsPage = async ({searchParams}) => {
    const {search = " "} = await searchParams;
    const foods = await getFoods(search);
    // console.log(foods);
    return (
        <div>
           Total Foods Found: {foods.length}
           <div className='my-4'>
            <InputSearch/>
           </div>
           <div className="">
            <div className="grid grid-cols-3 gap-4">
            {foods.map((food) => <FoodCard key={food.id} food={food}></FoodCard>)}
           </div>
           </div>
        </div>
    );
};

export default FoodsPage;