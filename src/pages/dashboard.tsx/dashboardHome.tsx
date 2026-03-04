import { TrendingUp, ShoppingCart, Clock } from "lucide-react";

function DashboardHome() {
  const cards = [
    {
      label: "Ventes du mois",
      val: "4,250 €",
      icon: <TrendingUp />,
      color: "text-green-600 bg-green-50",
    },
    {
      label: "Commandes",
      val: "128",
      icon: <ShoppingCart />,
      color: "text-blue-600 bg-blue-50",
    },
    {
      label: "En attente",
      val: "12",
      icon: <Clock />,
      color: "text-red-600 bg-red-50",
    },
  ];
  return (
    <div className="p-4 lg:p-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500 font-medium">{c.label}</p>
              <h3 className="text-2xl font-bold mt-1">{c.val}</h3>
            </div>
            <div className={`p-3 rounded-xl ${c.color}`}>{c.icon}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold mb-4">Activité récente</h3>
        <p className="text-gray-500 text-sm italic">
          Aucune vente suspecte aujourd'hui. Tout est sous contrôle !
        </p>
      </div>
    </div>
  );
}
export default DashboardHome;