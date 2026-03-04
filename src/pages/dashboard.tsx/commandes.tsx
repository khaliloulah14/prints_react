import { ChevronRight } from "lucide-react";

function OrderList() {
  const orders = [
    {
      id: "#HDX-102",
      client: "Moussa Diop",
      total: "45,00 €",
      status: "Expédié",
    },
    {
      id: "#HDX-103",
      client: "Sarah Kone",
      total: "120,50 €",
      status: "En attente",
    },
    {
      id: "#HDX-104",
      client: "Amadou Ba",
      total: "75,20 €",
      status: "Expédié",
    }
  ];
  return (
    <div className="p-4 lg:p-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Commande</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((o, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-gray-800">{o.id}</td>
                <td className="px-6 py-4 text-gray-600">{o.client}</td>
                <td className="px-6 py-4 font-medium">{o.total}</td>
                <td className="px-6 py-4">
                  <ChevronRight size={18} className="text-gray-300" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrderList;