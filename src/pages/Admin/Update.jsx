import { useState } from "react";

import { validElement } from "../../scripts/validation";
import { updateCat, updateProduct } from "../../scripts/database";
import SubmitButton from "../../components/SubmitButton";
import ProductForm from "./ProductForm";
import CategoryForm from "./CategoryForm";
import UploadImage from "../../components/UploadImage";

export default function Update({ dataSelected, categories }) {
  //Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  //Const
  const { category, product } = dataSelected;
  const newData = {
    title: title.toLowerCase(),
    description: description,
    ingredients: ingredients,
    price: parseInt(price),
    category: category.id,
  };
  const isElementValid = validElement(newData, categories);

  //Methods
  function handleUpdate(event) {
    event.preventDefault();
    if (product) {
      updateProduct(newData, image, product);
    } else {
      updateCat(newData, image, category);
    }
  }
  return (
    <form onSubmit={handleUpdate}>
      <h3 className="admin-subtitle">
        Update {product ? "Product" : "Category"}
      </h3>
      <p className="admin-instructions">
        Fill the field(s) you want to modify/update
      </p>
      <CategoryForm
        hookTitle={[title, setTitle]}
        hookDescription={[description, setDescription]}
        isValid={isElementValid}
      />
      {product && (
        <ProductForm
          hookIng={[ingredients, setIngredients]}
          hookPrice={[price, setPrice]}
          isValid={isElementValid}
        />
      )}
      <UploadImage setImage={setImage} />
      <SubmitButton isAllValid={category !== ""} />
    </form>
  );
}
