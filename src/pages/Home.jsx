import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
  const BASE_URL = "https://663cc73d17145c4d8c379f8b.mockapi.io/pizzas";
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  const skeletonsComponent = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzasComponent = pizzas
    .filter((pizza) =>
      pizza.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `${BASE_URL}?page=${currentPage}&limit=4${
        categoryId > 0 ? `&category=${categoryId}` : ""
      }`
    )
      .then((resp) => resp.json())
      .then((array) => {
        setTimeout(() => {
          setPizzas(array);
          setIsLoading(false);
        }, 500);
        // window.scrollTo(0, 0);
      });
  }, [categoryId, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(klzjhfgID) => setCategoryId(klzjhfgID)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletonsComponent : pizzasComponent}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
