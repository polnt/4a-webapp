import React, { useLayoutEffect, useState } from "react";
// import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";

import { useDispatch, useSelector } from "react-redux";

import { useAuth } from "../../hooks";

import { storage } from "../../utils/requests";

// import useMedia from "../../../hooks/useMedia";
// import Medias from "../medias/Medias";

import "../../css/_reusable/Dropzone.css";

function Dropzone() {
  const { userData } = useAuth();
  const [file, setFile] = useState({
    doc: null,
  });
  // const dispatch = useDispatch();
  // const { currentStepContent } = useSelector((state) => state);

  // let { source, setSource } = useMedia(currentStepContent?.media_id);

  // useLayoutEffect(() => {
  //   if (!currentStepContent?.media_id) {
  //     setSource();
  //   }
  // }, [currentStepContent]);

  const handleUpload = async (doc) => {
    if (doc.type.includes("pdf")) {
      const uploadTask = storage.uploadDoc(userData.uid, doc);
      // uploadTask.on("state_changed", async () => {
      //   const url = await storage.getDocUrl(userData.uid, doc);

      //   setFile({ ...file, url });
      // });
    }
  };

  const onDrop = async (e) => {
    const doc = e[0];
    console.log(doc);
    setFile({
      ...file,
      doc,
    });
    await handleUpload(doc);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemove = async () => {
    // setCurrentStepContentAction(dispatch)({
    //   ...currentStepContent,
    //   media_id: null,
    // });
  };

  return (
    <>
      {/* {!source?.src ? ( */}
      <div className="my_drop_zone_container" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="my_drop_zone_sub_container">
            <div className="my_drop_zone_area">You can drop here now !</div>
          </div>
        ) : (
          <div className="my_drop_zone_sub_container">
            <div className="my_drop_zone_area">
              Drag&apos;n&apos;drop some files here, or click to select files
            </div>
          </div>
        )}
      </div>
      {/* ) : (
        <div className="my_drop_zone_upload_file_container">
          <div>
            <span>{source?.name}</span>
            <button type="button" onClick={handleRemove}>
              X
            </button>
          </div> */}
      {/* {currentStepContent?.media_id && (
            <Medias id={currentStepContent?.media_id} />
          )} */}
      {/* </div>
      )} */}

      <div className="my_drop_zone_file_buttons"></div>
    </>
  );
}

export default Dropzone;
