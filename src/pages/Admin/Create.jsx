//NPM Packages
import { useState } from "react";

import { createCategory, createProduct } from "../../scripts/database";
import { validElement, validationImage } from "../../scripts/validation";
import Dropdown from "../../components/Dropdown";
import SubmitButton from "../../components/SubmitButton";
import ProductForm from "./ProductForm";
import CategoryForm from "./CategoryForm";
import UploadImage from "../../components/UploadImage";

export default function Create({ categories }) {
  //Hooks
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  //Const
  const newCategory = {
    title: title.toLowerCase(),
    description: description,
  };
  const newProduct = {
    ...newCategory,
    ingredients: ingredients,
    price: parseInt(price),
    category: category.id,
  };
  const isCategorySelected = category !== "";
  const isElementValid = validElement(newProduct, categories);
  //Methods
  function handleUpload(event) {
    event.preventDefault();
    if (!isCategorySelected) {
      createCategory(newCategory, image);
    } else {
      createProduct(newProduct, image);
    }
  }
  return (
    <section className="section-admin">
      <h2>Create {isCategorySelected ? "Product" : "Category"}</h2>
      <div className="drop-container">
        <Dropdown items={categories} hook={[category, setCategory]}>
          Category
        </Dropdown>
      </div>
      <form onSubmit={handleUpload}>
        <p className="admin-instructions">All fields are required *</p>
        <CategoryForm
          hookTitle={[title, setTitle]}
          hookDescription={[description, setDescription]}
          isValid={isElementValid}
        />
        {isCategorySelected && (
          <ProductForm
            hookIng={[ingredients, setIngredients]}
            hookPrice={[price, setPrice]}
            isValid={isElementValid}
          />
        )}
        <UploadImage setImage={setImage} />
        <SubmitButton
          isAllValid={
            isCategorySelected
              ? isElementValid.product && validationImage(image)
              : isElementValid.category && validationImage(image)
          }
        />
      </form>
    </section>
  );
}
