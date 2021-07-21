import React from "react";

// import useMedia from "../../../hooks/useMedia";
// import "../../../css/_reusable/medias/Medias.css";

const Medias = ({ id, title }) => {
  // const { source } = useMedia(id);

  return (
    <>
      {source?.mimetype.includes("application/pdf") && (
        <iframe
          className="media iframe_media"
          title={title}
          src={`data:application/pdf;base64, ${source.src}`}
          frameborder="0"
          scroll="no"
        />
      )}
      {source?.mimetype.includes("image") && (
        <img
          className="media"
          alt={title}
          src={`data:image/jpg;base64, ${source.src}`}
        />
      )}
      {/* {source?.mimetype.includes("video") && (
				<video
					className="media"
					alt={title}
					src={`data:video/webm;base64, ${source.src}`}
				/>
			)} */}
    </>
  );
};

export default Medias;
