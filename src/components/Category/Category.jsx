import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
const Category = () => {
  console.log(categories);
  return (
    <div className="flex flex-row pt-4 justify-between overflow-x-auto ">
      {categories.map((category, i) => (
        <CategoryBox
          key={i}
          label={category.label}
          icon={category.icon}
        ></CategoryBox>
      ))}
    </div>
  );
};

export default Category;
