import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("email:", email);
    console.log("password:", password);

    alert("Connexion réussie !");
    window.location.href = "/dashboard";
  };
  return (
    <div className="bg-purple-600 flex items-center justify-center h-screen  w-full">
      <div className="bg-white p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-purple-800">
          Page de connexion
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
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
            Se connecter
          </button>
          
        </form>
    
      </div>
    </div>
  );
}