import CartPage from "@/components/CartPage";
import API from "@/lib/API";
import { apiRoutes } from "@/lib/apiRoutes";
import { options } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(options);

  const { data } = await API.get(apiRoutes.getCart, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  });
  console.log(data);

  return <CartPage data={data} />;
};

export default page;
