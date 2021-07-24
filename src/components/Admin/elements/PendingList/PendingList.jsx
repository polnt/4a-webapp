import React, { useEffect, useState } from "react";

import { users } from "../../../../utils/requests";

import { useSearchBar } from "../../../../hooks";

import NewCustomerCard from "./elements/NewCustomerCard";
import RedirectWrapper from "../../../_reusable/RedirectWrapper";
import SearchBar from "../../../_reusable/searchBar/SearchBar";

const PendingList = () => {
  const [pendingList, setPendingList] = useState([]);
  const { filteredList, searchQuery, setSearchQuery, setFieldValue } =
    useSearchBar(pendingList, "lastname");
  const listData = {
    header: ["Nom", "Prénom"],
    fields: ["lastname", "firstname"],
  };

  useEffect(() => {
    (async () => {
      const tempPending = [];
      const pendingCustomers = await users.getAllPending();
      pendingCustomers.forEach((elem) =>
        tempPending.push({ uid: elem.id, ...elem.data() })
      );
      setPendingList(tempPending);
    })();
  }, []);

  return (
    <RedirectWrapper except="admin">
      <div className="container_page">
        <div className="content_page" style={{ display: "flex" }}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setFieldValue={setFieldValue}
            selectValues={listData}
          />
          {filteredList.map((customer) => (
            <NewCustomerCard
              customer={{
                uid: customer.uid,
                email: customer.email,
                lastname: customer.lastname,
                firstname: customer.firstname,
                phone: customer.phone,
              }}
            />
          ))}
        </div>
      </div>
    </RedirectWrapper>
  );
};

export default PendingList;
