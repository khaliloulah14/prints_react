import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    alert("Merci ! Votre message a été reçu.");
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* SECTION HÉROS */}
      <section className="py-24 text-center bg-red-600">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
          Contact<span className=" text-white">-Us</span>
        </h1>
        <div className="h-2 w-24 mx-auto mt-6 rounded-full bg-white"></div>
      </section>

      {/* CARTES DE CONTACT */}
      <section className="pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VENTES */}
          <div className="text-center p-10 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/30">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 bg-red-100 text-red-600">
              <FiMail size={24} />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Ventes</h3>
            <a
              href="mailto:diaitekhalil64@gmail.com"
              className="font-medium text-red-600 hover:underline break-all"
            >
              diaitekhalil64@gmail.com
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="text-center p-10 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/30">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 bg-green-100 text-green-600">
              <FaWhatsapp size={24} />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/221770000000"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-green-600 hover:underline"
            >
              +221 77 000 00 00
            </a>
          </div>

          {/* SHOWROOM */}
          <div className="text-center p-10 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/30">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 bg-blue-100 text-blue-600">
              <FiMapPin size={24} />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Showroom</h3>
            <p className="font-medium text-gray-600">Dakar, Point E</p>
          </div>
        </div>
      </section>

      {/* FORMULAIRE DE CONTACT */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-/[2rem] shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-black uppercase italic text-gray-800 mb-8 text-center">
              Envoyez un <span className="text-red-600">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase text-gray-500 mb-2">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Khalil Diaite"
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase text-gray-500 mb-2">
                    Votre Email
                  </label>
                  <input
                    type="email"
                    placeholder="nom@exemple.com"
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-gray-500 mb-2">
                  Votre Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-red-600 text-white font-black uppercase italic tracking-widest rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-red-200"
              >
                Envoyer <FiSend />
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* SECTION CARTE DE LOCALISATION */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black uppercase italic text-gray-800">
              Où nous <span className="text-red-600">Trouver</span>
            </h2>
            <p className="text-gray-500 font-medium mt-2">
              Venez nous rendre visite dans notre showroom au Point E
            </p>
          </div>

          <div className="w-full h-125 rounded-/[2rem/] overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              title="Localisation HDX Prints"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.123456789!2d-17.4602919!3d14.6961653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzQ2LjIiTiAxN8KwMjcnMzcuMSJX!5e0!3m2!1sfr!2ssn!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Dakar, Sénégal
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Quartier Point E
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Ouvert de 09h à 18h
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
