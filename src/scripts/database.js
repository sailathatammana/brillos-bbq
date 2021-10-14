import uploadImage from "./firebaseStorage";
import { createDoc, updateDocument, delDoc } from "./fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";

const database = getFirestore(firebaseInstance);

// Create a category using upload image from client computer
export async function createCategory(someCategory, someImage) {
  const newImageURL = await uploadImage(firebaseInstance, someImage);
  const newCategory = { ...someCategory, imageURL: newImageURL };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to categories");
}

//Create a Product
export async function createProduct(someProduct, someImage) {
  const newImageURL = await uploadImage(firebaseInstance, someImage);
  const newProduct = { ...someProduct, imageURL: newImageURL };
  createDoc(database, "products", newProduct);
  alert(newProduct.title + " added to category # " + newProduct.category);
}

//Update category
export async function updateCat(newData, newImage, category) {
  let updatedCategory = { ...category };

  if (newData.title !== "") {
    updatedCategory.title = newData.title;
  }
  if (newData.description !== "") {
    updatedCategory.description = newData.description;
  }
  if (newImage !== "") {
    const newImageURL = await uploadImage(firebaseInstance, newImage);
    updatedCategory.imageURL = newImageURL;
  }
  await updateDocument(database, "categories", category.id, updatedCategory);
  alert(updatedCategory.title + " successfully updated ");
}

//Update product
export async function updateProduct(newData, newImage, product) {
  let updatedProduct = { ...product };

  if (newData.title !== "") {
    updatedProduct.title = newData.title;
  }
  if (newData.description !== "") {
    updatedProduct.description = newData.description;
  }
  if (newData.ingredients !== []) {
    updatedProduct.ingredients = newData.ingredients;
  }
  if (!isNaN(newData.price)) {
    updatedProduct.price = newData.price;
  }
  if (newImage !== "") {
    const newImageURL = await uploadImage(firebaseInstance, newImage);
    updatedProduct.imageURL = newImageURL;
  }
  await updateDocument(database, "products", product.id, updatedProduct);
  alert(updatedProduct.title + " successfully updated ");
}

// Delete element by id
export async function deleteElement(path, id) {
  delDoc(database, path, id);
}
