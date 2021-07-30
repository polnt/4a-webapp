import React, { useEffect, useState } from "react";

import { users } from "../../../utils/requests";

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
          const fetchedList = await users.getCustomerDocs(userData.uid);
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
