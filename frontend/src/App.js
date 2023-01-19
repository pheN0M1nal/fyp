import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import Navbar from "./Navigation/Navbar"
import Footer from "./Navigation/Footer"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
