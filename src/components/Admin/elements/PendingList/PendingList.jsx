import React, { useEffect, useState } from "react";

import { db } from "../../../../firebase";

import NewCustomerCard from "./elements/NewCustomerCard";
import RedirectWrapper from "../../../_reusable/RedirectWrapper";

const PendingList = () => {
  const [pendingList, setPendingList] = useState([]);

  useEffect(() => {
    (async () => {
      const tempPending = [];
      const pendingCustomers = await db()
        .collection("users")
        .where("status", "==", "pending")
        .get();
      pendingCustomers.forEach((elem) =>
        tempPending.push({ uid: elem.id, ...elem.data() })
      );
      setPendingList(tempPending);
    })();
  }, []);

  return (
    <RedirectWrapper except="admin">
      <div style={{ display: "flex" }}>
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
    </RedirectWrapper>
  );
};

export default PendingList;
