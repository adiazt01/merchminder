import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/lib/ProductsData";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Products
        </h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        {
          products.length === 0 ? (
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          ) : (
            <div>
              {products.map((product) => (
                <div key={product.id}>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </main>
  );
}
