//NPM Packages
import { useState } from "react";

import Dropdown from "../../components/Dropdown";
import Delete from "./Delete";
import Update from "./Update";

export default function Edit({ categories, products }) {
  //Hooks
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");

  const relatedProducts = getRelatedFood(products, category.id);

  function getRelatedFood(array, categoryID) {
    return array.filter((item) => {
      return item.category === categoryID;
    });
  }
  return (
    <section className="section-admin">
      <h2> Edit {product ? "Product" : "Category"}</h2>
      <div className="drop-container">
        <Dropdown items={categories} hook={[category, setCategory]}>
          Category
        </Dropdown>
        <Dropdown items={relatedProducts} hook={[product, setProduct]}>
          Product
        </Dropdown>
      </div>
      <Update categories={categories} dataSelected={{ category, product }} />
      <Delete dataSelected={{ category, product }} />
    </section>
  );
}
