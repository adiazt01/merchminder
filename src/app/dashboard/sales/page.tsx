import { BigSalesCard } from "@/components/card/BigSalesCard";
import { SellDataTable } from "@/components/table/sell/SellTable";
import { columns } from "@/components/table/sell/SellTableColumns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SalesProvider } from "@/context/SalesContext";
import {
  getAllSales,
  getSalesThisMonth,
  getSalesThisWeek,
} from "@/lib/SellData";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function SalesPage() {
  const sells = await getAllSales();
  const salesThisWeek = await getSalesThisWeek();
  const salesThisMonth = await getSalesThisMonth();

  return (
    <SalesProvider>
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
        <section className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardDescription className="-mb-1">
                    Esta semana
                  </CardDescription>
                  <CardTitle className="text-4xl">${salesThisWeek}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription className="-mb-1">Este mes</CardDescription>
                  <CardTitle className="text-4xl">${salesThisMonth}</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <div className="w-full">
              <SellDataTable columns={columns} data={sells} />
            </div>
          </div>
          <div>
            <BigSalesCard />
          </div>
        </section>
      </main>
    </SalesProvider>
  );
}
