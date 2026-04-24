import { Eye, Trash2,} from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderList() {
  const navigate = useNavigate();

  const orders = [
    { id: "#HDX-102", client: "Moussa Diop", total: "4500 FCFA", status: "Expédié" },
    { id: "#HDX-103", client: "Sarah Kone", total: "5000 FCFA", status: "En attente" },
    { id: "#HDX-104", client: "Amadou Ba", total: "7520 FCFA", status: "Expédié" }
  ];

  const handleDelete = () => {
    console.log("Supprimer :", orders);
  };

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

                <td className="px-6 py-4 flex gap-3 items-center">
                  <button
                    onClick={() => navigate(`/orders/${o.id}`)}
                    className="text-gray-400 hover:text-black transition"
                  >
                    <Eye size={18} />
                  </button>

                  {/* Supprimer */}
                  <button
                    onClick={() => handleDelete()}
                    className="text-red-400 hover:text-red-600 transition"
                    
                  >
                    <Trash2 size={18} />
                  </button>

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