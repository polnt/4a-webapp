import { useEffect, useState } from "react";

import { users, roles } from "../utils/requests";

import { useSelector } from "react-redux";

const useLoad = () => {
  const { authStatus } = useSelector((state) => state);
  const [redirect, setRedirect] = useState();
  const [userRole, setUserRole] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    (async () => {
      if (authStatus.isSignedIn) {
        try {
          const { uid, displayName, email, photoURL } = users.getCurrent();
          const storedUser = await users.fetchCustomer(uid);

          if (storedUser.exists) {
            const userRoleID = await storedUser.data().role;
            const isCustomer = await storedUser.data().customer;
            const status = await storedUser.data().status;
            const userRoleRef = await roles.fetchByID(userRoleID);

            if (
              isCustomer &&
              status === "verified" &&
              userRoleRef.data().label === "reader"
            ) {
              setUserRole("customer");
            } else if (userRoleRef.data()?.label) {
              setUserRole(userRoleRef.data().label);
            } else {
              setUserRole("reader");
            }
          } else {
            setUserRole("reader");
          }
          setUserData({ uid, displayName, email, photoURL });
        } catch (error) {
          console.log(error);
        }
      } else {
        setRedirect({ signIn: true });
      }
    })();
  }, [authStatus]);

  useEffect(() => {
    switch (userRole) {
      case "customer":
        setRedirect({ customer: true });
        break;
      case "admin":
        setRedirect({ admin: true });
        break;
      case "reader":
        setRedirect({ reader: true });
        break;
      default:
        break;
    }
  }, [userRole]);

  return { userRole, userData, redirect };
};

export default useLoad;
