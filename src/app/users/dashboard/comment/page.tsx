import Header from "@/src/components/Dashboard/Header";
import { authUserSession } from "@/src/libs/auth-user";
import prisma from "@/src/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await authUserSession();
  let dbError = false;

  if (!user) {
    redirect("/api/auth/signin");
  }
  let comments: any[] = [];
  try {
    comments = await prisma.comment.findMany({
      where: { user_email: user.email ?? "" },
    });
  } catch (error) {
    dbError = true;
    console.error("Database tidak tersedia, Error: ", error);
  }

  return (
    <section className="p-4">
      <div className="rounded px-2">
        <div className="text-xl font-bold">
          <Header title="My Comment" />
        </div>
        <h1 className="text-primary font-bold text-xl border-b py-2">
          Daftar Komentar &nbsp;({comments.length})
        </h1>

        {comments.length === 0 ? (
          <div className="min-h-[65vh] w-full flex flex-col justify-center items-center text-primary">
            <h1 className="font-bold text-2xl">Belum ada komentar</h1>
            {dbError && <p>Database tidak tersedia, gagal memual data...</p>}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-2">
            {comments.map((comment) => {
              return (
                <Link
                  href={`/anime/${comment.anime_id}`}
                  key={comment.id}
                  className="bg-cards rounded p-4 transition hover:scale-101 flex items-center gap-2"
                >
                  <Image
                    src={comment.anime_image}
                    alt="Anime Image"
                    width={30}
                    height={30}
                    className="rounded-[50] border border-secondary w-12 h-12 object-cover shrink-0"
                  />
                  <div>
                    <p className="text-secondary font-bold">
                      {comment.anime_title}
                    </p>
                    <p className="italic">{comment.comment}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
