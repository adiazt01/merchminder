"use server";

import prisma from "@/lib/db";
import { getUserId } from "@/lib/user";
import { CreateSaleSchema } from "@/schemas/sellSchema";
import { Product, Sale } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface FormState {
  message?: string;
  data?: Sale | null;
  error?: Error | null;
}

export async function createSell(data): Promise<FormState> {
  const userId = await getUserId();
  const formData = Object.fromEntries(data);

  const { clientId, products } = CreateSaleSchema.parse({
    clientId: parseInt(formData.clientId),
    products: JSON.parse(formData.products),
  });

  for (const product of products) {
    if (!product.productId || !product.quantity) {
      return { message: "All products must have a quantity" };
    }
  }

  const productIds = products.map((product) => product.productId);

  const searchProducts = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  if (searchProducts.length !== productIds.length) {
    return { message: "Some products were not found" };
  }

  const saleItems = products.map((product) => {
    const correspondingProduct = searchProducts.find(
      (p) => p.id === product.productId
    );

    return {
      productId: product.productId,
      quantity: product.quantity,
      salePrice: correspondingProduct ? correspondingProduct.price : 0,
    };
  });

  try {
    const newSale = await prisma.sale.create({
      data: {
        userId: userId,
        clientId: clientId,
        saleItems: {
          create: saleItems.map(item => ({
            salePrice: item.salePrice,
            quantity: item.quantity,
            productId: item.productId,
          })),
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
  
}
