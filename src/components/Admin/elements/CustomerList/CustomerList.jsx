import React, { useEffect, useState } from "react";

import { users } from "../../../../utils/requests";

import CustomerFolder from "./elements/CustomerFolder";
import RedirectWrapper from "../../../_reusable/RedirectWrapper";

const CustomerList = () => {
  const [customerList, setCustomerList] = useState([]);

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
          {customerList.map((customer) => (
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
