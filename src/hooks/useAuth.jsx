import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import firebase from "firebase";
import { db } from "../firebase";

import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/actions";

// import { reader } from "./roles";

const useAuth = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const [redirect, setRedirect] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(signIn(!!user));
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

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
        // const storedUser = await db().collection("users").doc(uid).get();

        // console.log("hmm", userRole.data().label);
        // if (!storedUser.exists) {

        //   // await db()
        //   //   .collection("users")
        //   //   .doc(uid)
        //   //   .set({
        //   //     role: db().collection("roles").doc(reader),
        //   //   });
        // } else {
        //   const userRoleID = storedUser.data().role.id;
        //   const userRole = await db().collection("roles").doc(userRoleID).get();
        //   if (userRole.data().label === "client") {}
        // }
      }
    })();
  }, [user.isSignedIn, user.isPending]);

  return { redirect, userData };
};

export default useAuth;
