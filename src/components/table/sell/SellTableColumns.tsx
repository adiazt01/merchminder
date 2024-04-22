"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, ArrowUp } from "lucide-react";

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
        <Button variant="ghost" className="h-8 w-8 mx-auto p-0">
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
    accessorKey: "saleTotal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          {
            <ArrowUp
              className={`ml-2 h-4 w-4 ${
                column.getIsSorted() === "asc" ? "rotate-180" : ""
              }`}
            />
          }
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
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          {
            <ArrowUp
              className={`ml-2 h-4 w-4 ${
                column.getIsSorted() === "asc" ? "rotate-180" : ""
              }`}
            />
          }
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      const formattedDate = new Intl.DateTimeFormat("es-ES", {
        dateStyle: "medium",
      }).format(date);

      return <div className="text-center">{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    header: () => <h3 className="w-full text-center">Actions</h3>,
    cell: ({ row }) => (
      <div className="flex flex-row items-center justify-center">
        <ActionCell row={row} />
      </div>
    ),
  },
];
