import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
// import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentStepContentAction } from "../../../redux/actions/stepContentActions";

import useMedia from "../../../hooks/useMedia";
import Medias from "../medias/Medias";

import "../../../css/_reusable/DropZone.css";

function Dropzone() {
  const dispatch = useDispatch();
  const { currentStepContent } = useSelector((state) => state);

  let { source, setSource } = useMedia(currentStepContent?.media_id);

  useLayoutEffect(() => {
    if (!currentStepContent?.media_id) {
      setSource();
    }
  }, [currentStepContent]);

  const onDrop = async (e) => {
    const doc = e[0];
    const formData = new FormData();
    formData.append("title", doc.name);
    formData.append("file", doc);
    try {
      const mediaPost = await axios.post(
        `${process.env.REACT_APP_HOST}/media/creation`,
        formData
      );
      setCurrentStepContentAction(dispatch)({
        ...currentStepContent,
        media_id: mediaPost?.data.id,
      });
    } catch (err) {
      setCurrentStepContentAction(dispatch)({
        ...currentStepContent,
        media_id: err.response.data.id,
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemove = async () => {
    setCurrentStepContentAction(dispatch)({
      ...currentStepContent,
      media_id: null,
    });
  };

  return (
    <>
      {!source?.src ? (
        <div className="my_drop_zone_container" {...getRootProps()}>
          {/* {!currentStepContent?.media_id && ( */}
          <>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="my_drop_zone_sub_container">
                <div className="my_drop_zone_area">You can drop here now !</div>
              </div>
            ) : (
              <div className="my_drop_zone_sub_container">
                <div className="my_drop_zone_area">
                  Drag&apos;n&apos;drop some files here, or click to select
                  files
                </div>
              </div>
            )}
          </>
          {/* )} */}
        </div>
      ) : (
        <div className="my_drop_zone_upload_file_container">
          <div>
            <span>{source?.name}</span>
            <button type="button" onClick={handleRemove}>
              X
            </button>
          </div>
          {currentStepContent?.media_id && (
            <Medias id={currentStepContent?.media_id} />
          )}
        </div>
      )}

      <div className="my_drop_zone_file_buttons"></div>
    </>
  );
}

export default Dropzone;
