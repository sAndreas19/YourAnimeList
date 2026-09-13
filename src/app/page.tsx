import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { getAnime } from "../libs/fetch-api";

const Page = async () => {
  const topAnime = await getAnime("anime", "page[limit]=4&sort=-userCount");
  const trendingAnime = await getAnime("trending/anime");

  return (
    <>
      <section>
        <Header
          title={"Paling Populer"}
          linkHref={"/populer"}
          linkTitle={"Lihat Semua"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={"Trending Anime"} />
        <AnimeList api={trendingAnime} />
      </section>
    </>
  );
};

export default Page;
