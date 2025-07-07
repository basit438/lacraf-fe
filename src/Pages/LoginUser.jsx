import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginUser = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex h-screen overflow-hidden font-sans"
    >
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md space-y-6"
        >
          <div>
            <h2 className="text-2xl italic font-medium">Welcome Back</h2>
            <p className="text-sm text-gray-600">
              Log in to access your account, track orders, and enjoy faster checkout.
            </p>
          </div>

          <form className="space-y-5 overflow-y-auto max-h-[65vh] pr-2">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="underline text-gray-500">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full text-sm"
            >
              Log In
            </button>

            <p className="text-[10px] text-center text-gray-400">
              By logging in, you agree to our
              <a href="#" className="underline ml-1">Terms of Service</a>,
              <a href="#" className="underline ml-1">Privacy Policy</a>, and
              <a href="#" className="underline ml-1">Cookies Policy</a>.
            </p>

            <div className="my-6 border-t border-gray-300 relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 text-sm text-gray-400">Or</span>
            </div>

            {/* Social buttons */}
            <div className="space-y-3">
              <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                <span className="text-sm">Continue with Google</span>
              </button>
              <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2">
                <img src="https://www.svgrepo.com/show/157818/facebook.svg" alt="Facebook" className="h-5 w-5" />
                <span className="text-sm">Continue with Facebook</span>
              </button>
            </div>

            <p className="text-sm text-center mt-4">
              New to LaCraf? <Link to={"/register-user"}>Register user</Link>
            </p>
          </form>
        </motion.div>
      </div>

      {/* Right Side - Image with slide-in animation */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="hidden lg:block w-1/2 h-full overflow-hidden"
      >
        <img
          src="/pashmina4.jpg"
          alt="Fabric"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoginUser;
