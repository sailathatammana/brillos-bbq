import useFetch from "../hooks/useFetch";
import { NavLink } from "react-router-dom";

import Category from "../components/Category";

export default function MenuPage() {
  const categories = useFetch("categories");

  const category = categories.data.map((category) => (
    <Category key={category.id} category={category} />
  ));

  return (
    <div className="menu">
      {categories.loading === true && <p>Loading...</p>}
      {categories.error !== null && <p>Error 🚨</p>}
      {!categories.loading && categories.error === null && (
        <div className="page-menu">
          <section className="section-menu ">{category}</section>
          <NavLink to={`/`} className="btn btn-main btn-300">
            <h3>Go back</h3>
          </NavLink>
        </div>
      )}
    </div>
  );
}
