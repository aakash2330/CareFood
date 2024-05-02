import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      id: "12345",
      email: "aakash2330@gmail.com",
      kindeId: "12345",
      lastName: "singh",
      firstName: "aakash"
    }
  })
  console.log({ user1 })
}
main().then(async () => {
  console.log("seed completed")
  await prisma.$disconnect();
})
