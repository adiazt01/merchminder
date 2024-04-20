import prisma from "./db";
import { getUserId } from "./user";

export const getAllProducts = async () => {
  const userId = await getUserId();

  try {
    const products = await prisma.product.findMany({
      where: {
        userId,
      },
    });
    return products;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
