import React, { useState, useCallback, memo } from "react";

import { OpenedFolderIcon, ClosedFolderIcon } from "../../icons";

import OpenedFolder from "../../OpenedFolder/OpenedFolder";

const CustomerFolder = memo(({ customer }) => {
  const [folderIsOpen, setFolderIsOpen] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);

  const handleMouseUp = useCallback(() => {
    setFolderIsOpen(folderIsOpen);
    setDisplayContent(folderIsOpen);
  }, [folderIsOpen, setFolderIsOpen]);

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
      <div>
        <span>
          {customer.lastname?.toUpperCase()} {customer.firstname}
        </span>
      </div>
      <OpenedFolder />
    </>
  );
});

export default CustomerFolder;
