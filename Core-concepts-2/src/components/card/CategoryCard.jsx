import Link from "next/link";

const CategoryCard = ({ category }) => {
    const { categoryName, categoryImg, id } = category;
  
    return (
      <Link href={`/categories/${id}`}>
        <div className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="bg-gray-100 p-4">
          <img
            src={categoryImg}
            alt={categoryName}
            className="mx-auto h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
  
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {categoryName}
          </h3>
        </div>
      </div>
      </Link>
    );
  };
  
  export default CategoryCard;