import prisma from "@/src/libs/prisma";

export async function POST(request: any) {
  const { anime_id, user_email, comment, username, anime_title, anime_image, user_image } =
    await request.json();
  const data = { anime_id, user_email, comment, username, anime_title, anime_image, user_image };

  try {
    const createComment = await prisma.comment.create({ data });

    if (!createComment) return Response.json({ status: 500, isCreated: false });
    else return Response.json({ status: 200, isCreated: true });
  } catch (error) {
    console.error("Database tidak tersedia, Error:", error);
    return Response.json({ status: 503, isCreated: false });
  }
}
