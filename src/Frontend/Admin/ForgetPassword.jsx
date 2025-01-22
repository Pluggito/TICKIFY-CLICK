import { forgetPassword } from "../../Backend/Auth/Auth"
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {

    const [email, setEmail] = useState("");

    const handleForgetPassword = () => {
      forgetPassword(email);
    };

    
    const text = `Enter your email address, and we'll send you a link to reset
    your password.`

return (
<div className="flex justify-center items-center p-5">
<div className="bg-white p-8 px-10 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] 
  max-w-[400px] w-full text-center">
  <h1 className="text-3xl text-gray-800 mb-2.5">Reset Password</h1>
  <p className="text-[0.95rem] text-gray-600 mb-5">
    {text}
  </p>
  <form id="forgot-password-form" onSubmit={(e) => e.preventDefault()}>
    <div className="text-left mb-5">
      <label htmlFor="email" 
        className="block text-sm text-gray-800 mb-1.5">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2.5 text-base border border-gray-300 rounded 
          outline-none focus:border-[#b30d0d] 
          focus:shadow-[0_0_3px_rgba(179,13,13,0.5)]"
      />
    </div>
    <button 
      type="button" 
      onClick={handleForgetPassword} 
      className="w-full bg-[#b30d0d] text-white border-none py-2.5 px-5 
        text-base rounded cursor-pointer transition-colors duration-300
        hover:bg-[#9c0b0b]">
      Send Reset Link
    </button>
  </form>
  <NavLink
    to="/login" 
    className="inline-block mt-4 text-sm text-[#b30d0d] no-underline 
      transition-colors duration-300 hover:text-[#9c0b0b]">
    Back to Login
  </NavLink>
</div>
</div>
  )
}

export default ForgetPassword
