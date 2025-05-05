import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import register from "../assets/register.svg";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";


// import imageUpload from '../../ '
// import { Helmet } from "react-helmet";
// import { AuthContext } from "../Shared_Context/AuthProvider";
// import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import useAuth from "../Hook/useAuth";
import { auth } from "../firebase/_firebase_init";
import { imageUpload } from "./../Shared/Image_api";
import AuthNavbar from "../Sliders/AuthNavbar";

export default function Register() {
  const { google, createUser, updateUserInfo } = useAuth();
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // state for password eye show
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();

    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    const acceptTearm = e.target.checked.checked;
    const image = e.target.image.files[0];
    const photoURL = await imageUpload(image);
    // console.log(photoURL);
    setErrorMsg("");
    setSuccess(false);
    if (!acceptTearm) {
      setErrorMsg("please accept the tearm & conditon");
      return;
    }
    if (Password.length < 6) {
      setErrorMsg("Password Should be at least 6 character");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(Password)) {
      setErrorMsg("Password should be at least one uppercase one lowecase ");
      return;
    }
    // create user, email and password
    try {
      await createUser(Email, Password).then((result) => {
        if (photoURL) {
          updateUserInfo(Name, photoURL);
          setUser({ ...result.user, photoURL: photoURL, displayName: Name });
          toast.success("Registration successfully");
          navigate("/");
        }
      });
    } catch (err) {
      toast.error(err?.message);
    }
    // console.log(Name,Email,Password,photoURL)
  };

  //sign google and github

  const provider = new GoogleAuthProvider();

  // const provider2 = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    google(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setUser(err.message);
      });
  };
  // const handleGitHuLogin = () => {
  //   signInWithPopup(auth, provider2)
  //     .then((result) => {
  //       const user = result.user;

  //       setUser(user)
  //     })
  //     .catch((err) => {

  //       setUser(err,message)
  //     });
  // };
  //sign google and github

  return (
    <>
    <AuthNavbar />
  
    <div className="hero min-h-screen bg-green-50 flex items-center justify-center">
      <Helmet>
        <title>Register</title>
      </Helmet>
  
      <div className="w-full max-w-4xl mx-auto  rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side: Image */}
       <div className="text-center md:w-1/2 lg:text-left w-full lg:w-1/2 flex justify-center lg:mr-28">
              {/* <Lottie animationData={login} className="max-w-xs lg:max-w-sm" /> */}
              <img src={register} alt="" className="w-[800px]" />
              
            </div>
  
        {/* Right Side: Registration Form */}
        <div className="w-full lg:w-1/2 p-6 card bg-white">
          <h1 className="font-bold text-3xl  text-center text-green-600 mb-3">Register</h1>
  
          {/* Google Login Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={handleGoogleLogin}
              className="border border-green-300 text-base rounded-md flex items-center px-3 py-2 hover:bg-green-100 transition"
            >
              <FcGoogle className="text-2xl" />
              <span className="ml-2 text-gray-700">Sign in with Google</span>
            </button>
          </div>
  
          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label text-sm text-gray-700">Name</label>
              <input name="name" type="text" placeholder="Username" className="input input-md input-bordered focus:border-green-500" required />
            </div>
  
            <div className="form-control">
              <label className="label text-sm text-gray-700">Image</label>
              <input name="image" type="file" className="file-input file-input-md file-input-bordered w-full focus:border-green-500" required />
            </div>
  
            <div className="form-control">
              <label className="label text-sm text-gray-700">Email</label>
              <input name="email" type="email" placeholder="Enter your email" className="input input-md input-bordered focus:border-green-500" required />
            </div>
  
            <div className="form-control relative">
              <label className="label text-sm text-gray-700">Password</label>
              <input name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="input input-md input-bordered focus:border-green-500 pr-10" required />
              <div onClick={() => setShowPassword(!showPassword)} className="absolute top-[70%] right-3 transform -translate-y-1/2 cursor-pointer text-gray-600">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
  
            <div className="flex items-center gap-2">
              <input type="checkbox" name="checked" className="checkbox checkbox-sm checkbox-success" />
              <span className="text-sm text-gray-700">Accept Terms & Conditions</span>
            </div>
  
            <div className="form-control">
              <button className="btn btn-md bg-green-500 hover:bg-green-600 text-white font-semibold w-full">Sign Up</button>
            </div>
  
            {errorMsg && <p className="text-red-500 text-sm text-center mt-2">{errorMsg}</p>}
  
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">Already have an account? <span> <Link to={`/login`} className=" text-green-500 hover:bg-green-500  font-semibold ">
                Sign In
              </Link></span>  </p>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  
  
  
  
  
  
  );
}