import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

const AppleStoreTv = () => {
  return (
    <div className="appplestore-tv bg-dark mt-5 p-3">
      <div className="title">
        <h2 className="text-white fw-bold text-center mb-3">
          <OndemandVideoIcon style={{ fontSize: "70px" }} /> AplleStore TV
        </h2>
      </div>
      <div className="content container d-flex justify-content-between align-items-center gap-2 flex-wrap">
        <div className="video-item">
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/ehbmC1irQuY"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="video-item">
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/UfawgQJICU8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="video-item">
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/TBTgQbjRsqg"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="video-item">
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/I-t2mwrYc6s"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default AppleStoreTv;
