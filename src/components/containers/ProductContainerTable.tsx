import { getAllProducts } from "@/lib/ProductsData";
import { ProductDataTable } from "../table/product/ProductTable";
import { columns } from "../table/product/ProductTableColumns";

export async function ProductContainerTable() {
  const products = await getAllProducts();

  return <ProductDataTable columns={columns} data={products} />;
}
