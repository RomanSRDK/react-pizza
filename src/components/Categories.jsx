import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  function activeCategory(index) {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => activeCategory(index)}
            className={activeIndex === index ? "active" : null}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
