import FilterSelector from "./FilterSelector";

import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

import "../../../css/_reusable/SearchBar.css";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  setFieldValue,
  selectValues,
}) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelect = (event) => {
    setFieldValue(event.target.value);
  };

  return (
    <div className="search_bar_container">
      <div className="search_bar">
        <input
          type="search"
          className="search_input"
          placeholder="Recherche"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="search_icon">
          <SearchIcon />
        </div>
      </div>
      <div>
        {selectValues && (
          <FilterSelector
            selectValues={selectValues}
            handleSelect={handleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
