
function ProductCatalog() {
  // Simuler des produits avec tes images dans public/images/
  const myProducts = [
    {
      id: 1,
      name: "Chaussures HDX",
      price: "15000 fcfa",
      img: "/images/shoes_1.jfif",
    },
    {
      id: 2,
      name: "air max",
      price: "15000 fcfa",
      img: "/images/shoes_2.jfif",
    },
    { id: 3, name: "nike", price: "15000 fcfa", img: "/images/air_max.jfif" },
    {
      id: 4,
      name: "air max",
      price: "20000 fcfa",
      img: "/images/shoes_black.jfif",
    },
  ];

  return (
    <div className="p-4 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Catalogue Articles</h3>
        <button className="bg-[#FF2D55] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-600 transition-all shadow-md">
          + Ajouter un produit
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {myProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
          >
            <div className="h-48 overflow-hidden bg-gray-200">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.currentTarget;
                  target.src =
                    "https://via.placeholder.com/300?text=Image+Introuvable";
                }}
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-800 truncate">
                {product.name}
              </h4>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[#FF2D55] font-black text-lg">
                  {product.price}
                </span>
                <button className="text-xs text-gray-400 hover:text-gray-600 font-medium">
                  Modifier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductCatalog;