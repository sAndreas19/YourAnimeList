import { getAnime } from "../../../libs/fetch-api";
import Image from "next/image";
import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import Synopsis from "./read-more";
import VideoPlayer from "@/src/components/Utilities/VideoPlayer";
import AddToCollectionButton from "@/src/components/AnimeList/AddToCollectionButton";
import { authUserSession } from "@/src/libs/auth-user";
import prisma from "@/src/libs/prisma";
import ViewCollectionButton from "@/src/components/AnimeList/ViewCollectionButton";
import CommentInput from "@/src/components/AnimeList/CommentInput";
import CommentBox from "@/src/components/AnimeList/CommentBox";

type pageProps = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const anime = await getAnime(`/anime/${id}`);
  const animeDetail = anime.data?.attributes;
  const user = await authUserSession();
  const collection = user?.email
    ? await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_id: id },
      })
    : null;

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 26, 0.8), rgba(15, 15, 26, 0.8)), url(${animeDetail.coverImage?.large})`,
        }}
      >
        <div className="flex flex-col md:flex-row p-2 mx-2 gap-3 md:gap-5 relative">
          <div className="w-[250px] min-w-[250px] shrink-0">
            <Image
              src={animeDetail.posterImage.large}
              alt="Poster Image"
              width={250}
              height={250}
              className="rounded"
            />
          </div>

          <div className="uppercase flex flex-col justify-center text-xl gap-2">
            <div className="flex flex-row font-bold">
              <h4># {animeDetail.popularityRank} &nbsp;Terpopuler</h4>
            </div>
            <div className="flex font-display text-primary font-bold text-3xl">
              <h2>{animeDetail.titles.en_jp || animeDetail.canonicalTitle}</h2>
            </div>
            <div className="flex flex-row font-bold">
              <StarIcon weight="fill" size={28} />
              <p>&nbsp;{(animeDetail.averageRating / 10).toFixed(2)} / 10</p>
            </div>
            <div className="flex flex-row font-bold">
              <h3>{animeDetail.episodeCount || "-"} &nbsp;Episode</h3>
            </div>
            <div className="flex flex-row font-bold">
              <h3>Status :&nbsp;</h3>
              <p>{animeDetail.status}</p>
            </div>
            <div className="flex flex-col text-sm gap-1">
              <p>Favorit : {animeDetail.favoritesCount}</p>
              <p>Penonton : {animeDetail.userCount}</p>
              <p>Rilis : {animeDetail.startDate}</p>
            </div>
          </div>

          <div className="md:absolute flex flex-col right-2 gap-1 font-bold">
            {collection ? (
              <ViewCollectionButton user_email={user?.email} />
            ) : (
              <AddToCollectionButton anime_id={id} user_email={user?.email} anime_image={animeDetail.posterImage.large} anime_title={animeDetail.titles.en_jp}/>
            )}
          </div>
            
          <VideoPlayer youTubeId={animeDetail.youtubeVideoId} />
        </div>
        
        <div className="p-4 tracking-wide leading-relaxed bg-black/40">
          <Synopsis text={animeDetail.synopsis} />
        </div>
      </div>
      
      <CommentBox anime_id={id}/>
      <CommentInput anime_id={id} user_email={user?.email} username={user?.name} anime_title={animeDetail.titles.en_jp}/>
    </div>
  );
};

export default page;
