import React, { useState } from "react";

import { OpenedFolderIcon, ClosedFolderIcon } from "./icons";

// import { RiFolderUserFill as ClosedFolderIcon } from "react-icons/ri";

const CustomerFolder = () => {
  const [folderIsOpen, setFolderIsOpen] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);

  const handleMouseUp = () => {
    setFolderIsOpen(folderIsOpen);
    setDisplayContent(folderIsOpen);
  };

  return (
    <>
      <button
        type="button"
        style={
          folderIsOpen
            ? { border: "none" }
            : { border: "none", backgroundColor: "transparent" }
        }
        onMouseDown={() => setFolderIsOpen(!folderIsOpen)}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => !displayContent && setFolderIsOpen(false)}
      >
        {folderIsOpen ? (
          <OpenedFolderIcon style={{ fontSize: 60, color: "#ffc107" }} />
        ) : (
          <ClosedFolderIcon style={{ fontSize: 60, color: "#ffc107" }} />
        )}
      </button>
      <div>{`${displayContent}`}</div>
    </>
  );
};

export default CustomerFolder;
