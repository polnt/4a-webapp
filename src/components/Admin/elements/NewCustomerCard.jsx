import React from "react";

import { AddFolderIcon } from "./icons";

const NewCustomerCard = ({ customer }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <button
        type="button"
        style={{
          border: "none",
          backgroundColor: "transparent",
          float: "left",
        }}
      >
        <AddFolderIcon style={{ fontSize: 60, color: "#ffc107" }} />
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
        }}
      >
        <span>
          {customer.lastname?.toUpperCase()} {customer.firstname}
        </span>
        <span>{customer.email}</span>
        <span>{customer.phone}</span>
      </div>
    </div>
  );
};

export default NewCustomerCard;
