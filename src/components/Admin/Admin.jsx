import React from "react";

import RedirectWrapper from "../_reusable/RedirectWrapper";

const Admin = () => {
  return (
    <RedirectWrapper except="admin">
      <div>
        <h1>ADMIN</h1>
      </div>
    </RedirectWrapper>
  );
};

export default Admin;
