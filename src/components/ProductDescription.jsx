import React from "react";

export default function ProductDescription({ product }) {
  return (
    <section className="section-product_description">
      <img alt="img" src={product.imageURL} />
      <h2>{product.title}</h2>
      <h2>{product.price} Kr</h2>
      <p>{product.description}</p>
    </section>
  );
}
