import React from "react";

import { FaFilePdf as PdfIcon } from "react-icons/fa";

const DocumentCard = ({ title }) => {
  return (
    <div>
      <PdfIcon style={{ fontSize: 60 }} />
      <span>{title}</span>
    </div>
  );
};

export default DocumentCard;
