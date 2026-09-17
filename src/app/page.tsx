import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { getAnime } from "../libs/fetch-api";

const Page = async () => {
  const topAnime = await getAnime("anime", "page[limit]=4&sort=-userCount");
  const trendingAnime = await getAnime("anime", "sort=-averageRating&page[limit]=10");

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
        <Header title={"Rating Terbaik"} />
        <AnimeList api={trendingAnime} />
      </section>
    </>
  );
};

export default Page;
