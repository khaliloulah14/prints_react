import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { signUpService } from "../../api/auth.service";

export default function SignUpPage() {
  const [form, setForm] = useState<{
    username: string;
    password: string;
    email: string;
  }>({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const reponse = await signUpService(form);
      const data = reponse.user;

      localStorage.setItem("user", JSON.stringify(data));
      toast.success("inscription réussie !");
      navigate("/login");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Identifiants incorrects");
      toast.error("inscription échouée !");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-purple-600 flex items-center justify-center h-screen  w-full">
      <div className="bg-white p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-purple-800">
          Page de d'inscription
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez votre email"
              value={form.email}
              onChange={handleChange}
              required
              name="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              username
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez votre email"
              value={form.username}
              onChange={handleChange}
              name="username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez votre mot de passe"
              value={form.password}
              onChange={handleChange}
              name="password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}
