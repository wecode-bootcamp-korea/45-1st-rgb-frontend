import React from "react";

export default function Video() {
  return (
    <div>
      <video
        src="/images/main/AdobeStock_212560031_AdobeExpress.mp4"
        muted
        autoPlay
        loop
        controls
        width="1920"
        height="1080"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
