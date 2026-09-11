"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youTubeId }: any) => {
  const [openTrailer, setOpenTrailer] = useState(true);

  const handleTrailerButton = () => {
    setOpenTrailer((prevState) => !prevState);
  };

  const option = {
    width: "350",
    height: "220",
  };

  const Trailer = () => {
    return (
      <div className="absolute bottom-2 right-2">
        <button
          onClick={handleTrailerButton}
          className="px-2 bg-cards float-right cursor-pointer"
        >
          X
        </button>
        <YouTube
          videoId={youTubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const TrailerButton = () => {
    return (
      <button
        onClick={handleTrailerButton}
        className="absolute bottom-2 right-2 float-right rounded border px-2 hover:text-secondary cursor-pointer"
      >
        Tonton Trailer
      </button>
    );
  };

  return openTrailer ? <Trailer /> : <TrailerButton />;
};

export default VideoPlayer;
