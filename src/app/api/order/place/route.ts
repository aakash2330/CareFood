import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const res = await request.json();
  console.log({ res });
  const user = await prisma.user.findUnique({
    where: { kindeId: res.kindeId },
  });
  if (user) {
    const updatedCartItems = res.cartItems.map((item: any) => {
      return { ...item, userId: user.id };
    });
    const updatedItems = await prisma.orderItem.createMany({
      data: updatedCartItems,
    });
    console.log({ updatedCartItems });
    return Response.json({ success: true });
  } else {
    return Response.json({ success: false });
  }
}
