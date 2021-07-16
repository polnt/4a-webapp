import React, { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

const ClientArea = () => {
  const { user } = useSelector((state) => state);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user.isSignedIn && !user.isPending) {
      setRedirect(true);
    }
  }, [user]);

  return (
    <div>
      <h1>Espace client</h1>
      {redirect && <Redirect to="/espace-non-authorisé" />}
    </div>
  );
};

export default ClientArea;
