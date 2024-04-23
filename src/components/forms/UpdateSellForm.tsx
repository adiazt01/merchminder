"use client";

import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
  Form,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { updateProductSchema } from "@/schemas/productSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProduct } from "@/actions/productsActions";
import { z } from "zod";

export function UpdateSellForm({
  dataUpdateProduct,
}: {
  dataUpdateProduct: Product;
}) {
  const form = useForm<z.infer<typeof updateProductSchema>>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      description: dataUpdateProduct.description || "",
      name: dataUpdateProduct.name,
      price: dataUpdateProduct.price.toString(),
    },
  });

  async function onSubmit(values: z.infer<typeof updateProductSchema>) {
    const formValues = new FormData();
    formValues.append("name", values.name);
    if (values.description) {
      formValues.append("description", values.description);
    }
    formValues.append("price", values.price);

    const res = await updateProduct(dataUpdateProduct.id, formValues);
    console.log(res);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CardContent>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Pan de Guayaba, Coca-cola, zapato..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>Nombre de su producto.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Input placeholder="Descripción del producto" {...field} />
                </FormControl>
                <FormDescription>Describa su producto.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="0.00" {...field} />
                </FormControl>
                <FormDescription>El precio de su producto.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter>
          <Button type="submit">
            Actualizar producto
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
}
