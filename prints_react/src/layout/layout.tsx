import { Outlet } from "react-router-dom";
import Header from "../views/header";
import Footer from "../views/footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
