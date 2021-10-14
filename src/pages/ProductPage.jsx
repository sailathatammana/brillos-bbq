import { useParams, NavLink } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import ProductDescription from "../components/ProductDescription";
import Ingredients from "../components/Ingredients";

export default function ProductPage() {
  // Hooks
  const products = useFetch("products");
  const { categoryID } = useParams();
  const { id } = useParams();

  function getRelatedItem(array, id) {
    return array.filter((item) => {
      return item.id === id;
    })[0];
  }
  // Const
  const product = getRelatedItem(products.data, id);

  return (
    <>
      {products.loading === true && <p>Loading...</p>}
      {products.error !== null && <p>Error 🚨</p>}
      {!products.loading && products.error === null && (
        <main className="page-product">
          <ProductDescription product={product} />
          <Ingredients product={product} />
          <NavLink to={`/menu/${categoryID}`} className="btn btn-main btn-300">
            <h3>Go back</h3>
          </NavLink>
        </main>
      )}
    </>
  );
}
