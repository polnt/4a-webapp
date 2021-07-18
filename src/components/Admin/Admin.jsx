import React, { useEffect, useState } from "react";

import { db } from "../../firebase";

import RedirectWrapper from "../_reusable/RedirectWrapper";
import CustomerFolder from "./elements/CustomerFolder";
import NewCustomerCard from "./elements/NewCustomerCard";

import { CustomerFolderIcon, UnknownFolderIcon } from "./elements/icons";

const Admin = () => {
  const [toggleList, setToggleList] = useState({
    customerList: false,
    pendingList: false,
  });
  const [pendingList, setPendingList] = useState([]);
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    (async () => {
      const tempCustomers = [];
      const customers = await db()
        .collection("users")
        .where("customer", "==", true)
        .get();
      customers.forEach((elem) => tempCustomers.push(elem.data()));
      setCustomerList(tempCustomers);

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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>ADMIN</h1>
        <button
          type="button"
          onClick={() =>
            setToggleList({ customerList: !toggleList.customerList })
          }
        >
          <h2 style={{ display: "flex", alignItems: "center" }}>
            <CustomerFolderIcon />
            Dossiers client
          </h2>
        </button>
        {toggleList.customerList && (
          <div>
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
        )}
        <button
          type="button"
          onClick={() =>
            setToggleList({ pendingList: !toggleList.pendingList })
          }
        >
          <h2 style={{ display: "flex", alignItems: "center" }}>
            <UnknownFolderIcon />
            Demandes d'inscription
          </h2>
        </button>
        {toggleList.pendingList && (
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
        )}
      </div>
    </RedirectWrapper>
  );
};

export default Admin;
