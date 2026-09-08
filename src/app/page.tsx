import Link from "next/link";
import Search from "./Search/page";
import AnimeList from "../components/AnimeList";

type KitsuAnime = {
  id: string,
  attributes: {
    titles: {
      en_jp: string
    },
    canonicalTitle: string,
    posterImage: {
      large: string
    }
  }
}

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?page[limit]=8&sort=-userCount`, {next: {revalidate: 86400}})
  const anime = await response.json()

  return (
    <div className="">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paling Poluler</h1>
        <Link href="/populer" className="text-md md:text-xl underline hover:text-secondary transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
        {anime?.data?.map((data: KitsuAnime) => {
          return (
            <div key={data.id} className="shadow-xl">
              <AnimeList
                id={data.id}
                title={data.attributes?.titles?.en_jp || data.attributes?.canonicalTitle}
                imageUrl={data.attributes?.posterImage?.large}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home