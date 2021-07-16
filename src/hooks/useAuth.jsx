import { useEffect, useState } from "react";
import firebase from "firebase";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    isSignedIn ? console.log("Connecté") : console.log("Déconnecté");
  }, [isSignedIn]);

  return { isSignedIn, setIsSignedIn };
};

export default useAuth;
