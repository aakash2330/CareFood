import { Prisma, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const UserWithOrders = Prisma.validator<Prisma.UserFindFirstArgs>()({
  include: { OrderItems: true },
});
export type TUserWithOrders = Prisma.UserGetPayload<typeof UserWithOrders>;

