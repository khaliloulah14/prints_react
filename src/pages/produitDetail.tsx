import { useParams, useNavigate } from "react-router-dom";
import { usePanier } from "../hooks/usePanier";
import { toast } from "sonner";
import { products } from "../lib/data";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { panier, ajouterAuPanier } = usePanier(); // ✅ ajout de panier

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1>Produit introuvable</h1>;
  }

  const handleAjouter = () => {
    toast.success(`"${product.name}" ajouté au panier !`);
    ajouterAuPanier(product);
  };

  // ✅ Nouvelle fonction WhatsApp
  const handleWhatsApp = () => {
    const panierArray = Array.isArray(panier) ? panier : [];
    const numero = "221710111993"; // ✅ remplacez par votre numéro

    let texte = "";

    if (panierArray.length === 0) {
      // Commander juste ce produit
      texte = `Bonjour ! Je voudrais commander :\n\n• ${product.name} — ${product.price} CFA`;
    } else {
      // Commander tout le panier
      const message = panierArray.map((p) => `• ${p.name} — ${p.price} CFA`).join("\n");
      const total = panierArray.reduce((sum, p) => sum + p.price, 0);
      texte = `Bonjour ! Je voudrais commander :\n\n${message}\n\nTotal : ${total} CFA`;
    }

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texte)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl bg-white">

        {/* Colonne image */}
        <div className="relative group lg:w-1/2 w-full flex items-center justify-center bg-[#f5f5f5] overflow-hidden cursor-pointer">
          <div className="absolute top-5 left-0 z-30">
            <div className="bg-red-600 text-white text-[10px] font-black px-4 py-1 shadow-md transform -skew-x-12 -translate-x-1 group-hover:bg-black transition-colors duration-500">
              {product.category}
            </div>
          </div>
          <img
            src={product.image}
            className="max-w-[60%] max-h-[70%] object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-110 z-10"
            alt={product.name}
          />
        </div>

        {/* Colonne info */}
        <div className="lg:w-1/2 w-full flex flex-col justify-between p-8 lg:p-12">
          <div className="flex flex-col gap-5">

            <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              euismod, nisi vel consectetur interdum, nisl nisi aliquam nisl.
            </p>

            <hr className="border-gray-100" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                En stock
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {product.price}{" "}
                <span className="text-sm font-normal text-gray-400">CFA</span>
              </p>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex flex-col gap-3 mt-10">
            <button
              onClick={handleAjouter}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200"
            >
              Ajouter au panier
            </button>

            {/* ✅ onClick changé de handleSupprimer vers handleWhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-semibold hover:bg-[#1ebe5d] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.532 5.854L.057 23.571a.75.75 0 0 0 .937.937l5.717-1.475A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.528-5.231-1.446l-.374-.224-3.893 1.004 1.031-3.768-.245-.388A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Commander sur WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}