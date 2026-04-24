import { useState } from "react";
import { toast } from "sonner";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const getUser = localStorage.getItem("user");
  const user = getUser ? JSON.parse(getUser) : null;

  const dataSideBar = [
    {
      label: "Tableau de bord",
      icon: <LayoutDashboard size={20} />,
      link: "/dashboard",
      end: true, // Marque ce lien comme actif uniquement pour /dashboard
    },
    {
      label: "Commandes Clients",
      icon: <ShoppingCart size={20} />,
      link: "/dashboard/commandes",
    },
    {
      label: "Catalogue Produits",
      icon: <Package size={20} />,
      link: "/dashboard/produits",
    },
    {
      label: "Clients",
      icon: <Users size={20} />,
      link: "/dashboard/clients",
    },
    {
      label: "Paramètres",
      icon: <Settings size={20} />,
      link: "/dashboard/parametres",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      {/* --- SIDEBAR MOBILE OVERLAY --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* --- SIDEBAR --- */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#1A2634] text-white transform transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl tracking-tight uppercase">
              <img src="images/imgi_1_site-logo-free-img-1.png" alt="logo" />
            </span>
          </div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1 flex-1">
          {dataSideBar.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              link={item.link}
              end={item.end}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={() => toast.info("Déconnexion...")} 
            className="w-full flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all font-medium"
          >
            <LogOut size={20} /> Déconnexion
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm h-16 flex items-center px-4 lg:px-8 justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-gray-800 capitalize">
              teste
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
             
              <p className="text-sm font-bold text-gray-700">{user?.username}</p>
              <p className="text-xs text-gray-400 font-mediu">{user?.email}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FF2D55] flex items-center justify-center text-white font-bold">
              ID
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50/50">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

// --- SOUS-COMPOSANTS DE NAVIGATION ---
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  end?: boolean;
}

function SidebarItem({ icon, label, link, end = false }: SidebarItemProps) {
  return (
    <NavLink
      to={link}
      end={end}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 p-3 rounded-xl transition-all font-medium ${
          isActive
            ? "bg-[#FF2D55] text-white shadow-lg shadow-red-500/20"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`
      }
    >
      {icon} {label}
    </NavLink>
  );
}
