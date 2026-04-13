import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const baseURL = "https://localhost:3000/api";//port de mon nest js

//recuperer tout les produits
export const getAllProducts = async () => {
  const res = await fetch(`${baseURL}/products`);
  return res.json();
};

//recuperer un produit par id
export const getProductById = async (id: number) => {
  const res = await fetch(`${baseURL}/products/${id}`);
  return res.json();
};

//ajouter un produit
export const addProduct = async (product: any) => {
  const res = await fetch(`${baseURL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return res.json();
}

//supprimer un produit
export const deleteProduct = async (id: number) => {
  const res = await fetch(`${baseURL}/products/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export default api;