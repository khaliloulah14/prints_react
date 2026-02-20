import TitleSection from "../components/title" // On importe le composant TitleSection
import Button from "../components/button" // On utilise votre bouton avec l'icône double flèche

export default function HeroSection() {
  return (
    <section className="relative bg-[#f0e2e2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center">
        
        {/* BLOC TEXTE */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
          <TitleSection
            title="Customized Printed Tees"
            description="Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus."
          />
          <Button 
            label="Explore Store" 
            className="mt-8" 
          />
        </div>

        {/* BLOC IMAGE AVEC FOND SUPPRIMÉ */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          <img 
            src="/images/design_1.png" // Rappel: retire /public/
            alt="Customized Printed Tees" 
            className="w-full max-w-500 object-contain mix-blend-multiply" // <-- AJOUT ICI
          />
        </div>

      </div>
    </section>
  )
}