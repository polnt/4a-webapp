import React, { useEffect, useState } from "react";

import { db } from "../../firebase";

import RedirectWrapper from "../_reusable/RedirectWrapper";

const Admin = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    (async () => {
      const tempArr = [];
      const customers = await db()
        .collection("users")
        .where("customer", "==", true)
        .get();
      customers.forEach((elem) => tempArr.push(elem.data()));
      setCustomerList(tempArr);
    })();
  }, []);

  return (
    <RedirectWrapper except="admin">
      <div>
        <h1>ADMIN</h1>
        <div>
          {customerList.map((_, index) => (
            <p>Client {index + 1}</p>
          ))}
        </div>
      </div>
    </RedirectWrapper>
  );
};

export default Admin;
