import { ClientsTable } from "@/components/clients-table"

export default function ClientsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Clients</h1>
      <ClientsTable />
    </div>
  )
}