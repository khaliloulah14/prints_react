import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCatalog() {
  const [products, setProducts] = useState([
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
  ]);

  const handleDelete = (id: number) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/dashboard/produits/editProductsPage/${id}`);
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Catalogue Articles</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
          >
            <div className="h-48 overflow-hidden bg-gray-200">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src =
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
                <div className="flex gap-2">
                  {/* Bouton Modifier */}
                  <button
                    onClick={() =>
                      navigate(
                        `/dashboard/produits/editProductsPage/${product.id}`,
                      )
                    }
                    className="flex items-center bg-blue-50 text-[#007AFF] hover:bg-blue-100 p-1.5 rounded-lg transition-all"
                  >
                    <Pencil size={14} />
                  </button>
                  {/* Bouton Supprimer */}
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex items-center bg-red-50 text-[#FF2D55] hover:bg-red-100 p-1.5 rounded-lg transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
