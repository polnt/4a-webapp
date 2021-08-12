import React from "react";

const FilterSelector = ({ selectValues, handleSelect }) => {
  return (
    <form className="filter_list_form">
      <select className="filter_list_select" onChange={handleSelect}>
        {selectValues.header.map((e, i) => (
          <option key={`filter_${e}`} value={selectValues.fields[i]}>
            {selectValues.header[i]}
          </option>
        ))}
      </select>
    </form>
  );
};

export default FilterSelector;
