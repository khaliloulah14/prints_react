import { useState } from 'react';
import { FiCheckCircle, FiStar, FiTruck, FiPlus, FiMinus } from 'react-icons/fi';

const hdxPink = "#ff1d58";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "Quels types de fichiers acceptez-vous ?",
      a: "Pour une qualité optimale, nous recommandons les formats vectoriels (PDF, AI, EPS) ou des images haute résolution (300 DPI) en format PNG ou JPG."
    },
    {
      q: "Quels sont vos délais de production ?",
      a: "Nos délais standards sont de 24h à 72h selon la complexité et la quantité de votre commande. Un service express est disponible pour les urgences."
    },
    {
      q: "Livrez-vous en dehors de Dakar ?",
      a: "Oui, nous livrons partout au Sénégal via nos partenaires logistiques. Les tarifs varient selon la zone et le volume."
    },
    {
      q: "Est-ce possible de commander à l'unité ?",
      a: "Absolument ! Nous n'imposons pas de quantité minimale pour la plupart de nos supports d'impression."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic text-center mb-12 text-gray-800">
          Questions <span className="text-red-600">Fréquentes</span>
        </h2>
        
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-gray-700 uppercase italic tracking-tight">{item.q}</span>
                {openIndex === i ? <FiMinus className="text-red-600" /> : <FiPlus className="text-red-600" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 bg-white text-gray-500 leading-relaxed border-t border-gray-100">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. HERO SIMPLE (Même style que Contact) */}
      <section className="py-24 text-center bg-red-600">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
          About<span className=" text-white">-Us</span>
        </h1>
        <div className="h-2 w-24 mx-auto mt-6 rounded-full bg-white"></div>
      </section>

      {/* 2. TEXTE DE PRÉSENTATION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic text-gray-800">
            L'excellence de l'impression à <span style={{ color: hdxPink }}>Dakar</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            HDX Prints est né d'une passion pour la précision. Nous croyons que chaque support — qu'il soit textile, papier ou rigide — mérite une qualité d'image parfaite. Notre mission est de transformer vos concepts créatifs en produits tangibles exceptionnels.
          </p>
        </div>
      </section>

      {/* 3. NOS VALEURS (Style Cartes comme le Contact) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-50 text-red-600 text-3xl">
              <FiStar />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">Qualité HD</h3>
            <p className="text-gray-500 text-sm">Une fidélité de couleurs absolue et une netteté laser sur tous vos supports.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-50 text-red-600 text-3xl">
              <FiCheckCircle />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">Engagement</h3>
            <p className="text-gray-500 text-sm">Nous accompagnons chaque client, du petit projet personnel aux grandes campagnes.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-50 text-red-600 text-3xl">
              <FiTruck />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">Rapidité</h3>
            <p className="text-gray-500 text-sm">Délais de production optimisés et livraison rapide partout au Sénégal.</p>
          </div>

        </div>
      </section>

  

      {/* 5. FAQ SECTION */}
      <FAQSection />

    </div>
  );
};

export default AboutPage;