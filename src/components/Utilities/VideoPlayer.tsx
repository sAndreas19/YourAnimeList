"use client";
import { useEffect, useState } from "react";
import TrailerButton from "@/src/components/Utilities/TrailerButton";
import TrailerVideo from "./TrailerVideo";

const VideoPlayer = ({ youTubeId }: any) => {
  const [openTrailer, setOpenTrailer] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setOpenTrailer(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTrailerButton = () => {
    setOpenTrailer((prevState) => !prevState);
  };

  if(!youTubeId) {
    return null;
  }

  return openTrailer ? <TrailerVideo youTubeId={youTubeId} toggleTrailer={handleTrailerButton}/> : <TrailerButton toggleTrailer={handleTrailerButton}/>;
};

export default VideoPlayer;
