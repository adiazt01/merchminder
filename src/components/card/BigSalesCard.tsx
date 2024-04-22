"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SalesContext } from "@/context/SalesContext";
import { useContext } from "react";

export function BigSalesCard() {
  const { selectedSale } = useContext(SalesContext);

  if (!selectedSale) {
    return (
      <Card className="w-full order-first md:order-last">
        <CardHeader>
          <CardTitle className="text-xl">No hay venta seleccionada</CardTitle>
          <CardDescription>
            Selecciona una venta para ver detalles
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    );
  }

  const { saleTotal, clientId, createdAt, id, updatedAt, userId } =
    selectedSale;

  return (
    <Card className="w-full order-first md:order-last">
      <CardHeader>
        <CardTitle className="text-xl">
          Venta # {id}
          <CardDescription className="flex flex-col">
            <time>
              Fecha: {new Date(createdAt).toLocaleDateString("es-VE")}
            </time>
            <time>Hora: {new Date(createdAt).toLocaleTimeString("es-VE")}</time>
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
