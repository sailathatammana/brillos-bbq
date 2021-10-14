import { useState } from "react";

export default function Dropdown({ items, hook, children }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = hook;
  const ListItems = items.map((item) => (
    <div
      key={item.id}
      onClick={() => {
        setSelected(item);
        setIsActive(false);
      }}
    >
      {item.title}
    </div>
  ));

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn select-ghost"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <h4>{selected === "" ? `Select ${children}` : selected.title} </h4>
      </button>

      {isActive && (
        <div className="caret">
          <ul>{ListItems}</ul>
        </div>
      )}
    </div>
  );
}
