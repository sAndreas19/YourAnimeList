import prisma from "@/src/libs/prisma";

export async function POST(request: any) {
  const { anime_id, user_email } = await request.json();
  const data = { anime_id, user_email };

  const createCollection = await prisma.collection.create({ data });

  if (!createCollection)
    return Response.json({ status: 200, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
