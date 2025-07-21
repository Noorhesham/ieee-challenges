import { CategoriesProps } from "../types";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="bg-white ">
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className=" text-lg lg:text-2xl font-bold text-gray-800">{category.name}</h3>
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default Categories;
