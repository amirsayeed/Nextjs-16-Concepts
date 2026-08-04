import FoodCard from '@/components/card/FoodCard';
import InputSearch from '@/components/InputSearch';
import React from 'react';
import CartItem from './CartItem';

const getFoods = async(search) =>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
        {next: { revalidate: 10 }}
    );
    const data = await res.json();
    await new Promise(resolve => setTimeout(resolve, 1000));
    return data.foods || [];
}

export const metadata = {
    title: "All Foods",
    description: "Best Fast Food Restaurant in Khulna",
  };

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
           <div className="flex gap-5">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map((food) => <FoodCard key={food.id} food={food}></FoodCard>)}
            </div>
            <div className="w-[250px] border-2 rounded-xl">
                <h2 className="text-lg font-semibold">Cart Items</h2><hr/>
                <CartItem></CartItem>
            </div>
           </div>
        </div>
    );
};

export default FoodsPage;