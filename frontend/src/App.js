import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/StateManagement/SignIn";
import SignUp from "./pages/StateManagement/SignUp";
import ForgotPassword from "./pages/StateManagement/ForgotPassword";
import Home from "./pages/Home";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import Profile from "./pages/StateManagement/Profile";
import AllProducts from "./pages/Products/AllProducts";
import ProductView from "./pages/Products/ProductView";
import Cart from "./pages/Products/Cart";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
