import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const res = await request.json();
  console.log({ res });
  const user = await prisma.user.findUnique({
    where: { kindeId: res.kindeId },
    include: {
      OrderItems: true,
    },
  });
  if (user) {
    return Response.json({ data: user });
  } else {
    return Response.json({ data: null });
  }
}
