export default function Category({ category }) {
  return (
    <div>
      <a href={`/menu/${category.id}`} className="card" key={category.id}>
        <img src={category.imageURL} alt={category.description} />
        <h2> {category.title}</h2>
        <p>{category.description}</p>
      </a>
    </div>
  );
}
