import Link from "next/link";
function ClientsPage() {
  const clients = [
    { id: "smit", name: "Smit Thakkar" },
    { id: "hemil", name: "Hemil Rajpura" },
    { id: "sagar", name: "Sagar Chhatbar" },
  ];
  return (
    <div>
      <h1> The Clients Page </h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              // href={`/clients/${client.id}`}
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              <div>{client.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
