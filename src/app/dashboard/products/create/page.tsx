import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function CreateProductPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="flex flex-row text-lg font-semibold gap-2 md:text-2xl">
          <Button
            className="flex mt-0.5 items-center justify-center flex-col rounded-md text-sm font-medium ring-offset-background transition-colors border border-input bg-background text-primary hover:bg-accent h-7 w-7"
            size="icon"
            asChild
          >
            <Link href="/dashboard/products">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          Crear un nuevo producto
        </h1>
      </div>
      <section className="flex w-full h-full">
        <Card className="flex flex-col w-full p-4 gap-4">
          <CardHeader>
            <CardTitle>Información del producto</CardTitle>
            <CardDescription>
              Complete los campos para crear un nuevo producto
            </CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </main>
  );
}
