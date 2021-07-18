import React from "react";

import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import { useAuth } from "../../hooks";

import LoadingSpinner from "./LoadingSpinner";

const RedirectWrapper = ({ children, except }) => {
  const { authStatus } = useSelector((state) => state);

  const { redirect } = useAuth();

  return (
    <>
      {!authStatus.isPending && (
        <>
          {redirect && redirect[except] && <div>{children}</div>}
          {except !== "signIn" && redirect?.signIn && (
            <Redirect to="/espace-non-authorisé" />
          )}
          {except !== "admin" && redirect?.admin && <Redirect to="/admin" />}
          {except !== "reader" && redirect?.reader && (
            <Redirect to="/espace-reservé-aux-clients" />
          )}
          {except !== "client" && redirect?.client && (
            <Redirect to="/espace-client" />
          )}
        </>
      )}
      {authStatus.isPending && <LoadingSpinner />}
    </>
  );
};

export default RedirectWrapper;
