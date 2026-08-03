import Link from "next/link";

const getSingleCategory = async(id) =>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`);
    const data = await res.json();
    return data.foods || [];     
}

const CategoryFoodsPage = async ({ params }) => {
    const { id } = await params;
    const foods = await getSingleCategory(id);
  
    return (
      <section className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="mb-2 text-3xl font-bold">
          {foods[0]?.category || "Category"} Foods
        </h2>
  
        <p className="mb-8 text-gray-500">
          {foods.length} food{foods.length !== 1 && "s"} found
        </p>
  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foods.map((food) => (
            <Link
              key={food.id}
              href={`/foods/${food.id}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={food.foodImg}
                  alt={food.title}
                  className="object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
  
              <div className="p-5">
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                  {food.category}
                </span>
  
                <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-gray-800">
                  {food.title}
                </h3>
  
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-500">
                    ৳{food.price}
                  </span>
  
                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
                    View
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
  
        {foods.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="text-2xl font-semibold">No foods found</h3>
            <p className="mt-2 text-gray-500">
              This category doesnot contain any foods yet.
            </p>
          </div>
        )}
      </section>
    );
  };

export default CategoryFoodsPage;