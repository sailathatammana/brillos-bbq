import { useParams, NavLink } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import Product from "../components/Product";

export default function CategoryPage() {
  // Hooks
  const categories = useFetch("categories");
  const { categoryID } = useParams();

  function getCurrentCategory(array, id) {
    return array.filter((item) => {
      return item.id === id;
    })[0];
  }

  const currentCategory = getCurrentCategory(categories.data, categoryID);

  return (
    <div className="category">
      {categories.loading === true && <p>Loading...</p>}
      {categories.error !== null && <p>Error</p>}
      {!categories.loading && categories.error === null && (
        <div className="page-category">
          <h1>{currentCategory.title}</h1>
          <Product category={currentCategory} />

          <NavLink to={`/menu`} className="btn btn-main btn-300">
            <h3>Go back to Menu</h3>
          </NavLink>
        </div>
      )}
    </div>
  );
}
