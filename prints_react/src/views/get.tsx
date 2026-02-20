import { FiPlusCircle } from "react-icons/fi";

interface ProductCardProps {
  image: string;
  label: string;
  className?: string;
  tag?: string;
}

const ProductCard = ({ image, label, className = "", tag = "HOT" }: ProductCardProps) => (
  <div className={`relative group overflow-hidden flex flex-col items-center justify-center border-r border-b border-gray-100 bg-[#f5f5f5] w-full lg:w-1/3 h-[350px] cursor-pointer transition-all duration-500 ${className}`}>
    
    {/* --- BULLES MULTICOLORES AU SURVOL (Shadow-inner) --- */}
    <div className="bg-transparent group-hover:scale-[2] -top-12 -left-12 absolute shadow-[inset_0_0_25px_rgba(234,179,8,0.5)] rounded-full transition-all duration-1000 w-24 h-24 opacity-0 group-hover:opacity-100"></div>
    <div className="bg-transparent group-hover:scale-[2.5] top-44 left-14 absolute shadow-[inset_0_0_25px_rgba(220,38,38,0.4)] rounded-full transition-all duration-1000 w-24 h-24 opacity-0 group-hover:opacity-100"></div>
    <div className="bg-transparent group-hover:scale-[2] top-24 left-56 absolute shadow-[inset_0_0_25px_rgba(14,165,233,0.4)] rounded-full transition-all duration-1000 w-24 h-24 opacity-0 group-hover:opacity-100"></div>
    <div className="bg-transparent group-hover:scale-[1.8] top-12 left-12 absolute shadow-[inset_0_0_30px_rgba(34,197,94,0.4)] rounded-full transition-all duration-1000 w-44 h-44 opacity-0 group-hover:opacity-100"></div>
    <div className="bg-transparent group-hover:scale-[2] -top-24 -left-12 absolute shadow-[inset_0_0_40px_rgba(168,85,247,0.3)] rounded-full transition-all duration-1000 w-64 h-64 opacity-0 group-hover:opacity-100"></div>

    {/* ÉTIQUETTE ROUGE STYLÉE (Remplace l'ID) */}
    <div className="absolute top-6 left-0 z-30">
        <div className="bg-red-600 text-white text-[10px] font-black px-4 py-1 shadow-md transform -skew-x-12 translate-x-[-5px] group-hover:bg-black transition-colors duration-500">
            {tag}
        </div>
    </div>

    {/* Titre Produit */}
    <div className="absolute top-14 left-6 z-20">
      <h3 className="font-black italic text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-500 uppercase tracking-tighter">
        {label}
      </h3>
    </div>

    {/* Image Produit centrée */}
    <img 
      src={image} 
      className="max-w-full max-h-[60%] object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-110 z-10" 
      alt={label} 
    />

    {/* BOUTON "MORE INFO" */}
    <div className="absolute bottom-6 left-6 z-20">
      <button className="text-[0.75em] font-black text-gray-400 group-hover:text-black transition-all duration-500 flex items-center gap-2 tracking-widest">
        <span className="relative before:h-[2px] before:absolute before:w-full before:content-[''] before:bg-red-600 before:bottom-[-2px] before:left-0">
          EXPLORE MORE
        </span>
        <span className="text-red-600">→</span>
      </button>
    </div>
  </div>
);

export default function GetSection() {
  return (
    <section className="bg-[#f0e2e2] w-full py-20 flex flex-col items-center justify-center">

      {/* TITRE DE LA SECTION */}
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-black text-gray-900 tracking-tighter uppercase italic">Get your Products</h2>
        <div className="h-2 w-24 bg-red-600 mx-auto mt-3 shadow-lg"></div>
      </div>

      {/* GRILLE PRINCIPALE CENTRÉE AU DÉZOOM (Syntaxe corrigée) */}
      <div className="max-w-[1200px] w-full mx-auto flex flex-col border-l border-t border-gray-100">
        
        {/* LIGNE 1 */}
        <div className="flex flex-col lg:flex-row">
          <ProductCard image="/images/2-shirt.jfif" label="Premium T-shirt" tag="NEW" />
          <ProductCard image="/images/shoes_1.jfif" label="Sport Shoes" tag="HOT" />
          <ProductCard image="/images/2_caps.jfif" label="Classic Cap" tag="SALE" />
        </div>

        {/* LIGNE 2 */}
        <div className="flex flex-col lg:flex-row">
          {/* Case vide décalée */}
          <div className="hidden lg:block w-1/3 h-[350px] border-r border-b border-gray-100 bg-[#f5f5f5]"></div>

          <ProductCard image="/images/2025_mode_jean.jfif" label="Slim Fit Jean" tag="TREND" />

          {/* BLOC ACTION FINAL */}
          <div className="relative group w-full lg:w-1/3 h-[350px] flex flex-col items-center justify-center border-r border-b border-gray-100 bg-[#fafafa] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center transition-all duration-500">
              <FiPlusCircle 
                size={55} 
                className="text-gray-200 group-hover:text-white transition-colors duration-300 mb-4" 
              />
              <p className="font-black uppercase tracking-[0.2em] text-[12px] text-gray-800 group-hover:text-white">
                Get Your Own
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}