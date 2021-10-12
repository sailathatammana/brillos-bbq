import React from "react";

export default function Ingredients({ product }) {
  const ItemIngredients = product.ingredients.map((ingredient) => {
    return (
      <li key={ingredient}>
        <div className="pills">
          <h3>{ingredient}</h3>
        </div>
      </li>
    );
  });

  return (
    <section className="section-ingredients">
      <h4>Ingredients:</h4>
      <ul>{ItemIngredients}</ul>
    </section>
  );
}
