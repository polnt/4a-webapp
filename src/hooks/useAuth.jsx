import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";

const useAuth = () => {
  const { user } = useSelector((state) => state);

  const [redirect, setRedirect] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user.isSignedIn && !user.isPending) {
      setRedirect(true);
      setUserData(null);
    }
    if (user.isSignedIn) {
      setUserData(firebase.auth().currentUser);
    }
  }, [user]);

  return { redirect, userData };
};

export default useAuth;
