import Button from "../components/button"
import TitleSection from "../components/title"

export default function TShirt() {
  return (
    <section className="w-full py-16 px-4 bg-[#f0e2e2]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* CARTE 1 : T-SHIRT */}
        <div className="relative group h-[600px] rounded-[2.5rem] p-[2px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(246,51,93,0.4)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"></div>
          <div className="absolute inset-0 border-[3px] border-white/10 rounded-[2.5rem] z-20 group-hover:border-[#f6335d]/60 transition-colors duration-500"></div>

          <div 
            className="relative h-full w-full flex flex-col justify-end p-10 rounded-[2.5rem] overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%), url('/images/red_shirt.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute top-8 left-8 z-30 bg-[#f6335d] text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg">
              -25% PROMO
            </div>

            <div className="relative z-10 flex flex-col items-start transition-all duration-500 group-hover:translate-y-[-5px]">
              <div className="[&_*]:text-white text-left">
                <TitleSection 
                  title="T-Shirt Holographic" 
                  description="Design pilier, reflets furtifs pour un style unique." 
                />
              </div>
              
              <div className="flex flex-col items-start mt-2 mb-6">
                <span className="text-white/40 line-through text-lg">20 000 CFA</span>
                <span className="text-[#4ade80] text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                  15 000 <span className="text-sm font-bold text-white/80">CFA</span>
                </span>
              </div>

              <div className="flex gap-4 items-center w-full">
                <button 
                  className="bg-white text-black h-12 px-6 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
                  type="button"
                >
                  Détails
                </button>
                <Button 
                  label="Acheter maintenant" 
                  className="bg-transparent border-2 border-white/20 text-white h-12 px-6 rounded-2xl font-bold hover:bg-white hover:text-black transition-all" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARTE 2 : SHOES */}
        <div className="relative group h-[600px] rounded-[2.5rem] p-[2px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"></div>
          <div className="absolute inset-0 border-[3px] border-white/10 rounded-[2.5rem] z-20 group-hover:border-blue-500/60 transition-colors duration-500"></div>

          <div 
            className="relative h-full w-full flex flex-col justify-end p-10 rounded-[2.5rem] overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%), url('/images/nike_air_zoom.jfif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute top-8 left-8 z-30 bg-blue-600 text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg">
              -10% PROMO
            </div>

            <div className="relative z-10 flex flex-col items-start transition-all duration-500 group-hover:translate-y-[-5px]">
              <div className="[&_*]:text-white text-left">
                <TitleSection 
                  title="Nike Zoom Galactic" 
                  description="Performance ultime et style futuriste pour le sport." 
                />
              </div>

              <div className="flex flex-col items-start mt-2 mb-6">
                <span className="text-white/40 line-through text-lg">50 000 CFA</span>
                <span className="text-blue-400 text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                  45 000 <span className="text-sm font-bold text-white/80">CFA</span>
                </span>
              </div>

              <div className="flex gap-4 items-center w-full">
                <button 
                  className="bg-white text-black h-12 px-6 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
                  type="button"
                >
                  Détails
                </button>
                <Button 
                  label="Découvrir" 
                  className="bg-transparent border-2 border-white/20 text-white h-12 px-6 rounded-2xl font-bold hover:bg-white hover:text-black transition-all" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}