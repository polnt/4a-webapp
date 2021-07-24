import { useEffect, useState } from "react";

const useSearchBar = (listToSearch, defaultSelectValue) => {
  const [filteredList, setFilteredList] = useState(listToSearch);
  const [fieldValue, setFieldValue] = useState(defaultSelectValue);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredList(
      searchQuery.length
        ? listToSearch?.filter((content) => {
            if (typeof content[fieldValue] === "string") {
              return content[fieldValue]
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            }
            //  if (typeof content[fieldValue] === "number")
            else {
              return content[fieldValue] === +searchQuery;
            }
          })
        : listToSearch
    );
  }, [listToSearch, searchQuery, fieldValue]);

  return {
    filteredList,
    fieldValue,
    setFieldValue,
    searchQuery,
    setSearchQuery,
  };
};

export default useSearchBar;
