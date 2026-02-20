import React from 'react';

// --- COULEURS HDX PRINTS ---
const hdxPink = "#ff1d58";
const hdxGrey = "#44505e";

const Hero = () => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: hdxGrey }}>
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      >
        <img 
          src="/images/about-hdx-hero.jfif" 
          className="w-full h-full object-cover opacity-30 scale-110" 
          alt="Impression Haute Définition" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      <div 
        className="relative z-10 text-center px-4 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(-${offset * 0.1}px)` }}
      >
        <span className="font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs mb-6 block animate-pulse" style={{ color: hdxPink }}>
          Expertise & Impression HD
        </span>
        <h1 className="text-6xl md:text-9xl font-black uppercase italic text-white tracking-tighter leading-none">
          L'Univers <br /> 
          <span style={{ color: hdxPink, textShadow: `0 0 20px ${hdxPink}44` }}>HDX Prints</span>
        </h1>
        <div className="mt-8 h-1.5 w-24 mx-auto rounded-full" style={{ backgroundColor: hdxPink }}></div>
      </div>
    </section>
  );
};

const WhoWeAre = () => (
  <section className="py-24 bg-white px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase italic" style={{ backgroundColor: `${hdxPink}15`, color: hdxPink }}>
          Innovation à Dakar
        </div>
        <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter" style={{ color: hdxGrey }}>
          Vos idées sur <br /> <span style={{ color: hdxPink }}>Tous Supports.</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          HDX Prints redéfinit les standards de l'impression au Sénégal. Du textile aux supports rigides, nous combinons technologie de pointe et précision artisanale.
        </p>
        <p className="text-slate-500 leading-relaxed">
          Que vous soyez une marque en pleine ascension ou une entreprise établie, nous donnons vie à votre identité visuelle avec une fidélité de couleurs absolue et une durabilité garantie.
        </p>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 rounded-[2.5rem] transition-colors" style={{ backgroundColor: `${hdxPink}08` }}></div>
        <img 
          src="/images/pexels_auston.jpeg" 
          alt="Atelier HDX" 
          className="relative rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
        />
      </div>
    </div>
  </section>
);

const Stats = () => {
  const data = [
    { val: "5K+", label: "Projets Réalisés" },
    { val: "99%", label: "Clients Fidèles" },
    { val: "24H", label: "Délai Express" },
    { val: "HD", label: "Qualité Certifiée" },
  ];
  return (
    <section className="py-20 text-white border-y border-white/5" style={{ backgroundColor: hdxGrey }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
        {data.map((item, i) => (
          <div key={i} className="text-center group hover:scale-105 transition-transform">
            <div className="text-5xl font-black italic mb-2 tracking-tighter" style={{ color: hdxPink }}>{item.val}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { title: "Précision Laser", desc: "Une netteté parfaite pour chaque logo et chaque détail graphique.", icon: "🎯" },
    { title: "Livraison Rapide", desc: "Vos commandes livrées à Dakar et partout au Sénégal en un temps record.", icon: "🚚" },
    { title: "Service Premium", desc: "Un accompagnement dédié pour choisir les meilleurs supports d'impression.", icon: "⭐" },
  ];
  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 border-b-4" style={{ borderBottomColor: i === 1 ? hdxPink : 'transparent' }}>
            <div className="text-4xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-black uppercase italic mb-4" style={{ color: hdxGrey }}>{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <WhoWeAre />
      <Stats />
      <Features />
      
      <section className="py-24 px-4 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter" style={{ color: hdxGrey }}>
            Impressionnez avec <span style={{ color: hdxPink }}>HDX Prints</span>
          </h2>
          <p className="text-slate-500">Prêt à transformer vos idées en réalité ? Discutons de votre projet dès aujourd'hui.</p>
          <button 
            className="text-white font-black uppercase italic px-10 py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
            style={{ backgroundColor: hdxPink }}
          >
            Lancer mon projet
          </button>
        </div>
      </section>
    </main>
  );
}