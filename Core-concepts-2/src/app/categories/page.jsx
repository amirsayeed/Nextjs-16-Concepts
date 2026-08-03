import CategoryCard from '@/components/card/CategoryCard';
import React from 'react';

const getCategoryData = async() =>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/categories`);
    const data = await res.json();
    return data.categories || [];
}

const CategoryPage = async () => {
    const categories = await getCategoryData();

    return (
        <div>
            {categories.length} Categories Found
            <div className="my-2 grid grid-cols-3 gap-5">
                {categories.map((category) => <CategoryCard key={category.id} category={category}></CategoryCard>)}
            </div>
        </div>
    );
};

export default CategoryPage;