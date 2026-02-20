import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import About from "./pages/about";
import Contact from "./pages/contact";
import Layout from "./layout/layout"; // Adaptez le chemin si besoin

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
