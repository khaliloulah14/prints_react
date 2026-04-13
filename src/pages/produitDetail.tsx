import { useParams, useNavigate } from "react-router-dom";
import { usePanier } from "../hooks/usePanier";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
    { id: 1, name: "Casquette Holographic Tech", category: "Caps", price: 2000, image: "/images/2_caps.jfif" },
    { id: 5, name: "Casquette Dark Tech", category: "Caps", price: 2000, image: "/images/grey_caps.jfif" },
    { id: 7, name: "Casquette Light Tech", category: "Caps", price: 2000, image: "/images/red_caps.jfif" },
    { id: 8, name: "Casquette Blue Tech", category: "Caps", price: 2000, image: "/images/bleu_caps.jfif" },
    { id: 6, name: "Casquette White Tech", category: "Caps", price: 2000, image: "/images/caps_tricolor.jfif" },
    { id: 30, name: "Casquette Gucci Luxury", category: "Caps", price: 2000, image: "/images/caps_gucci.jfif" },
    { id: 31, name: "Casquette Supreme Soldier", category: "Caps", price: 2000, image: "/images/caps_soldier.jfif" },
    { id: 32, name: "Casquette Supreme Red Logo", category: "Caps", price: 2000, image: "/images/caps_red.jfif" },
    { id: 3, name: "Chaussure Nike Air Max", category: "Shoes", price: 10000, image: "/images/shoes_up.jfif" },
    { id: 9, name: "Nike Zoom Galactic 2", category: "Shoes", price: 10000, image: "/images/shoes_1.jfif" },
    { id: 10, name: "Chaussure Puma RS-X", category: "Shoes", price: 10000, image: "/images/shoes_black.jfif" },
    { id: 11, name: "Nike Air Max 270 Sport", category: "Shoes", price: 10000, image: "/images/shoes_2.jfif" },
    { id: 12, name: "Nike Zoom Brown Tech", category: "Shoes", price: 10000, image: "/images/shoes_brown.jfif" },
    { id: 13, name: "Nike Zoom Brown Tech", category: "Shoes", price: 10000, image: "/images/air_max (2).jfif" },
    { id: 14, name: "Nike Air Max TN Plus 1", category: "Shoes", price: 10000, image: "/images/air_max (1).jfif" },
    { id: 15, name: "Nike Air Max Vapormax", category: "Shoes", price: 10000, image: "/images/air_max.jfif" },
    { id: 2, name: "Pantalon Cargo Black Tech", category: "Pants", price: 2500, image: "/images/pants_1.jfif" },
    { id: 16, name: "Pantalon Cargo Tactical 2", category: "Pants", price: 2500, image: "/images/pants_2.jfif" },
    { id: 17, name: "Pantalon Cargo Jogger 3", category: "Pants", price: 2500, image: "/images/pants_3.jfif" },
    { id: 18, name: "Pantalon Cargo Slim 4", category: "Pants", price: 2500, image: "/images/pants_4.jfif" },
    { id: 19, name: "Pantalon Cargo Street 5", category: "Pants", price: 2500, image: "/images/pants_5.jfif" },
    { id: 20, name: "Pantalon Cargo Tech 6", category: "Pants", price: 2500, image: "/images/pants_6.jfif" },
    { id: 21, name: "Pantalon Cargo Tech 7", category: "Pants", price: 7000, image: "/images/pants_7.jfif" },
    { id: 22, name: "Pantalon Cargo Tech 8", category: "Pants", price: 7000, image: "/images/pants_8.jfif" },
    { id: 4, name: "T-Shirt Lacoste Universe 1", category: "T-Shirt", price: 3000, image: "/images/lacoste_1.jfif" },
    { id: 23, name: "T-Shirt Lacoste Universe 2", category: "T-Shirt", price: 3000, image: "/images/lacoste_2.jfif" },
    { id: 24, name: "T-Shirt Lacoste Universe 3", category: "T-Shirt", price: 3000, image: "/images/lacoste_3.jfif" },
    { id: 25, name: "T-Shirt Lacoste Universe 4", category: "T-Shirt", price: 3000, image: "/images/lacoste_4.jfif" },
    { id: 26, name: "T-Shirt Lacoste Universe 5", category: "T-Shirt", price: 3000, image: "/images/lacoste_5.jfif" },
    { id: 27, name: "T-Shirt Lacoste Universe 6", category: "T-Shirt", price: 3000, image: "/images/lacoste_6.jfif" },
    { id: 28, name: "T-Shirt Lacoste Universe 7", category: "T-Shirt", price: 3000, image: "/images/lacoste_7.jfif" },
    { id: 29, name: "T-Shirt Lacoste Universe 8", category: "T-Shirt", price: 3000, image: "/images/lacoste_8.jfif" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ajouterAuPanier } = usePanier();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1>Produit introuvable</h1>;
  }

  // ✅ toast.success déplacé DANS la fonction
  const handleAjouter = () => {
    ajouterAuPanier(product);
    toast.success(`"${product.name}" ajouté au panier !`);
  };

  // ✅ confirm() remplacé par toast avec action, toast.error DANS la fonction
  const handleSupprimer = () => {
    toast.error(`Supprimer "${product.name}" ?`, {
      action: {
        label: "Confirmer",
        onClick: () => navigate("/"),
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-blue-100 shadow-lg rounded-xl p-10 max-w-md">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-500 mb-2">Catégorie : {product.category}</p>
        <p className="text-gray-700 mb-4">
          Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          <span className="text-gray-500">Disponibilité : </span>
          <span className="text-green-500 font-bold">En stock</span>
        </p>
        <p className="text-black text-xl font-bold">{product.price} CFA</p>

        <button
          onClick={handleAjouter}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Ajouter
        </button>

        <button
          onClick={handleSupprimer}
          className="mt-4 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Supprimer
        </button>

      </div>
    </div>
  );
}