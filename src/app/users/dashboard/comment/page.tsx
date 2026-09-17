import Header from "@/src/components/Dashboard/Header";
import { authUserSession } from "@/src/libs/auth-user";
import prisma from "@/src/libs/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await authUserSession();
  if (!user) {
    redirect("/api/auth/signin");
  }
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email ?? "" },
  });
  console.log(comments);
  return (
    <section className="p-4">
      <div className="rounded px-2">
        <div className="text-xl font-bold">

        <Header title="My Comment"/>
        </div>
        <h1 className="text-primary font-bold text-xl border-b py-2">
          Daftar Komentar &nbsp;({comments.length})
        </h1>
        <div className="grid grid-cols-1 gap-4 py-2">
          {comments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.anime_id}`}
                key={comment.id}
                className="bg-cards rounded p-4 transition hover:scale-101"
              >
                <p className="text-secondary font-bold">
                  {comment.anime_title}
                </p>
                <p className="italic">{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
