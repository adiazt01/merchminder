"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Precio</div>,
    cell: ({row}) => {
      const price = parseFloat(row.getValue("price") as string);
      const formattedPrice = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-right font-medium">{formattedPrice}</div>;
      }
  },
];
