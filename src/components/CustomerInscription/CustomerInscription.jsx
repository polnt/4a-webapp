import React from "react";

import CustomerSignUp from "./elements/CustomerSignUp";
import CustomerAuth from "./elements/CustomerAuth";

const CustomerInscription = () => {
  return (
    <div className="container_page">
      <div className="content_page">
        <CustomerAuth />
        <CustomerSignUp />
      </div>
    </div>
  );
};

export default CustomerInscription;
