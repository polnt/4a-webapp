import React from "react";

import { useAuth } from "../../hooks";

import RedirectWrapper from "../_reusable/RedirectWrapper";

const CustomerArea = () => {
  const { userData } = useAuth();

  return (
    <RedirectWrapper except="customer">
      <div>
        <div>
          <h1>Espace client</h1>
          <p>Bonjour, {userData?.displayName}</p>
        </div>
      </div>
    </RedirectWrapper>
  );
};

export default CustomerArea;
