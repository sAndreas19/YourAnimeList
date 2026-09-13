import AnimeList from "@/src/components/AnimeList";
import Header from "@/src/components/AnimeList/Header";
import { getAnime } from "../../../libs/fetch-api";

const Page = async ({ params }: any) => {

const { keyword } = await params
const decodeKeyword = decodeURI(keyword)
  const searchAnime = await getAnime("anime", `filter[text]=${keyword}`)

  return (
    <>
    
    <section>
      <Header title={`Hasil pencarian untuk ${decodeKeyword}...`} />
      <AnimeList api={searchAnime}/>
    </section>
    </>
  );
}

export default Page