"use server";

import prisma from "@/lib/db";
import { getUserId } from "@/lib/user";
import { createProductSchema } from "@/schemas/productSchemas";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface FormState {
  message?: string;
  data?: Product | null;
  error?: Error | null;
}

export async function createProduct(data: FormData): Promise<FormState> {
  const userId = await getUserId();
  const formData = Object.fromEntries(data);
  const parsed = createProductSchema.safeParse(formData);

  if (!parsed.success) {
    throw new Error("Invalid product data");
  }

  try {
    const newProduct = await prisma.product.create({
      data: {
        name: parsed.data.name,
        userId: userId,
        price: parseFloat(parsed.data.price),
        description: parsed.data.description,
      },
    });

    
    revalidatePath("/dashboard/products");
    
    return {
      message: "Product created successfully",
      data: newProduct,
      error: null,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: "Failed to create product",
        data: null,
        error: error,
      };
    }

    return {
      message: "Failed to create product",
      data: null,
      error: null,
    };
  }
}
