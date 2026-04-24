import TitleSection from "../components/title"; // On importe le composant TitleSection
import Button from "../components/button"; // On utilise votre bouton avec l'icône double flèche
import { useNavigate } from "react-router-dom"; // Import pour la navigation

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* BLOC TEXTE */}
        <div className="w-full md:w-1/2 flex flex-col items-start ">
          <TitleSection
            title="Products that speak your style"
            description="Exprimez votre style unique avec nos produits hautes définitions sur coton 100% bio. Conçus pour durer, portés pour impressionner."
          />
          <Button
            label="Explore Store"
            className="mt-8"
            onClick={() => navigate("/all-Products")} // Navigation vers la page des produits
          />
        </div>

        {/* BLOC IMAGE AVEC FOND SUPPRIMÉ */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/design_1.png" // Rappel: retire /public/
            alt="Customized Printed Tees"
            className="w-full h-150 object-top object-cover " // <-- AJOUT ICI
          />
        </div>
      </div>
    </section>
  );
}
