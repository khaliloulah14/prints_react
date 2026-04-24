import Button from "../components/button";
import { useNavigate } from "react-router-dom";

export default function TShirt() {
  const navigate = useNavigate();
  const cards = [
    {
      image: "/images/lacoste_7.jfif",
      promo: "-25% PROMO",
      promoBg: "bg-[#f6335d]",
      title: "T-Shirt Holographic",
      description: "Design pilier, reflets furtifs pour un style unique.",
      oldPrice: "5 000",
      newPrice: "4 500",
      cta: "Nous contacter",
    },
    {
      image: "/images/shoes_2.jfif",
      promo: "-10% PROMO",
      promoBg: "bg-blue-600",
      title: "Nike Zoom Galactic",
      description: "Performance ultime et style futuriste pour le sport.",
      oldPrice: "10 000",
      newPrice: "6 500",
      cta: "Nous contacter",
    },
  ];

  return (
    <section className="w-full py-10 md:py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative group h-125 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%), url('${card.image}')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* Badge promo */}
            <div
              className={`absolute top-6 left-6 z-30 ${card.promoBg} text-white text-[10px] font-black px-3 py-1.5 rounded-xl`}
            >
              {card.promo}
            </div>

            {/* Contenu bas */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-8 flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
              <h2 className="text-white text-2xl font-black">{card.title}</h2>
              <p className="text-white/70 text-sm">{card.description}</p>

              <div className="flex flex-col">
                <span className="text-white/50 line-through text-sm">
                  {card.oldPrice} CFA
                </span>
                <span className="text-white text-4xl font-black tracking-tight">
                  {card.newPrice} <span className="text-sm font-bold">CFA</span>
                </span>
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => navigate(`/product/29`)}
                  onClick={() => navigate(`/product/17`)}
                  className="flex-1 bg-white text-black h-11 px-5 rounded-xl font-bold hover:scale-105 transition-transform text-sm"
                >
                  Voir les détails
                </button>

                <Button
                  label={card.cta}
                    onClick={() => navigate(`/contact`)}
                  className="flex-1 bg-transparent border-2 border-white text-white h-11 px-5 rounded-xl font-bold hover:bg-white hover:text-black transition-all text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
