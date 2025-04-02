import "./App.css";
import Layout from "./layout/Layout";
// import Navbar from "./components/navbar/Navbar";
import BecomeCustomer from "./pages/becomeCustomer/BecomeCustomer";
// import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";
import Home from "./pages/home/Home";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import OrderInfo from "./pages/orderInfo/OrderInfo";
// import ProductDetails from "./pages/productdetails/ProductDetails";
// import Products from "./pages/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/productdetails/ProductDetails";
import Contact from "./pages/contact/Contact";
import WholesaleProduct from "./pages/wholesaleProduct/WholesaleProduct";
import About from "./pages/about/About";
import NonDiscountedProduct from "./pages/nonDiscountedProduct/NonDiscountedProduct";
import CustomerDiscount from "./pages/customerDiscount/CustomerDiscount";

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
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wholesale-program" element={<WholesaleProduct />} />
            <Route path="about" element={<About />} />
            <Route
              path="non-discounted-product"
              element={<NonDiscountedProduct />}
            />
          </Route>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="become-customer" element={<BecomeCustomer />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/order-info" element={<OrderInfo />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/customer-discount" element={<CustomerDiscount />} />
          {/* <Route path="/:id" element={<ProductDetails />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
