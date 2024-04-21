import { ProductDataTable } from "@/components/table/product/ProductTable";
import { columns } from "@/components/table/product/ProductTableColumns";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/lib/ProductsData";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
        <Button size="sm" asChild>
          <Link href="/dashboard/products/create"> 
            <Plus className="w-6 h-6 md:mr-2" />
            <span className="hidden md:inline">Create Product</span>
          </Link>
        </Button>
      </div>
      <section className="flex w-full h-full">
        <ProductDataTable columns={columns} data={products} />
      </section>
    </main>
  );
}
