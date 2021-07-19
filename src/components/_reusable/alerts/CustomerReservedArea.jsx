import React from "react";

import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import ContactCTA from "../ContactCTA";

const CustomerReservedArea = () => {
  const { authStatus } = useSelector((state) => state);
  return (
    <div className="container_page">
      <div className="content_page">
        <h1>Vous n'êtes pas encore client</h1>
        <p>
          Le service de coffre-fort numérique est mis à disposition de tous nos
          clients.
        </p>
        <ContactCTA />
        {authStatus.isClient && <Redirect to="/espace-client" />}
      </div>
    </div>
  );
};

export default CustomerReservedArea;
