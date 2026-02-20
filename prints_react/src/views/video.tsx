import { FaRegCirclePlay } from "react-icons/fa6";

export default function VideoSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 w-full bg-[#f0e2e2]">
      
      {/* Titre H1 stylisé */}
      <h1 className="text-3xl md:text-4xl font-black text-gray-800 uppercase tracking-tight mb-8">
        watch video intro
      </h1>

      {/* Conteneur de la vidéo */}
      <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl border-4 border-white mx-6">
        
        {/* L'image (Thumbnail) */}
        <img 
          src="/images/imgi_nice.jpg" 
          alt="Nice design preview" 
          className="w-full max-w-[900px] aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay avec l'icône Play centrée */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-[#f6335d] transition-colors duration-300">
            <FaRegCirclePlay className="text-white text-6xl md:text-7xl drop-shadow-2xl transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

      </div>
    </div>
  );
}