export default function Product({ product }) {
  return (
    <div className="product-page">
      <h2> {product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img
        src={product.imageURL}
        alt={product.description}
        height="400px"
        width="auto"
      />
    </div>
  );
}
