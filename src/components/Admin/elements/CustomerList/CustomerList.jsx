import React, { useEffect, useState } from "react";

import { users } from "../../../../utils/requests";

import { useSearchBar } from "../../../../hooks";

import CustomerFolder from "./elements/CustomerFolder";
import RedirectWrapper from "../../../_reusable/RedirectWrapper";
import SearchBar from "../../../_reusable/searchBar/SearchBar";

const CustomerList = () => {
  const [customerList, setCustomerList] = useState([]);
  const { filteredList, searchQuery, setSearchQuery, setFieldValue } =
    useSearchBar(customerList, "lastname");
  const listData = {
    header: ["Nom", "Prénom"],
    fields: ["lastname", "firstname"],
  };

  useEffect(() => {
    (async () => {
      const tempCustomers = [];

      const customers = await users.getAllCustomers();
      customers.forEach((elem) =>
        tempCustomers.push({ uid: elem.id, ...elem.data() })
      );
      setCustomerList(tempCustomers);
    })();
  }, []);

  return (
    <RedirectWrapper except="admin">
      <div className="container_page">
        <div className="content_page">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setFieldValue={setFieldValue}
            selectValues={listData}
          />
          {filteredList.map((customer) => (
            <CustomerFolder
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

export default CustomerList;
