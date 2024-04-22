import prisma from "./db";
import { getUserId } from "./user";

export const getAllSales = async () => {
  const userId = await getUserId();

  try {
    const sales = await prisma.sale.findMany({
      where: {
        userId,
      },
      include: {
        client: true,
        saleItems: {
          include: {
            sale: true,
            product: true,
          },
        },
      },
    });

    return sales;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};