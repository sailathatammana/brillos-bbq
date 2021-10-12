import useFetch from "../hooks/useFetch";

export default function Products({ category }) {
  // Hook
  const products = useFetch("products");

  // Const
  const listOfDishes = getRelatedFood(products.data, category.id);

  function getRelatedFood(array, categoryID) {
    return array.filter((item) => {
      return item.category === categoryID;
    });
  }

  const ProductsItems = listOfDishes.map((item) => {
    console.log(item.category);
    return (
      <a key={item.id} href={`./${item.category}/${item.id}`} className="card">
        <img src={item.imageURL} alt="img" />
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <h2 className="price">{item.price} Kr</h2>
      </a>
    );
  });

  return (
    <>
      {products.loading === true && <p>Loading...</p>}
      {products.error !== null && <p>Error 🚨</p>}
      {!products.loading && products.error === null && (
        <>
          {listOfDishes.length === 0 ? (
            <h4 className="empty-list">Category empty for now</h4>
          ) : (
            <section className="section-products ">{ProductsItems} </section>
          )}
        </>
      )}
    </>
  );
}
