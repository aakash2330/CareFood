import { prisma } from "@/lib/db";

export async function GET() {
  const RegisteredNgo = await prisma.ngo.findMany();
  console.log({ RegisteredNgo });
  if (RegisteredNgo) {
    return Response.json({ data: RegisteredNgo });
  } else {
    return Response.json({ data: null });
  }
}
