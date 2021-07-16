import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";

import { db } from "../firebase";

const useAuth = () => {
  const { user } = useSelector((state) => state);

  const [redirect, setRedirect] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      if (!user.isSignedIn && !user.isPending) {
        setRedirect(true);
        setUserData(null);
      }
      if (user.isSignedIn) {
        const { uid, displayName, email, photoURL } =
          firebase.auth().currentUser;
        setUserData({
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        });
        const storedUser = await db().collection("users").doc(uid).get();
        if (!storedUser.exists) {
          console.log("check");
          await db().collection("users").doc(uid).set({});
        }
      }
    })();
    console.log("times");
  }, [user.isSignedIn]);

  return { redirect, userData };
};

export default useAuth;
