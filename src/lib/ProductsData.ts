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

export function getProduct(id: string) {
  try {
    return prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    throw new Error("Error fetching product");
  }
}
