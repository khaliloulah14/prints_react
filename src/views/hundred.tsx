import TitleSection from "../components/title";
import Button from "../components/button";
import Card from "../components/card";


export default function HundredSection() {
  return (
    <section className="w-full bg-white flex justify-center overflow-hidden">
      {/* Correction : max-w-300 (suppression du slash) et mx-auto pour le centrage */}
      <div className="max-w-300 w-full mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Bloc gauche : Texte & bouton */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <TitleSection
            title="Hundreds Of Ready Designs To Choose From"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <div className="mt-8">
            <Button 
              label="Get Started" 
              className="bg-white text-black px-10 py-4 rounded-full font-bold"
            />
          </div>
        </div>

        {/* Bloc droit : Carte */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <div className="relative group transition-all duration-500 ease-out">
            
            <div className="absolute inset-0 bg-[#f6335d]/5 rounded-3xl blur-2xl group-hover:bg-[#f6335d]/15 transition-all duration-500 scale-90 group-hover:scale-110"></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-md transition-all duration-500 transform group-hover:-translate-y-4 overflow-hidden">
              
              <Card
                image="/images/blue_shirt.jpg" 
                title="T-shirt"
                description=""
              />

              {/* Skeleton avec opacité fixe pour éviter les flashs visuels */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="h-2 bg-blue-500/40 rounded-full mb-2"></div>
                <div className="h-2 bg-red-400/40 rounded-full w-2/3 mb-2"></div>
                <div className="h-2 bg-green-400/40 rounded-full w-1/3"></div>
              </div>

            </div>

            {/* Badge */}
            <div className="absolute -top-3 -right-3 z-20 bg-[#f6335d] text-white text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
              100%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}