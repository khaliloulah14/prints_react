import { FiPlusCircle } from "react-icons/fi";

interface ProductCardProps {
  image: string;
  label: string;
  className?: string;
  tag?: string;
}

const ProductCard = ({ image, label, className = "", tag = "HOT" }: ProductCardProps) => (
  <div className={`relative group overflow-hidden flex flex-col items-center justify-center border-r border-b border-gray-100 bg-[#f5f5f5] w-full lg:w-1/3 min-h-87.5 cursor-pointer transition-all duration-500 ${className}`}>
    
    {/* --- BULLES MULTICOLORES (Pointer-events-none pour ne pas bloquer le clic) --- */}
    <div className="pointer-events-none bg-transparent group-hover:scale-[2] -top-12 -left-12 absolute shadow-[inset_0_0_25px_rgba(234,179,8,0.5)] rounded-full transition-all duration-1000 w-24 h-24 opacity-0 group-hover:opacity-100"></div>
    <div className="pointer-events-none bg-transparent group-hover:scale-[2.5] top-44 left-14 absolute shadow-[inset_0_0_25px_rgba(220,38,38,0.4)] rounded-full transition-all duration-1000 w-24 h-24 opacity-0 group-hover:opacity-100"></div>
    <div className="pointer-events-none bg-transparent group-hover:scale-[2] top-24 left-56 absolute shadow-[inset_0_0_25px_rgba(14,165,233,0.4)] rounded-full transition-all duration-1000 w-24 h-24 opacity-0 group-hover:opacity-100"></div>

    {/* ÉTIQUETTE ROUGE */}
    <div className="absolute top-6 left-0 z-30">
        <div className="bg-red-600 text-white text-[10px] font-black px-4 py-1 shadow-md transform -skew-x-12 -translate-x-1 group-hover:bg-black transition-colors duration-500">
            {tag}
        </div>
    </div>

    {/* Titre Produit */}
    <div className="absolute top-14 left-6 z-20">
      <h3 className="font-black italic text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-500 uppercase tracking-tighter">
        {label}
      </h3>
    </div>

    {/* Image Produit */}
    <img 
      src={image} 
      className="max-w-[80%] max-h-[50%] object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-110 z-10" 
      alt={label} 
    />

    {/* BOUTON "MORE INFO" */}
    <div className="absolute bottom-6 left-6 z-20">
      <div className="text-[10px] font-black text-gray-400 group-hover:text-black transition-all duration-500 flex items-center gap-2 tracking-widest">
        <span className="relative border-b-2 border-red-600 pb-0.5">
          EXPLORE MORE
        </span>
        <span className="text-red-600">→</span>
      </div>
    </div>
  </div>
);

export default function GetSection() {
  return (
    <section className="bg-white w-full py-20 flex flex-col items-center">

      {/* TITRE DE LA SECTION */}
      <div className="mb-14 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic">Get your Products</h2>
        <div className="h-1.5 w-20 bg-red-600 mx-auto mt-3"></div>
      </div>

      {/* GRILLE PRINCIPALE : Centrage critique ici */}
      <div className="max-w-300 w-full mx-auto px-4">
        <div className="flex flex-col border-l border-t border-gray-100 shadow-sm">
          
          {/* LIGNE 1 */}
          <div className="flex flex-col lg:flex-row">
            <ProductCard image="/images/lacoste_8.jfif" label="Premium Lacoste" tag="NEW" />
            <ProductCard image="/images/shoes_1.jfif" label="Sport Shoes" tag="HOT" />
            <ProductCard image="/images/2_caps.jfif" label="Classic Cap" tag="SALE" />
          </div>

          {/* LIGNE 2 */}
          <div className="flex flex-col lg:flex-row">
            {/* Case vide décorative */}
            <div className="hidden lg:block w-1/3 min-h-87.5 border-r border-b border-gray-100 bg-[#fbfbfb]"></div>

            <ProductCard image="/images/pants_2.jfif" label="Slim Fit Jean" tag="TREND" />

            {/* BLOC ACTION FINAL */}
            <div className="relative group w-full lg:w-1/3 min-h-87.5 flex flex-col items-center justify-center border-r border-b border-gray-100 bg-white overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                <FiPlusCircle 
                  size={50} 
                  className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-3" 
                />
                <p className="font-black uppercase tracking-[0.2em] text-[10px] text-gray-800 group-hover:text-white text-center px-4">
                  Get Your Own
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}