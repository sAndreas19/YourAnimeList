import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { getAnime } from "./libs/fetch-api";

const Page = async () => {
  const topAnime = await  getAnime("anime", "page[limit]=10&sort=-userCount")

  return (
    <>
    <section>
      <Header title={"Paling Populer"} linkHref={"/populer"} linkTitle={"Lihat Semua"}/>
      <AnimeList api={topAnime}/>
    </section>
    </>
  );
}

export default Page