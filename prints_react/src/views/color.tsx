import TitleSection from "../components/title";
import Button from "../components/button";

export default function ColorSection() {
  return (
    <section className="bg-[#f5f5f5] w-full flex flex-col items-center overflow-x-hidden">
      
      {/* 1. BLOC SUPÉRIEUR (Gris clair) */}
      {/* pb-24 sur desktop permet de descendre la bande rouge par rapport au texte */}
      <div className="w-full max-w-[1200px] px-6 pt-12 md:pt-24 pb-12 md:pb-24 flex flex-col md:flex-row items-center md:items-start justify-between relative min-h-[400px]">
        
        {/* IMAGE : À gauche, descendue pour toucher la bande rouge */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start z-20 order-2 md:order-1 mt-8 md:mt-0">
          <img
            src="/images/girl_color.png"
            alt="Color of the month"
            /* md:-bottom-12 permet à l'image de dépasser du bloc gris et d'entrer dans le rouge */
            className="w-full max-w-[450px] md:max-w-[550px] h-auto object-contain mix-blend-multiply md:absolute md:-bottom-0 md:left-0 select-none"
          />
        </div>

        {/* TEXTE : À droite */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 order-1 md:order-2">
          <TitleSection
            title="#ColorOfTheMonth"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
        </div>
      </div>

      {/* 2. BANDE ROUGE (Pleine largeur) */}
      {/* La bande rouge commence juste après le pb-24 du bloc précédent */}
      <div className="w-full bg-[#f6335d] pt-24 pb-16 md:pt-32 md:pb-20 px-6 flex flex-col items-center justify-center relative z-0">
        
        <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight italic text-center md:text-left max-w-[600px] leading-tight">
            Grab This Limited Time Offer
          </h2>

          <div className="flex flex-col items-center md:items-end group">
            <Button
              label="ORDER NOW"
              className="bg-transparent border-none text-white font-bold text-sm tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-transform"
            />
            <div className="h-[1px] w-full bg-white/60 mt-2"></div>
          </div>
        </div>
      </div>

    </section>
  );
}