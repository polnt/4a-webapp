import React from "react";

import { Redirect } from "react-router-dom";

import { useAuth } from "../../hooks";

const ClientArea = () => {
  const { redirect } = useAuth();

  return (
    <div>
      <h1>Espace client</h1>
      {redirect && <Redirect to="/espace-non-authorisé" />}
    </div>
  );
};

export default ClientArea;
