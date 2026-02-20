import React, { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("nom", nom);
    localStorage.setItem("telephone", telephone);

    alert("Connexion réussie !");
    window.location.href = "/login";
  };
  return (
    <div className="bg-purple-600 flex items-center justify-center h-screen  w-full">
      <div className="bg-white p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-purple-800">
          Page de d'inscription
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div className="flex items-center gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Prenom
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              telephone
            </label>
            <input
              type="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}