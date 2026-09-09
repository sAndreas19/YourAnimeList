import AnimeList from "@/src/components/AnimeList";
import Header from "@/src/components/AnimeList/Header";

const Page = async ({ params }) => {

const { keyword } = await params

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?filter[text]=${keyword}`, {next: {revalidate: 86400}})
  const searchAnime = await response.json()

  return (
    <>
    
    <section>
      <Header title={`Hasil pencarian untuk ${decodeURI(keyword)}...`} />
      <AnimeList api={searchAnime}/>
    </section>
    </>
  );
}

export default Page