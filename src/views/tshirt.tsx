import Button from "../components/button"
import TitleSection from "../components/title"

export default function TShirt() {
  return (
    <section className="w-full py-10 md:py-16 px-4 bg-white">
      <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        
        {/* CARTE 1 : T-SHIRT */}
        <div className="relative group h-125 sm:h-150 rounded-4xl md:rounded-[2.5rem]transition-all duration-500 hover:shadow-[0_0_40px_rgba(246,51,93,0.4)]">
          
          <div 
            className="relative h-full w-full flex flex-col justify-end items-start md:items-center p-6 md:p-10 md:rounded-[2.5rem] overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%), url('/images/red_shirt.jpg')",
              backgroundSize: 'contain',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30 bg-[#f6335d] text-white text-[10px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-lg">
              -25% PROMO
            </div>

            <div className="relative z-10 flex flex-col items-start md:items-center transition-all duration-500 group-hover:-translate-y-1.25 w-full">
              <div className="text-white text-left md:text-center scale-90 md:scale-100 origin-left md:origin-center w-full">
                <TitleSection 
                  title="T-Shirt Holographic" 
                  description="Design pilier, reflets furtifs pour un style unique." 
                />
              </div>
              
              <div className="flex flex-col items-start md:items-center mt-1 md:mt-2 mb-4 md:mb-6">
                <span className="text-white line-through text-base md:text-lg">8 000 CFA</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                  5 000 <span className="text-xs md:text-sm font-bold text-white">CFA</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-start md:justify-center w-full">
                <button 
                  className="flex-1 sm:flex-none bg-white text-black h-10 md:h-12 px-5 md:px-6 rounded-xl md:rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg text-sm md:text-base"
                  type="button"
                >
                  Détails
                </button>
                <div className="flex-1 sm:flex-none">
                   <Button 
                    label="Acheter maintenant" 
                    className="w-full bg-transparent border-2 border-white text-white h-10 md:h-12 px-5 md:px-6 rounded-xl md:rounded-2xl font-bold hover:bg-white hover:text-black transition-all text-sm md:text-base" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARTE 2 : SHOES */}
        <div className="relative group h-125 sm:h-150 rounded-4xl md:rounded-[2.5rem] p-0.5 overflow-hidden transition-all duration-500">
        
          <div 
            className="relative h-full w-full flex flex-col justify-end items-start md:items-center p-6 md:p-10 rounded-4xl md:rounded-[2.5rem] overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%), url('/images/nike_air_zoom.jfif')",
              backgroundSize: 'contain',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30 bg-blue-600 text-white">
              -10% PROMO
            </div>

            <div className="relative z-10 flex flex-col items-start md:items-center transition-all duration-500 group-hover:-translate-y-1.25 w-full">
              <div className="text-white text-left md:text-center scale-90 md:scale-100 origin-left md:origin-center w-full">
                <TitleSection 
                  title="Nike Zoom Galactic" 
                  description="Performance ultime et style futuriste pour le sport." 
                />
              </div>

              <div className="flex flex-col items-start md:items-center mt-1 md:mt-2 mb-4 md:mb-6">
                <span className="text-white line-through text-base md:text-lg">15 000 CFA</span>
                <span className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                  10 000 <span className="text-xs md:text-sm font-bold text-white">CFA</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-start md:justify-center w-full">
                <button 
                  className="flex-1 sm:flex-none bg-white text-black h-10 md:h-12 px-5 md:px-6 rounded-xl md:rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg text-sm md:text-base"
                  type="button"
                >
                  Détails
                </button>
                <div className="flex-1 sm:flex-none">
                  <Button 
                    label="Découvrir" 
                    className="w-full bg-transparent border-2 border-white/20 text-white h-10 md:h-12 px-5 md:px-6 rounded-xl md:rounded-2xl font-bold hover:bg-white hover:text-white transition-all text-sm md:text-base" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}