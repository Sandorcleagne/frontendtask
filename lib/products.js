import { hostName } from "@/utils/static";

export const productInfo = async () => {
  const res = await fetch(`${hostName}getallproducts`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
