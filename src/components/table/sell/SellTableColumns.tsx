"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sale } from "@prisma/client";
import { useContext } from "react";
import { SalesContext } from "@/context/SalesContext";

const ActionCell = ({ row }) => {
  const sell = row.original;
  const { setSelectedSale } = useContext(SalesContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            setSelectedSale(sell);
            console.log(sell);
          }}
        >
          Ver venta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Sale>[] = [
  {
    id: "actions",
    cell: ActionCell,
  },
  {
    accessorKey: "saleTotal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = row.original.saleTotal;
      const formattedPrice = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-center font-medium">{formattedPrice}</div>;
    },
  },
  {
    header: "Productos",
    accessorKey: "products",
    cell: ({ row }) => {
      const products = row.original.saleItems;
      console.log(products);
      return (
        <div className="flex flex-col">
          {products && products.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <span>{product.product.name}</span>
            </div>
          ))}
        </div>
      );
    },
  },
];
