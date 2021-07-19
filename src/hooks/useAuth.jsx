import { useEffect, useState } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import { db } from "../firebase";

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
          const { uid, displayName, email, photoURL } =
            firebase.auth().currentUser;
          const storedUser = await db().collection("users").doc(uid).get();
          if (storedUser.exists) {
            const userRoleID = await storedUser.data().role;
            const isCustomer = await storedUser.data().customer;
            const status = await storedUser.data().status;
            const userRoleRef = await db()
              .collection("roles")
              .doc(userRoleID)
              .get();

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
