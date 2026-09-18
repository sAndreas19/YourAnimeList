import prisma from "@/src/libs/prisma";

export async function POST(request: any) {
  const { anime_id, user_email, anime_image, anime_title } =
    await request.json();
  const data = { anime_id, user_email, anime_image, anime_title };

  try {
    const createCollection = await prisma.collection.create({ data });

    if (!createCollection)
      return Response.json({ status: 500, isCreated: false });
    else return Response.json({ status: 200, isCreated: true });
  } catch (error) {
    console.error("Database tidak tersedia, Error:", error);
    return Response.json({ status: 503, isCreated: false });
  }
}
