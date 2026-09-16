import Header from "@/src/components/Dashboard/Header";
import { authUserSession } from "@/src/libs/auth-user";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/src/libs/prisma";
import { getAnime } from "@/src/libs/fetch-api";

const AnimeCollection = async ({ anime_id }: { anime_id: string }) => {
  const anime = await getAnime(`/anime/${anime_id}`);
  const animeDetail = anime?.data?.attributes;
  return (
    <Link href={`/anime/${anime_id}`} className="relative border">
      <Image
        src={animeDetail.posterImage.large}
        alt="Poster Image"
        width={250}
        height={200}
        className="w-full"
      />
      <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">
        <h5 className="text-xl text-center">{animeDetail.titles.en_jp}</h5>
      </div>
    </Link>
  );
};

const page = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user!.email! },
  });

  return (
    <section className="text-xl px-4 font-bold mt-4 w-full">
      <Header title={"My Collections"} />

      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect) => {
          return (
            <AnimeCollection key={collect.id} anime_id={collect.anime_id} />
          );
        })}
      </div>
    </section>
  );
};

export default page;
