import { Home, Package, CreditCard } from "lucide-react";

export const MENU_DASHBOARD = [
    {
        name: "Dashboard", 
        icon: Home,
        href: "/dashboard",
    },
    {
        name: "Productos",
        icon: Package,
        href: "/dashboard/products",
    },
    {
        name: "Ventas",
        icon: CreditCard,
        href: "/dashboard/sales",
    }
]