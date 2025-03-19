import "./App.css";
import Layout from "./layout/Layout";
// import Navbar from "./components/navbar/Navbar";
import BecomeCustomer from "./pages/becomeCustomer/BecomeCustomer";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productdetails/ProductDetails";
// import Products from "./pages/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Products />} /> */}
          <Route path="/customer-registration" element={<BecomeCustomer />} />


          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             
          </Route>
          {/* <Route path="/" element={<Home />} />
          <Route path="/become-customer" element={<BecomeCustomer />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
