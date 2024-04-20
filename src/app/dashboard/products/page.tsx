import { ProductDataTable } from "@/components/table/product/ProductTable";
import { columns } from "@/components/table/product/ProductTableColumns";
import { getAllProducts } from "@/lib/ProductsData";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full p-4 rounded-lg border border-dashed shadow-sm">
        <ProductDataTable columns={columns} data={products} />
      </section>
    </main>
  );
}