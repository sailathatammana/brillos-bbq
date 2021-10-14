import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import Create from "./Create";
import Edit from "./Edit";
import Sorter from "./Sorter";

export default function AdminPage() {
  //Hooks
  const [selection, setSelection] = useState("create");
  const categories = useFetch("categories");
  const products = useFetch("products");

  return (
    <div className="admin">
      {categories.loading === true && <p>Loading...</p>}
      {categories.error !== null && <p>Error 🚨</p>}
      {!categories.loading && categories.error === null && (
        <div>
          <Sorter hook={[selection, setSelection]} />
          {selection === "create" && <Create categories={categories.data} />}
          {selection === "edit-del" && (
            <Edit categories={categories.data} products={products.data} />
          )}
        </div>
      )}
    </div>
  );
}
