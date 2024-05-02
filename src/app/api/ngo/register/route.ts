import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const res = await request.json();
  console.log({ res });
  const RegisteredNgo = await prisma.ngo.create({ data: { ...res } });
  if (RegisteredNgo) {
    return Response.json({ data: RegisteredNgo });
  } else {
    return Response.json({ data: null });
  }
}
