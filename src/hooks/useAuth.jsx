import { useEffect, useState } from "react";

import firebase from "firebase";
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
            const userRoleID = await storedUser.data().role?.id;
            const userRoleRef = await db()
              .collection("roles")
              .doc(userRoleID)
              .get();
            setUserRole(
              userRoleRef.data()?.label ? userRoleRef.data().label : "reader"
            );
            setUserData({ displayName, email, photoURL });
          } else {
            setUserRole("reader");
          }
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
      case "admin":
        setRedirect({ admin: true });
        break;
      case "client":
        setRedirect({ client: true });
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
