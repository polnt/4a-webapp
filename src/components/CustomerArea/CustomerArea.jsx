import React from "react";

import { useAuth } from "../../hooks";

import DocumentList from "./elements/DocumentList";
import RedirectWrapper from "../_reusable/RedirectWrapper";

const CustomerArea = () => {
  const { userData } = useAuth();

  return (
    <RedirectWrapper except="customer">
      <div className="container_page">
        <div className="content_page">
          <h1>Espace client</h1>
          <p>Bonjour, {userData?.displayName}</p>
          <DocumentList />
        </div>
      </div>
    </RedirectWrapper>
  );
};

export default CustomerArea;
