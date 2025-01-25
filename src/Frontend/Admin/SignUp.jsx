import { NavLink } from "react-router";
import { assets } from "../assets/asset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Section from "../Components/Section";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { signUp } from "../../Backend/AuthLogic";

{/*------user Login------ */}

const SignUp = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleSignUp = async () => {
    try {
      signUp(userForm.email, userForm.password, userForm.name);
    } catch (error) {
      
    }
  };
  
  const handleUserForm = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value.trim() });
  };

  const handleUserFormSubmit = () => {
    if (!userForm.name || !userForm.email || !userForm.password) {
      setFormError("Please fill in the required fields");

      setTimeout(() => {
        setFormError("");
      }, 3000);
    } else {
      setFormError("");
    }
  };

  return (
    <div className="w-full m-auto flex items-center justify-center bg-inherit">
      <div className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden max-w-7xl w-full tracking-wide">
        {/* Left Column */}
        <div className="md:w-1/2 p-8 bg-slate-100">
          <Section section={"CREATE ACCOUNT"} />
          <p className="text-gray-500 mb-6 self-center text-center font-space">
            Join our 100% free creative network.
          </p>

          {/* Sign-up Buttons */}
          <button className="w-3/4 flex items-center justify-center m-auto p-3 mb-4 text-gray-700 bg-gray-100 rounded-md shadow-md hover:bg-gray-200">
            <img
              src={assets.google_icon}
              alt="Google"
              className="w-[25px] mr-3 font-space"
            />
            Sign up with Google
          </button>
          <button className="w-3/4 flex items-center justify-center p-3 mb-4 m-auto text-white bg-black rounded-md shadow-md hover:opacity-65">
            Sign up with{" "}
            <span>
              <FontAwesomeIcon icon={faXTwitter} className="ml-2" />
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form */}
          <form>
            {formError && (
              <p className="text-red-700 text-md font-space font-bold py-3">
                {formError}
              </p>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name*
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-transparent text-black hover:bg-slate-50 shadow-md focus:outline-none"
                value={userForm.name}
                onChange={handleUserForm}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-transparent text-black hover:bg-slate-50 shadow-md focus:outline-none"
                value={userForm.email}
                onChange={handleUserForm}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-sm font-medium text-gray-700">
                Password*
              </label>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                name="password"
                placeholder="Create a password"
                className="w-full p-3 rounded-lg bg-transparent text-black hover:bg-slate-50 shadow-md focus:outline-none"
                value={userForm.password}
                onChange={handleUserForm}
                autoComplete="off"
                required
              />
              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 top-3 flex items-center text-gray-500 hover:text-black"
              >
                {showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>} {/* Emoji for eye/lock */}
              </button>
            </div>
            <button
              className="px-6 py-2 font-medium bg-black w-full text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              onClick={handleUserFormSubmit}
            >
              SIGN UP
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-primary font-bold text-[15px] hover:underline"
            >
              Log in
            </NavLink>
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative hidden md:block">
          <img
            src={assets.signup_image}
            alt="Creative Network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70 opacity-30"></div>
          <div className="absolute bottom-8 left-8 text-slate-200">
            <h2 className="text-xl font-bold">
              Join the world's largest network of designers and digital
              creatives.
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Share your design work, build your portfolio, and get hired.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
