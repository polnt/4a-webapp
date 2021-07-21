import firebase from "firebase/app";
import "firebase/storage";

const storage = () => {
  return firebase.storage();
};

export default storage;
