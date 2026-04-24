import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { EditProductService } from "../../api/auth.service";

export default function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<{
    name: string;
    price: number | string;
    description: string;
    image: File | null;
  }>({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm({ ...form, image: file });
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", String(form.price));
      formData.append("description", form.description);
      if (form.image) {
        formData.append("image", form.image);
      }

      await EditProductService(id!, formData);
      toast.success("Produit modifié avec succès !");
      navigate("/dashboard/produits");
    } catch (err) {
      console.error("Update failed:", err);
      setError("Une erreur est survenue lors de la modification");
      toast.error("Modification échouée !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('/images/picture_login.jpeg')] flex items-center justify-center min-h-screen w-full">
      <div className="bg-white p-8 rounded-xl w-full max-w-lg">
        <h1 className="text-4xl font-bold text-purple-800">
          Modifier le produit
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom du produit
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez le nom du produit"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Prix (francs CFA)
            </label>
            <input
              type="number"
              name="price"
              min="0"
              step="100"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez le prix"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 resize-none"
              placeholder="Entrez la description du produit"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image du produit
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              onChange={handleFileChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Aperçu"
                className="mt-3 w-full h-40 object-cover rounded-md border border-gray-200"
              />
            )}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Chargement..." : "Enregistrer les modifications"}
          </button>
        </form>
      </div>
    </div>
  );
}