import { useNavigate } from "react-router-dom";

const products = [
  // CATEGORIE : CAPS
  {
    id: 1,
    name: "Casquette Holographic Tech",
    category: "Caps",
    price: "2 000",
    image: "/images/2_caps.jfif",
  },
  {
    id: 5,
    name: "Casquette Dark Tech",
    category: "Caps",
    price: "3 500",
    image: "/images/grey_caps.jfif",
  },
  {
    id: 7,
    name: "Casquette Light Tech",
    category: "Caps",
    price: "3 500",
    image: "/images/red_caps.jfif",
  },
  {
    id: 8,
    name: "Casquette Blue Tech",
    category: "Caps",
    price: "3 500",
    image: "/images/bleu_caps.jfif",
  },
  {
    id: 6,
    name: "Casquette White Tech",
    category: "Caps",
    price: "3 500",
    image: "/images/caps_tricolor.jfif",
  },
  {
    id: 30,
    name: "Casquette Gucci Luxury",
    category: "Caps",
    price: "5 000",
    image: "/images/caps_gucci.jfif",
  },
  {
    id: 31,
    name: "Casquette Supreme Soldier",
    category: "Caps",
    price: "4 000",
    image: "/images/caps_soldier.jfif",
  },
  {
    id: 32,
    name: "Casquette Supreme Red Logo",
    category: "Caps",
    price: "4 000",
    image: "/images/caps_red.jfif",
  },

  // CATEGORIE : SHOES (10 000 - 14 000 CFA)
  {
    id: 3,
    name: "Nike Zoom Galactic",
    category: "Shoes",
    price: "10 000",
    image: "/images/shoes_up.jfif",
  },
  {
    id: 9,
    name: "Nike Zoom Galactic 2",
    category: "Shoes",
    price: "10 000",
    image: "/images/shoes_1.jfif",
  },
  {
    id: 10,
    name: "Nike Zoom Black Ops",
    category: "Shoes",
    price: "10 000",
    image: "/images/shoes_black.jfif",
  },
  {
    id: 11,
    name: "Nike Air Max 270 Sport",
    category: "Shoes",
    price: "10 000",
    image: "/images/shoes_2.jfif",
  },
  {
    id: 12,
    name: "Nike Zoom Brown Tech",
    category: "Shoes",
    price: "10 000",
    image: "/images/shoes_brown.jfif",
  },
  {
    id: 13,
    name: "Nike Zoom Brown Tech",
    category: "Shoes",
    price: "10 000",
    image: "/images/air_max (2).jfif",
  },
  {
    id: 14,
    name: "Nike Air Max TN Plus 1",
    category: "Shoes",
    price: "10 000",
    image: "/images/air_max (1).jfif",
  },
  {
    id: 15,
    name: "Nike Air Max Vapormax",
    category: "Shoes",
    price: "10 000",
    image: "/images/air_max.jfif",
  },

  // CATEGORIE : PANTS (Prix diminués : 2 000 - 3 000 CFA)
  {
    id: 2,
    name: "Pantalon Cargo Black Tech",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_1.jfif",
  },
  {
    id: 16,
    name: "Pantalon Cargo Tactical 2",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_2.jfif",
  },
  {
    id: 17,
    name: "Pantalon Cargo Jogger 3",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_3.jfif",
  },
  {
    id: 18,
    name: "Pantalon Cargo Slim 4",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_4.jfif",
  },
  {
    id: 19,
    name: "Pantalon Cargo Street 5",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_5.jfif",
  },
  {
    id: 20,
    name: "Pantalon Cargo Tech 6",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_6.jfif",
  },
  {
    id: 21,
    name: "Pantalon Cargo Tech 7",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_7.jfif",
  },
  {
    id: 22,
    name: "Pantalon Cargo Tech 8",
    category: "Pants",
    price: "2 500",
    image: "/images/pants_8.jfif",
  },

  // CATEGORIE : T-SHIRT (3 000  CFA)
  {
    id: 4,
    name: "T-Shirt Lacoste Universe 1",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_1.jfif",
  },
  {
    id: 23,
    name: "T-Shirt Lacoste Universe 2",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_2.jfif",
  },
  {
    id: 24,
    name: "T-Shirt Lacoste Universe 3",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_3.jfif",
  },
  {
    id: 25,
    name: "T-Shirt Lacoste Universe 4",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_4.jfif",
  },
  {
    id: 26,
    name: "T-Shirt Lacoste Universe 5",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_5.jfif",
  },
  {
    id: 27,
    name: "T-Shirt Lacoste Universe 6",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_6.jfif",
  },
  {
    id: 28,
    name: "T-Shirt Lacoste Universe 7",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_7.jfif",
  },
  {
    id: 29,
    name: "T-Shirt Lacoste Universe 8",
    category: "T-Shirt",
    price: "3 000",
    image: "/images/lacoste_8.jfif",
  },
];

export default function AllProducts() {
  const navigate = useNavigate();
  const categories = ["Caps", "Shoes", "Pants", "T-Shirt"];

  return (
    <div className="w-full min-h-screen py-16 px-4 bg-[#f7f9fc] text-white">
      <div className="max-w-7xl mx-auto">
      <section className="py-24 text-center bg-red-600">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
          All Products
        </h1>
        <div className="h-2 w-24 mx-auto mt-6 rounded-full bg-white"></div>
      </section>

        {categories.map((cat) => {
          const categoryProducts = products.filter((p) => p.category === cat);
          if (categoryProducts.length === 0) return null;

          return (
            <section key={cat} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h2
                  className="text-2xl font-black uppercase tracking-widest italic"
                  style={{ color: "#ff1d58" }}
                >
                  {cat}
                </h2>
                <div className="grow h-/[1px] bg-white/10"></div>
                <span className="text-xs text-gray-500 font-bold">
                  {categoryProducts.length} ITEMS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-slate-900 rounded-/[2rem] overflow-hidden border border-white/5 transition-all duration-500 shadow-xl hover:border-[#ff1d58]/50"
                  >
                    <div className="h-60 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-md font-bold mb-4 uppercase italic transition-colors line-clamp-1 group-hover:text-[#ff1d58]">
                        {product.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-black text-[#4ade80]">
                          {product.price}{" "}
                          <span className="text-[10px] text-white/50">CFA</span>
                        </span>

                        <button
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="relative group/btn overflow-hidden flex items-center justify-center gap-2 text-white text-[10px] font-black px-4 py-2 rounded-xl transition-all duration-300 active:scale-95 shadow-[0_0_10px_rgba(255,29,88,0.3)] hover:shadow-[0_0_20px_rgba(255,29,88,0.5)] uppercase"
                          style={{
                            background:
                              "linear-gradient(to right, #e11d48, #ff1d58)",
                          }}
                        >
                          <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
                          <span className="relative z-10">Voir Détails</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
