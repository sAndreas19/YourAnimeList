import { PlayCircleIcon } from "@phosphor-icons/react";

const TrailerButton = ({ toggleTrailer }: any) => {
  return (
    <button
      onClick={toggleTrailer}
      className="flex absolute bottom-2 right-2 float-right rounded border px-2 hover:text-secondary cursor-pointer"
    >
      <PlayCircleIcon size={24}/>
      &nbsp;Tonton Trailer
    </button>
  );
};
export default TrailerButton;
