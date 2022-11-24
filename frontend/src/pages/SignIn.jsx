import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { toast } from "react-toastify";
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const togglePasswordEye = () => {
    var set_signin_eye = document.querySelector(".changeeye");
    if (showPassword) {
      set_signin_eye.classList.remove("fa-eye-slash");
      set_signin_eye.classList.add("fa-eye");
    } else {
      set_signin_eye.classList.add("fa-eye-slash");
      set_signin_eye.classList.remove("fa-eye");
    }
    setShowPassword((prevState) => !prevState);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //get request
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-800 ">
        <div className="flex flex-col my-12 p-3" style={{ width: "340px" }}>
          <div className="shadow-2xl shadow-black text-white hover:shadow-indigo-500/40 duration-200">
            <div className="p-8 mt-2 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Login</div>
              <div className="mt-2">
                <form onSubmit={onSubmit}>
                  <div
                    className="relative mt-3
                  "
                  >
                    <input
                      type="url"
                      className="p-3 w-full border borde-gray-300 rounded-md text-slate-700 placeholder:font-sans placeholder:font-light italic"
                      placeholder="Enter your email address"
                      id="email"
                      value={email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="p-3 w-full border borde-gray-300 rounded-md text-slate-700 placeholder:font-sans placeholder:font-light italic"
                      placeholder="Enter your password"
                      id="password"
                      value={password}
                      onChange={onChange}
                    />
                    <span
                      className="absolute top-3 right-2"
                      onClick={togglePasswordEye}
                    >
                      <i className="changeeye fa fa-eye-slash cursor-pointer text-slate-900"></i>
                    </span>
                  </div>
                  <div className="mt-2 ml-28">
                    <Link
                      to="/forgot-password"
                      className="hover:text-violet-600"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative flex justify-center mt-3">
                    <button className="p-3 w-full text-center border border-violet-600 rounded-lg hover:bg-violet-800 transition-all duration-200">
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="relative mt-5">
                  <p>
                    Don't have an account?
                    <Link to="/sign-up" className="pl-4 hover:text-violet-600">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
