import { useState, useEffect, useCallback } from "react";
import { getFirestore } from "firebase/firestore/lite";
import firebaseInstance from "../scripts/firebase";
import { getCollection } from "../scripts/fireStore";

import Category from "../components/Category";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);

  //properties
  const database = getFirestore(firebaseInstance);

  //Methods
  const getCategories = useCallback(async () => {
    const collection = await getCollection(database, "categories");
    setCategories(collection);
    console.log(collection);
    setStatus(1);
  }, [database]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const category = categories.map((category) => (
    <Category key={category.id} category={category} />
  ));

  return (
    <div>
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <ul>{category}</ul>}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
