import { NavLink } from 'react-router-dom'
import Section from '../Components/Section'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { assets } from '../assets/asset';

const Login = ({menu}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

 {/*-----Add Login Auth------- */}
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email && !password){
      setError('Please fill in the required fields')

      setTimeout(() => {
        setError(" ");
      }, 3000);
    }


    else {
      setEmail(''),
      setPassword(''),
      setError('') // Clear the error if validation passes
    }  
  };
  

  return (
    <div className={`relative z-40 flex items-center justify-center bg-inherit ${menu ? "hidden" : "block"} overflow-x-hidden max-w-7xl m-auto`}>


      <div className='max-w-4xl w-full p-10 shadow-xl bg-slate-100 rounded-xl bg-opacity-75 mb-10'>

        {/*------Title and Subtitle-------- */}
        <div className='text-center mb-8'>
          <Section section={'LOGIN TO YOUR ACCOUNT'} />
          <p className='font-space text-md text-gray-600 '> Welcome back! We’re so excited to see you again</p>
        </div>

        <div className='flex flex-wrap md:flex-nowrap justify-between gap-8 py-2'>
          {/*------Login Form------ */}
          <form className='w-full md:w-1/2 py-5'>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email / Phone number"
                className="w-full p-3 rounded-lg bg-transparent text-black hover:bg-slate-50 shadow-md focus:outline-none"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id="phone"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full p-3 bg-transparent text-black rounded-lg hover:bg-slate-50 shadow-md focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              autoComplete="off"
            />
            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-black"
            >
              {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
            </button>
          </div>

            {error && (
            <p className='text-red-700 font-semibold mb-4'>{error}</p>
          )}
            <button className={`w-full p-3 bg-black text-slate-200 font-semibold rounded opacity-65 hover:opacity-90 ${menu ? "hidden" : ""}`}
            onClick={handleSubmit} >
              Login to Your Account
            </button>
            <p className="mt-3 text-sm text-gray-600">
              Don’t have an account yet?{" "}
              <NavLink to="/signup" className="text-[#b30d0d] hover:underline font-semibold text-md">
                Register now!
              </NavLink>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
          <hr className="flex-grow border-gray-300" />
          <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center rounded-full">
            OR
          </div>
          <hr className="flex-grow border-gray-300" />
        </div>



           {/* Social Login */}
           <div className="w-full md:w-1/2 space-y-4 py-5">
            <button className="w-full p-3 flex items-center justify-center gap-4  text-black text-md font-semibold shadow-md rounded-lg hover:bg-black hover:text-slate-100 duration-500 transition-all ease hover:opacity-90">
              <span> <img
              src={assets.google_icon}
              alt="Google"
              className="w-[25px] mr-3"
            /></span> Sign in with Google
            </button>
            <button className="w-full p-3 flex items-center justify-center gap-4  text-black text-md font-semibold shadow-md rounded-lg hover:bg-black hover:text-slate-100 duration-500 transition-all ease hover:opacity-90">
              <span><FontAwesomeIcon icon={faXTwitter}/></span> Sign in with Twitter
            </button>
            <button className="w-full p-3 flex items-center justify-center gap-4  text-black text-md font-semibold shadow-md rounded-lg hover:bg-black hover:text-slate-100 duration-500 transition-all ease hover:opacity-90">
              <span><FontAwesomeIcon icon={faApple}/></span> Sign in with Apple 
            </button>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Login
