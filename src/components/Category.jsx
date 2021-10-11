export default function Category({ category }) {
  return (
    <div className="category-page">
      <h2> {category.title}</h2>
      <p>{category.description}</p>
      <img
        src={category.imageURL}
        alt={category.description}
        height="400px"
        width="auto"
      />
    </div>
  );
}
