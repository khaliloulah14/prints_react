import React, { useState } from "react";
import { toast } from "sonner";
import { loginService } from "../../api/auth.service";
import { useNavigate,Link} from "react-router-dom";


export default function LoginPage() {
  const [form, setForm] = useState<{ username: string; password: string }>({
    username: "",
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
      const reponse = await loginService(form);
      const data = reponse.user;

      const accessToken = reponse.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Identifiants incorrects");
      toast.error("Connexion échouée !");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen w-full">
      {/* Colonne gauche — Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="/images/picture_login.jpeg"
          alt="picture_login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 relative overflow-hidden">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2"></div>

        {/* Formulaire centré par dessus */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div
            id="form-container"
            className="bg-white p-16 rounded-lg shadow-2xl w-80 transform transition duration-500 ease-in-out"
          >
            <h2
              id="form-title"
              className="text-center text-3xl font-bold mb-10 text-gray-800"
            >
              Login Page
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Email"
                type="text"
                value={form.username}
                onChange={handleChange}
                name="username"
              />
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign in"}
              </button>
              <a className="text-blue-500 hover:text-blue-800 font-medium" href="#">
                Forgot Password?
              </a>
              <p className="text-center text-blue-500 font-bold">
                <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
