import { deleteElement } from "../../scripts/database";

export default function Delete({ dataSelected }) {
  const { category, product } = dataSelected;

  function handleDelete() {
    if (window.confirm("Are you sure ?")) {
      if (product) {
        deleteElement("products", product.id);
      } else {
        deleteElement("categories", category.id);
      }
      alert("Successfully deleted");
    }
  }

  return (
    <form>
      <h3 className="admin-subtitle">
        Delete {product ? "Product" : "Category"}
      </h3>
      <p className="admin-instructions">Click on "Delete" button</p>
      <button
        className="btn btn-main btn-300"
        disabled={category === ""}
        onClick={handleDelete}
      >
        <h4>Delete {product ? product.title : category.title}</h4>
      </button>
    </form>
  );
}
