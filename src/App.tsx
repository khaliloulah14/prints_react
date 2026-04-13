import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import About from "./pages/about";
import Contact from "./pages/contact";
import LoginPage from "./pages/authentification/login"; // Importé
import SignUpPage from "./pages/authentification/sign_up"; // Importé
import Layout from "./layout/layout";
import Dashboard from "./pages/authentification/dashboard"; // Importé
import DashboardHome from "./pages/dashboard.tsx/dashboardHome";
import OrderList from "./pages/dashboard.tsx/commandes";
import ProductCatalog from "./pages/dashboard.tsx/produits";
import CustomerList from "./pages/dashboard.tsx/clients";
import SettingsView from "./pages/dashboard.tsx/parametres";
import ProductDetail from "./pages/produitDetail"; // Importé
import Panier from "./pages/panier"; // Importé


function App() {
  return (
    <>
      <Toaster position="top-right" richColors/>
    <Routes>
      {/* Pages avec Header/Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/panier" element={<Panier />} />

      {/* Pages sans Header/Footer (Plein écran) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      
      {/* Sous-routes du Dashboard */}  

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="commandes" element={<OrderList />} />
        <Route path="produits" element={<ProductCatalog />} />
        <Route path="clients" element={<CustomerList />} />
        <Route path="parametres" element={<SettingsView />} />
      </Route>
      {/* Route pour le détail du produit */}
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
    </>
  );
}

export default App;
