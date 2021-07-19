import React, { useEffect, useState } from "react";

import { db } from "../../../firebase";

import { useAuth } from "../../../hooks";

import DocumentCard from "./DocumentCard";

const DocumentList = () => {
  const { userData } = useAuth();
  const [documentList, setDocumentList] = useState([]);

  useEffect(() => {
    if (userData) {
      (async () => {
        try {
          const tempArr = [];
          const fetchedList = await db()
            .collection("users")
            .doc(userData?.uid)
            .collection("documents")
            .where("uid", "==", userData?.uid.toString())
            .get();
          fetchedList.forEach((doc) => tempArr.push(doc.data()));
          setDocumentList(tempArr);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [userData]);

  return (
    <div>
      {documentList.map((doc) => (
        <DocumentCard title={doc.title} />
      ))}
    </div>
  );
};

export default DocumentList;
