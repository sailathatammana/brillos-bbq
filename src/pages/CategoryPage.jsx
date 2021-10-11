import { useState, useEffect, useCallback } from "react";
import { getFirestore } from "firebase/firestore/lite";
import firebaseInstance from "../scripts/firebase";
import { getCollection } from "../scripts/fireStore";

import Product from "../components/Product";

export default function CategoryPage() {
  const [products, setproducts] = useState([]);
  const [status, setStatus] = useState(0);

  //properties
  const database = getFirestore(firebaseInstance);

  //Methods
  const getproducts = useCallback(async () => {
    const collection = await getCollection(database, "products");
    setproducts(collection);
    console.log(collection);
    setStatus(1);
  }, [database]);

  useEffect(() => {
    getproducts();
  }, [getproducts]);

  const product = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div>
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <ul>{product}</ul>}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
