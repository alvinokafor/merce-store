import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/onboarding/SignIn";
import DashBoard from "./pages/seller-view/DashBoard";
import Products from "./pages/seller-view/Products";
import Customers from "./pages/seller-view/Customers";
import Income from "./pages/seller-view/Income";
import ProductDrafts from "./pages/seller-view/ProductDrafts";
import ReleasedProducts from "./pages/seller-view/ReleasedProducts";
import CustomerList from "./pages/seller-view/CustomerList";
import Payouts from "./pages/seller-view/Payouts";
import AddProduct from'./pages/seller-view/AddProduct'

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/signup" element={<SignIn />} />


      {/* Sellers view routes */}
      <Route path="/" element={<DashBoard />} />

      <Route path='/products'>
          <Route index element={<Products />}  />
          <Route path="drafts" element={<ProductDrafts />} />
          <Route path="released" element={<ReleasedProducts />} />
      </Route>

      <Route path='/customers'>
        <Route index element={<Customers />} />
        <Route path='customer-list' element={<CustomerList />}/>
      </Route>

      <Route path='/income'>
        <Route index element={<Income />} />
        <Route path='payouts' element={<Payouts />}/>
      </Route>

      <Route path='/add-product' element={<AddProduct />} />

     

    </Routes>
  );
}
