import React from "react";

import { useAuth } from "../../hooks";

import RedirectWrapper from "../_reusable/RedirectWrapper";

const ClientArea = () => {
  const { userData } = useAuth();

  return (
    <RedirectWrapper except="client">
      <div>
        <div>
          <h1>Espace client</h1>
          <p>Bonjour, {userData?.displayName}</p>
        </div>
      </div>
    </RedirectWrapper>
  );
};

export default ClientArea;
