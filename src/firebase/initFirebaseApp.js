import firebase from "firebase/app";
import firebaseConfig from "./config";

const initFirebaseApp = () => {
  firebase.initializeApp(firebaseConfig);
};

export default initFirebaseApp;
