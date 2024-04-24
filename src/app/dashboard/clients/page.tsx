import { ClientDataTable } from "@/components/table/client/ClientTable";
import { columns } from "@/components/table/client/ClientTableColumns";
import { Button } from "@/components/ui/button";
import { getAllClients } from "@/lib/ClientsData";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ClientsPage() {
  const clients = await getAllClients();
  console.log(clients);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Clients</h1>
        <Button size="sm" asChild>
          <Link href="/dashboard/clients/create">
            <Plus className="w-6 h-6 md:mr-2" />
            <span className="hidden md:inline">Create Client</span>
          </Link>
        </Button>
      </div>
      <section className="w-full">
        <ClientDataTable columns={columns} data={clients} />
      </section>
    </main>
  );
}
