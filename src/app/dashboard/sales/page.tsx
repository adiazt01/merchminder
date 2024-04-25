import { BigSalesCard } from "@/components/card/BigSalesCard";
import { CardSalesThisMonth } from "@/components/card/CardSalesThisMonth";
import { CardSalesThisWeek } from "@/components/card/CardSalesThisWeek";
import { SkeletonCardSales } from "@/components/skeletons/cards/SkeletonCardSales";
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
import { Suspense } from "react";

export default async function SalesPage() {
  const sells = await getAllSales();

  return (
    <SalesProvider>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold md:text-2xl">Ventas</h1>
            <p className="text-sm text-gray-500">
              Aqui podras ver todas las ventas realizada
            </p>
          </div>
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
              <Suspense fallback={<SkeletonCardSales />}>
                <CardSalesThisWeek />
              </Suspense>
              <Suspense fallback={<SkeletonCardSales />}>
                <CardSalesThisMonth />
              </Suspense>
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
