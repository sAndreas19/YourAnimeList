import Image from "next/image";
import Link from "next/link";

type KitsuAnime = {
  id: string;
  attributes: {
    titles: {
      en_jp: string;
    };
    canonicalTitle: string;
    posterImage: {
      large: string;
    };
  };
};

const AnimeList = ({ api }: any) => {
  if (!api || !api.data || !Array.isArray(api.data)) {
    return (
      <div className="text-white">
        Tidak ada anime yang ditemukan, atau API sedang mengalami masalah.
      </div>
    );
  }
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
        {api.data?.map((data: KitsuAnime) => {
          return (
            <div key={data.id}>
              <Link href={`/${data.id}`} className="cursor-pointer hover:text-secondary transition-all">
                <Image
                  src={data.attributes?.posterImage?.large || "/not_found.png"}
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full max-h-64 object-cover"
                />
                <h3 className="font-bold md:text-xl text-md p-4">
                  {data.attributes.titles.en_jp ||
                    data.attributes.canonicalTitle}
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
