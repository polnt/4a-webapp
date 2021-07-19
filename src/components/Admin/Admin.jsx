import React from "react";

import { NavLink } from "react-router-dom";

import RedirectWrapper from "../_reusable/RedirectWrapper";

import { CustomerFolderIcon, UnknownFolderIcon } from "./elements/icons";

const Admin = () => {
  return (
    <RedirectWrapper except="admin">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>ADMIN</h1>
        <NavLink to="/admin/dossiers-client">
          <h2 style={{ display: "flex", alignItems: "center" }}>
            <CustomerFolderIcon />
            Dossiers client
          </h2>
        </NavLink>

        <NavLink to="/admin/inscriptions-en-attente">
          <h2 style={{ display: "flex", alignItems: "center" }}>
            <UnknownFolderIcon />
            Demandes d'inscription
          </h2>
        </NavLink>
      </div>
    </RedirectWrapper>
  );
};

export default Admin;
