import { useState } from 'react';

import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  Menu, 
  X, 
  LogOut, 
  TrendingUp, 
  Clock,
  ChevronRight
} from "lucide-react";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Fonction pour changer le contenu principal dynamiquement
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardHome />;
      case "commandes": return <OrderList />;
      case "produits": return <ProductCatalog />;
      case "clients": return <CustomerList />;
      case "parametres": return <SettingsView />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      
      {/* --- SIDEBAR MOBILE OVERLAY --- */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#1A2634] text-white transform transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF2D55] rounded flex items-center justify-center font-bold text-xs italic">HDX</div>
            <span className="font-bold text-xl tracking-tight uppercase tracking-tighter">HDX <span className="text-[#FF2D55]">PRINTS</span></span>
          </div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X size={20}/></button>
        </div>
        
        <nav className="p-4 space-y-1 flex-1">
          <SidebarItem icon={<LayoutDashboard size={20}/>} label="Tableau de bord" id="dashboard" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarItem icon={<ShoppingCart size={20}/>} label="Commandes Clients" id="commandes" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarItem icon={<Package size={20}/>} label="Catalogue Produits" id="produits" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarItem icon={<Users size={20}/>} label="Clients" id="clients" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarItem icon={<Settings size={20}/>} label="Paramètres" id="parametres" activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button onClick={() => alert("Déconnexion...")} className="w-full flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all font-medium">
            <LogOut size={20} /> Déconnexion
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm h-16 flex items-center px-4 lg:px-8 justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-gray-800 capitalize">{activeTab.replace("-", " ")}</h2>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden sm:block text-right">
                <p className="text-xs text-gray-400 font-medium">Boutique Active</p>
                <p className="text-sm font-bold text-gray-700">HDX Admin</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-[#FF2D55] flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50/50">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

// --- SOUS-COMPOSANTS DE NAVIGATION ---
function SidebarItem({ icon, label, id, activeTab, setActiveTab }) {
  const active = activeTab === id;
  return (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all font-medium ${
        active ? "bg-[#FF2D55] text-white shadow-lg shadow-red-500/20" : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }`}
    >
      {icon} {label}
    </button>
  );
}

// --- VUES DU DASHBOARD ---

function DashboardHome() {
  const cards = [
    { label: "Ventes du mois", val: "4,250 €", icon: <TrendingUp/>, color: "text-green-600 bg-green-50" },
    { label: "Commandes", val: "128", icon: <ShoppingCart/>, color: "text-blue-600 bg-blue-50" },
    { label: "En attente", val: "12", icon: <Clock/>, color: "text-red-600 bg-red-50" },
  ];
  return (
    <div className="p-4 lg:p-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {cards.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
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
        <p className="text-gray-500 text-sm italic">Aucune vente suspecte aujourd'hui. Tout est sous contrôle !</p>
      </div>
    </div>
  );
}

function OrderList() {
  const orders = [
    { id: "#HDX-102", client: "Moussa Diop", total: "45,00 €", status: "Expédié" },
    { id: "#HDX-103", client: "Sarah Kone", total: "120,50 €", status: "En attente" },
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
                <td className="px-6 py-4"><ChevronRight size={18} className="text-gray-300"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductCatalog() {
  // Simuler des produits avec tes images dans public/images/
  const myProducts = [
    { id: 1, name: "Chaussures HDX", price: "15000 fcfa", img: "/images/shoes_1.jfif" },
    { id: 2, name: "air max", price: "1500 fcfa", img: "/images/shoes_2.jfif" },
    { id: 3, name: "nike", price: "1500 fcfa", img: "/images/air_max.jfif" },
    { id: 4, name: "air max", price: "2000 fcfa", img: "/images/shoes_black.jfif" },
  ];

  return (
    <div className="p-4 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Catalogue Articles</h3>
        <button className="bg-[#FF2D55] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-600 transition-all shadow-md">
          + Ajouter un produit
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {myProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
            <div className="h-48 overflow-hidden bg-gray-200">
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Introuvable"; }}
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-800 truncate">{product.name}</h4>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[#FF2D55] font-black text-lg">{product.price}</span>
                <button className="text-xs text-gray-400 hover:text-gray-600 font-medium">Modifier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomerList() {
  return <div className="p-8 text-center text-gray-500 italic">Liste des clients enregistrés sur HDX Prints.</div>;
}

function SettingsView() {
  return <div className="p-8 text-center text-gray-500 italic">Paramètres de la boutique (Modes de paiement, Livraison).</div>;
}