
import { useState} from "react";
import { toast } from "sonner";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

export function usePanier() {
  const [panier, setPanier] = useState<Product[]>(() => {
    const saved = localStorage.getItem("panier");
    return saved ? JSON.parse(saved) : [];
  });

  const ajouterAuPanier = (product: Product) => {
    const dejaPresent = panier.find((p) => p.id === product.id);
    if (dejaPresent) {
      toast.error("Ce produit est déjà dans votre panier !");
      return;
    }
    const newPanier = [...panier, product];
    setPanier(newPanier);
    localStorage.setItem("panier", JSON.stringify(newPanier));
    toast.success("Produit ajouté au panier !");
  };

  const supprimerDuPanier = (id: number) => {
    const newPanier = panier.filter((p) => p.id !== id);
    setPanier(newPanier);
    localStorage.setItem("panier", JSON.stringify(newPanier));
  };

  return { panier, ajouterAuPanier, supprimerDuPanier };
}
