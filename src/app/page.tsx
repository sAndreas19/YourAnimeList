import Link from "next/link";
import Search from "./search/[keyword]/page";
import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?page[limit]=8&sort=-userCount`, {next: {revalidate: 86400}})
  const topAnime = await response.json()

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