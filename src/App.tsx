import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import About from "./pages/about";
import Contact from "./pages/contact";
import LoginPage from "./pages/authentification/login"; // Importé
import SignUpPage from "./pages/authentification/sign_up"; // Importé
import Layout from "./layout/layout";
import Dashboard from "./pages/authentification/dashboard"; // Importé

function App() {
  return (
    <Routes>
      {/* Pages avec Header/Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Pages sans Header/Footer (Plein écran) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
