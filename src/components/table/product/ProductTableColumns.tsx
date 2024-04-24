"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, Edit, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropwdownProductTable } from "@/components/dropdown/DropdownProductTable";

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
    accessorKey: "price",
    size: 1,
    header: ({ column }) => {
      /* TODO change the icon to a sort icon */
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Precio
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price") as string);
      const formattedPrice = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-center font-medium">{formattedPrice}</div>;
    },
  },
  {
    header: "Ventas",
    accessorKey: "salesCount",
  },

  {
    header: "Acciones",
    cell: ({ row }) => {
      /* FIXME add types to product */
      const product = row.original;
      return (
        <div className="flex flex-row items-center justify-center">
          <DropwdownProductTable product={product} />
        </div>
      );
    },
  },
];
