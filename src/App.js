import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Blog from "./Pages//Blog/Blog.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Product from "./Pages/Product/Product.jsx";

import Navbars from "./Components/navbar.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbars />
          <Home />
          <div className="content">
            <Routes>
              
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
