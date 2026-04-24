// src/pages/Panier.tsx
import { useNavigate } from "react-router-dom";
import { usePanier } from "../hooks/usePanier";
import { useState } from "react";
import { ArrowLeft, Trash2, ShoppingBag, Lock } from "lucide-react";

export default function Panier() {
  const { panier, supprimerDuPanier } = usePanier();
  const navigate = useNavigate();
  const [removingId, setRemovingId] = useState<number | null>(null);

  const total = panier.reduce((sum, p) => sum + (Number(p.price) || 0), 0);
  const itemCount = panier.length;

  const handleSupprimer = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      supprimerDuPanier(id);
      setRemovingId(null);
    }, 300);
  };

  // 🔴 Remplace par TON numéro WhatsApp (sans le +)
  const WHATSAPP_PHONE = "221710111993"; // Exemple: 221710111993
  
  const handleWhatsAppOrder = () => {
    if (panier.length === 0) return;
    
    const itemsList = panier
      .map(p => `• ${p.name} - ${p.price.toLocaleString("fr-FR")} CFA`)
      .join("%0A");
    
    const totalAmount = total.toLocaleString("fr-FR");
    
    const message = `Bonjour ! Je souhaite passer commande :%0A%0A${itemsList}%0A%0A📦 TOTAL : ${totalAmount} CFA%0A%0A📝 Référence commande : #${Date.now()}%0A%0AMerci de me confirmer la disponibilité et les modalités de livraison.`;
    
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
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
            <p className="text-gray-400 text-sm mb-8">
              Vous n'avez pas encore ajouté d'articles.
            </p>
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
                  removingId === p.id
                    ? "opacity-0 translate-x-4"
                    : "opacity-100 translate-x-0"
                }`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">
                    {p.category}
                  </p>
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
                  <span className="text-gray-700">
                    {total.toLocaleString("fr-FR")} CFA
                  </span>
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

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-semibold hover:bg-[#1ebe5d] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.532 5.854L.057 23.571a.75.75 0 0 0 .937.937l5.717-1.475A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.528-5.231-1.446l-.374-.224-3.893 1.004 1.031-3.768-.245-.388A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Commander sur WhatsApp
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