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
  <div className="bg-grey-100 flex items-center justify-center h-screen  w-full">
    {/* From Uiverse.io by themrsami */}
    <div className="h-96 flex items-center justify-center bg-gradient-to-right from-purple-400 via-pink-500 to-red-500">
      <div className="relative">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-linear-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
        <div id="form-container" className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out">
          <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">Login</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input className="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign in</button>
            <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}