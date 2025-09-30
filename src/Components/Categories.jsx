import { use } from "react";
import { NavLink } from "react-router"; // ✅ should be react-router-dom, not "react-router"

const category_promise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
  const totalCategory = use(category_promise);

  return (
    <div>
      <p className="font-bold">
        All Categories ({totalCategory.length})
      </p>

      <div className="grid grid-cols-1 gap-3">
        {totalCategory.map((category) => (
          <NavLink 
            key={category.id}
            to={`/category/${category.id}`}
            className="
         px-4 py-2 category-link
            "
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
