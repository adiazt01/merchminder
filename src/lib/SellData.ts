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

export const getSalesThisWeek = async () => {
  const userId = await getUserId();

  try {
    const sales = await prisma.sale.findMany({
      where: {
        userId,
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      },
      include: {
        saleItems: true,
      },
    });

    let totalSales = 0;

    for (const sale of sales) {
      totalSales += sale.saleTotal;
    }

    return totalSales;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const getSalesThisMonth = async () => {
  const userId = await getUserId();

  try {
    const sales = await prisma.sale.findMany({
      where: {
        userId,
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
      include: {
        saleItems: true,
      },
    });

    let totalSales = 0;

    for (const sale of sales) {
      totalSales += sale.saleTotal;
    }

    return totalSales;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
