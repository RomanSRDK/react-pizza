import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {searchValue && (
        <IoCloseSharp
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
        />
      )}
    </div>
  );
};

export default Search;
