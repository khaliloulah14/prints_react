// src/pages/Panier.tsx
import { useNavigate } from "react-router-dom";
import { usePanier } from "../hooks/usePanier";
import { useState } from "react";
import { ArrowLeft, Trash2, ShoppingBag, Lock, ChevronRight } from "lucide-react";

export default function Panier() {
  const { panier, supprimerDuPanier } = usePanier();
  const navigate = useNavigate();
  const [removingId, setRemovingId] = useState<number | null>(null);

  const total = panier.reduce((sum, p) => sum + p.price, 0);
  const itemCount = panier.length;

  const handleSupprimer = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      supprimerDuPanier(id);
      setRemovingId(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-stone-100 p-6 md:p-10 font-sans">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-2"
            >
              <ArrowLeft size={14} />
              Continuer mes achats
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Mon Panier</h1>
          </div>
          {itemCount > 0 && (
            <span className="bg-stone-200 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
              {itemCount} article{itemCount > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {panier.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-100">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={48} className="text-gray-300" />
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-2">Panier vide</p>
            <p className="text-gray-400 text-sm mb-8">Vous n'avez pas encore ajouté d'articles.</p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 rounded-xl font-medium text-sm border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Découvrir nos produits
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">

            {panier.map((p) => (
              <div
                key={p.id}
                className={`bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-gray-100 transition-all duration-300 ${
                  removingId === p.id ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                }`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden  bg-gray-50">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">{p.category}</p>
                  <p className="text-base font-bold text-gray-900 mt-2">
                    {p.price.toLocaleString("fr-FR")}
                    <span className="text-xs font-normal text-gray-400 ml-1">CFA</span>
                  </p>
                </div>

                <button
                  onClick={() => handleSupprimer(p.id)}
                  aria-label="Supprimer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 text-gray-400 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-2">
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Sous-total</span>
                  <span className="text-gray-700">{total.toLocaleString("fr-FR")} CFA</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Livraison</span>
                  <span className="text-green-600 font-medium">Gratuite</span>
                </div>
                <div className="border-t border-dashed border-gray-100 pt-3 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-gray-900">
                    {total.toLocaleString("fr-FR")}
                    <span className="text-xs font-normal text-gray-400 ml-1">CFA</span>
                  </span>
                </div>
              </div>

              <button className="w-full bg-gray-900 hover:bg-gray-700 transition-colors text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                Passer la commande
                <ChevronRight size={16} />
              </button>

              <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                <Lock size={11} />
                Paiement 100% sécurisé
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}