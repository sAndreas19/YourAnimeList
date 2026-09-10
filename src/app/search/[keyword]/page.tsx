import AnimeList from "@/src/components/AnimeList";
import Header from "@/src/components/AnimeList/Header";

const Page = async ({ params }: any) => {

const { keyword } = await params
const decodeKeyword = decodeURI(keyword)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?filter[text]=${keyword}`, {next: {revalidate: 86400}})
  const searchAnime = await response.json()

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