import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/onboarding/SignIn";
import DashBoard from "./pages/seller-view/DashBoard";
import Products from "./pages/seller-view/Products";
import Customers from "./pages/seller-view/Customers";
import Income from "./pages/seller-view/Income";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/signup" element={<SignIn />} />


      {/* Sellers view routes */}
      <Route
        path="/"
        element={<DashBoard />}
      />
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/income" element={<Income />} />

    </Routes>
  );
}
