import { SellDataTable } from "@/components/table/sell/SellTable";
import { columns } from "@/components/table/sell/SellTableColumns";
import { Button } from "@/components/ui/button";
import { getAllSales } from "@/lib/SellData";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function SalesPage() {
  const sells = await getAllSales();
  
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Ventas</h1>
        <Button size="sm" asChild>
          <Link href="/dashboard/sales/create">
            <Plus className="w-6 h-6 md:mr-2" />
            <span className="hidden md:inline">Registrar venta</span>
          </Link>
        </Button>
      </div>
      <section className="flex w-full h-full">
        <SellDataTable columns={columns} data={sells} />
      </section>
    </main>
  );
}
