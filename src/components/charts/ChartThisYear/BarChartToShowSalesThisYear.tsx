"use client";

import { useIsServerSide } from "@/hooks/useIsServerSide";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface BarChartSalesProps {
  data: {
    month: number;
    sales: any;
  }[];
}
export function BarChartSales({ data }: BarChartSalesProps) {
  const isServerSide = useIsServerSide();
  if (isServerSide) return null;

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const transformedData = data.map((item) => ({
    ...item,
    month: monthNames[item.month - 1],
  }));

  console.log(transformedData);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={transformedData}>
        <Bar dataKey="sales" className="fill-primary" />
        <Tooltip
          formatter={(value, name) => [
            `${value.toLocaleString("es-ES", {
              style: "currency",
              currency: "USD",
            })}`,
            "Ventas",
          ]}
        />
        <XAxis height={40} axisLine={false} tickLine={false} dataKey="month" />
        <YAxis
          tickFormatter={(value) => `$${value}`}
          axisLine={false}
          tickLine={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
