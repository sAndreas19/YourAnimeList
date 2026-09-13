import YouTube from "react-youtube";
const TrailerVideo = ({ youTubeId, toggleTrailer }: any) => {
  const option = {
    width: "350",
    height: "220",
  };
  return (
    <div className="absolute bottom-2 right-2">
      <button
        onClick={toggleTrailer}
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
export default TrailerVideo;
