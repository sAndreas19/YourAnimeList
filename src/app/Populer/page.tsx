"use client";

import Pagination from "@/src/components/Utilities/Pagination";
import HeaderMenu from "@/src/components/Utilities/HeaderMenu";
import { useEffect, useState } from "react";
import AnimeList from "@/src/components/AnimeList";
import Loading from "../loading";

const Page = () => {
  const [topAnime, setTopAnime] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const maxPage = topAnime?.meta?.count ? Math.ceil(topAnime.meta.count / 20) : 0;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const currentOffset = (page - 1) * 20;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?page[limit]=20&page[offset]=${currentOffset}&sort=-userCount`,
      );
      const data = await response.json();

      setTopAnime(data);
      setLoading(false);
    };

    fetchData()
  }, [page]);

  if (loading) return <Loading />;
  return (
    <>
      <HeaderMenu
        title={`ANIME TERPOPULER #${page}`}
      />
      <AnimeList api={topAnime} />
      <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
    </>
  );
};

export default Page;
