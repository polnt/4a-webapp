import React from "react";

import CustomerSignUp from "./elements/CustomerSignUp";
import CustomerAuth from "./elements/CustomerAuth";

const CustomerInscription = () => {
  return (
    <div>
      <CustomerAuth />
      <CustomerSignUp />
    </div>
  );
};

export default CustomerInscription;
