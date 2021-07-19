import firebase from "firebase/app";
import "firebase/auth";

import { db } from "../firebase";

import { reader } from "./roles";

const users = {
  getCurrent: () => {
    return firebase.auth().currentUser;
  },
  fetchCustomer: async (uid) => {
    return await db().collection("users").doc(uid).get();
  },
  getAllCustomers: async () => {
    return await db().collection("users").where("customer", "==", true).get();
  },
  getAllPending: async () => {
    return await db()
      .collection("users")
      .where("status", "==", "pending")
      .get();
  },
  getCustomerDocs: async (uid) => {
    return await db()
      .collection("users")
      .doc(uid)
      .collection("documents")
      .where("uid", "==", uid.toString())
      .get();
  },
  signUpCustomer: async (uid, values) => {
    return await db()
      .collection("users")
      .doc(uid)
      .set({
        ...values,
        status: "pending",
        role: reader,
      });
  },
};

const roles = {
  fetchByID: async (id) => {
    return await db().collection("roles").doc(id).get();
  },
};

const news = {
  getCarouselNews: async () => {
    return await db()
      .collection("news")
      .where("visibility", "==", "public")
      .limit(5)
      .get();
  },
  getNews: async () => {
    return await db()
      .collection("news")
      .where("visibility", "==", "public")
      .get();
  },
};

export { users, roles, news };
