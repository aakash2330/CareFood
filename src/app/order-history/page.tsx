export const dynamic = "force-dynamic";
import axios from "axios";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import OrderHistory from "../components/order/history/OrderHistoryPage";
import { OrderItem } from "@prisma/client";
import { TUserWithOrders } from "@/lib/db";

export default async function Page() {
  const user = await getKindeServerSession().getUser();
  const { data } = await axios.post("http://localhost:3000/api/order/history", {
    kindeId: user?.id,
  });
  return (
    <div className="flex flex-col justify-center items-center pt-40 mb-40">
      <OrderHistory userWithOrderItems={data.data}></OrderHistory>
    </div>
  );
}
