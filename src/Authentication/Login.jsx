import React, { useContext } from "react";
// import login from '../assets/login.json'
// import Lottie from "lottie-react";
import login from '../assets/login.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Shared_Context/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hook/useAuth";
import AuthNavbar from "../Sliders/AuthNavbar";
export default function Login() {

  const navigate = useNavigate()
  const location =useLocation()
  const from = location?.state || '/'
  // const {signIn,google} = useContext(AuthContext)
  const {signIn,google} = useAuth()

  const handleGoogle = async () => {
   try{
    await google()
    toast.success("Sign in successfuly")
    navigate(from,{replace:true})
   }catch(err){
    toast.error(err?.message)
   }
  }

  const handleSignIn =async (e) => {
    e.preventDefault()
    const form = e.target;
    const email= form.email.value
    const password= form.password.value

    try{
      await signIn(email,password)
      toast.success("SignIn successfull")
      navigate(from , {replace:true})
    }catch(err){
      toast.error(err?.message)
    }
  }  

  return (
<>
      {/* Navbar */}
      <AuthNavbar />
      <div className="hero min-h-screen bg-green-50 py-10">
        <Helmet>
          <title>Login</title>
        </Helmet>

        <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center gap-12">
          {/* Login Form */}
          <div className="card bg-white w-full max-w-md shadow-lg rounded-lg p-8 border border-orange-200">
            <h2 className="text-4xl font-bold text-center text-green-600 mb-4">Sign In</h2>
            <p className="text-center text-gray-500 mb-4">Sign in with a social account</p>

            {/* Google Sign-In Button */}
            <div className="form-control mb-6">
              <button
                onClick={handleGoogle}
                className="border-2 border-green-300 text-xl rounded-full flex items-center justify-center py-2 px-4 hover:bg-orange-100 transition"
              >
                <FcGoogle className="text-3xl" />
                <span className="ml-2 text-gray-600">Sign in with Google</span>
              </button>
            </div>

            {/* Divider */}
            <div className="divider text-green-500">OR</div>

            {/* Login Form */}
            <form onSubmit={handleSignIn}>
              {/* Email Field */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg text-gray-700">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered focus:border-green-500"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg text-gray-700">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered focus:border-green-500"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-sm text-green-500">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control">
                <button className="btn bg-green-500 hover:bg-green-600 text-white font-semibold w-full">
                  Login
                </button>
              </div>

              {/* Registration Link */}
               <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">You have no account? <span>  <Link to={'/registration'} className=" text-green-500 hover:bg-green-500  font-semibold ">
                  Registration
                </Link></span>  </p>
                            
                          </div>
           
            </form>
          </div>

          {/* Image Section */}
          <div className="text-center md:w-1/2 lg:text-left w-full lg:w-1/2 flex justify-center">
        {/* <Lottie animationData={login} className="max-w-xs lg:max-w-sm" /> */}
        <img src={login} alt="" className="w-[650px]" />
        
      </div>
        </div>
      </div>
</>

  
  
  );
}