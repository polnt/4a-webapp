import React, { useEffect, useState } from "react";

import { users } from "../../../../utils/requests";

import NewCustomerCard from "./elements/NewCustomerCard";
import RedirectWrapper from "../../../_reusable/RedirectWrapper";

const PendingList = () => {
  const [pendingList, setPendingList] = useState([]);

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
          {pendingList.map((customer) => (
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
