import { useEffect, useState } from "react";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/actions";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(signIn(!!user));
      });
    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    isSignedIn ? console.log("Connecté") : console.log("Déconnecté");
  }, [isSignedIn]);

  return { isSignedIn, setIsSignedIn };
};

export default useAuth;
