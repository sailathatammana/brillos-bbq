import useFetch from "../hooks/useFetch";

import Category from "../components/Category";

export default function MenuPage() {
  const categories = useFetch("categories");

  const category = categories.data.map((category) => (
    <Category key={category.id} category={category} />
  ));

  return (
    <div className="page-menu">
      {categories.loading === true && <p>Loading...</p>}
      {categories.error !== null && <p>Error 🚨</p>}
      {!categories.loading && categories.error === null && (
        <section className="section-menu ">{category}</section>
      )}
    </div>
  );
}
