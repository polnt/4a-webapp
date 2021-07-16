import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const { user } = useSelector((state) => state);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user.isSignedIn && !user.isPending) {
      setRedirect(true);
    }
  }, [user]);

  return { redirect };
};

export default useAuth;
