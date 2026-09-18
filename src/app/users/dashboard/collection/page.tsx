import Header from "@/src/components/Dashboard/Header";
import { authUserSession } from "@/src/libs/auth-user";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/src/libs/prisma";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await authUserSession();
  let dbError = false

  if (!user) {
    redirect("/api/auth/signin");
  }
  let collection: any[] = [];
  try {
    collection = await prisma.collection.findMany({
      where: { user_email: user.email ?? "" },
    });
  } catch (error) {
    dbError = true
    console.error("Database tidak tersedia, Error: ", error);
  }
  return (
    <section className="text-xl px-4 font-bold mt-4 w-full">
      <Header title={"My Collections"} />
      {collection.length === 0 ? (
        <div className="min-h-[65vh] w-full flex flex-col justify-center items-center text-primary">
          <h1 className="font-bold text-2xl">Belum ada koleksi</h1>
          {dbError && <p>Database tidak tersedia, gagal memuat data...</p>}
        </div>
      ) : (
        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4 p-4">
          {collection.map((collect) => {
            return (
              <Link
                key={collect.id}
                href={`/anime/${collect.anime_id}`}
                className="relative border"
              >
                <Image
                  src={collect.anime_image || "/not_found.png"}
                  alt="Poster Image"
                  width={250}
                  height={200}
                  className="w-full"
                />
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">
                  <h5 className="text-xl text-center">{collect.anime_title}</h5>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default page;
