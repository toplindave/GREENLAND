import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart/Cart";
import ProductDetails from "./pages/productdetails/ProductDetails";
import Products from "./pages/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
