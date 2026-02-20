

const ContactPage = () => {
  // Couleurs basées sur le logo HDX
  const hdxPink = "#ff1d58"; 
  const hdxGrey = "#44505e";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION - Gris Anthracite du logo */}
      <section className="py-24 text-center" style={{ backgroundColor: hdxGrey }}>
        <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tighter">
          Contactez-<span style={{ color: hdxPink }}>Nous</span>
        </h1>
        <div className="h-2 w-24 mx-auto mt-6 rounded-full" style={{ backgroundColor: hdxPink }}></div>
      </section>

      {/* 2. INFOS CARDS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Sales */}
          <div className="text-center p-10 border border-gray-100 rounded-4xl hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: hdxGrey, color: hdxPink }}>
            <div className="text-4xl mb-4" style={{ color: hdxPink }}>📧</div>
            <h3 className="text-xl font-bold uppercase mb-2" style={{ color: hdxGrey }}>Ventes</h3>
            <p className="text-gray-500 text-sm mb-4">Questions sur vos impressions.</p>
            <p className="font-bold" style={{ color: hdxPink }}>contact@hdx-prints.sn</p>
          </div>

          {/* Card 2: WhatsApp - Focus Principal */}
          <div className="text-center p-10 rounded-4xl shadow-xl transition-all duration-300 text-white" style={{ backgroundColor: hdxGrey }}>
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold uppercase mb-2">WhatsApp</h3>
            <p className="text-gray-300 text-sm mb-4">Réponse instantanée.</p>
            <p className="text-2xl font-black" style={{ color: hdxPink }}>+221 77 000 00 00</p>
          </div>

          {/* Card 3: Showroom */}
          <div className="bg-gray-700 text-center p-10 border border-gray-100 rounded-4xl hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl mb-4" style={{ color: hdxPink }}>📍</div>
            <h3 className=" text-white text-xl font-bold uppercase mb-2" style={{ color: hdxGrey }}>Showroom</h3>
            <p className="text-white text-sm mb-4">Dakar, Point E</p>
            <p className="font-bold" style={{ color: hdxPink }}>Rue 10 x Avenue X</p>
          </div>
        </div>
      </section>

      {/* 3. FORM & IMAGE SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Formulaire */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border-t-4" style={{ borderTopColor: hdxPink }}>
            <h2 className="text-3xl font-black uppercase italic mb-8 tracking-tighter" style={{ color: hdxGrey }}>
              Envoyez un <span style={{ color: hdxPink }}>Message</span>
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-6 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2"
                  style={{ "--tw-ring-color": hdxPink } as React.CSSProperties & Record<string, any>}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2"
                  style={{ "--tw-ring-color": hdxPink } as React.CSSProperties & Record<string, any>}
                />
              </div>
              <textarea rows={5} placeholder="Votre projet d'impression..." className="w-full px-6 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2" style={{ "--tw-ring-color": hdxPink }}></textarea>
              
              <button className="w-full text-white font-black uppercase italic py-5 rounded-xl transition-all shadow-lg active:scale-95" style={{ backgroundColor: hdxPink }}>
                Lancer la Discussion
              </button>
            </form>
          </div>

          {/* Image Visuelle */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] blur-2xl opacity-20" style={{ backgroundColor: hdxPink }}></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/images/hdx-contact.jpg" alt="Impression HDX" className="w-full h-137.5 object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-black uppercase italic text-xl mb-2">Qualité HDX Prints</p>
                <p className="text-sm text-gray-300">Vos idées sur n'importe quel support, livrées partout au Sénégal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE MAPS SECTION */}
      <section className="h-112.5 w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.100!2d-17.450!3d14.700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzAwLjAiTiAxN8KwMjcnMDAuMCJX!5e0!3m2!1sfr!2ssn!4v123456789" 
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;