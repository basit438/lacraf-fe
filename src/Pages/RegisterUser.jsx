import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordShort = password.length > 0 && password.length < 8;
  const isMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
            <h1 className="text-2xl italic font-medium">
              Discover <span className="italic">Authentic</span><br />Handcrafted Treasures
            </h1>
            <p className="text-sm text-gray-600">
              Create your account to explore premium artisanal products from skilled local creators.
            </p>
          </div>

          <form className="space-y-5 overflow-y-auto max-h-[65vh] pr-2">
            {/* Name Fields */}
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 border-b border-gray-400 focus:outline-none py-2 text-sm" />
              <input type="text" placeholder="Last Name" className="w-1/2 border-b border-gray-400 focus:outline-none py-2 text-sm" />
            </div>

            {/* Email */}
            <input type="email" placeholder="Email" className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm" />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none py-2 pr-10 text-sm"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
              {isPasswordShort && (
                <p className="text-red-500 text-xs mt-1">Password should be at least 8 characters</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none py-2 pr-10 text-sm"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
              >
                {showConfirm ? "🙈" : "👁️"}
              </span>
              {isMismatch && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full text-sm font-semibold"
            >
              Register
            </button>

            {/* Terms */}
            <p className="text-[10px] text-center text-gray-400">
              By registering, you agree to our
              <a href="#" className="underline ml-1">Terms of Service</a>,
              <a href="#" className="underline ml-1">Privacy Policy</a>, and
              <a href="#" className="underline ml-1">Cookies Policy</a>.
            </p>

            {/* Divider */}
            <div className="my-6 border-t border-gray-300 relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 text-sm text-gray-400">Or</span>
            </div>

            {/* Social Buttons */}
            <div className="space-y-3">
              <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2">
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="h-5 w-5" />
                <span className="text-sm">Continue with Google</span>
              </button>
              <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2">
                <img src="https://img.icons8.com/color/24/000000/facebook-new.png" alt="Facebook" className="h-5 w-5" />
                <span className="text-sm">Continue with Facebook</span>
              </button>
            </div>

            <p className="text-sm text-center mt-4">
              Already have an account? <Link to={"/login-user"}>Login here</Link>
            </p>
          </form>
        </motion.div>
      </div>

      {/* Right Side - Image with animation */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="hidden lg:block w-1/2 h-full overflow-hidden"
      >
        <img src="/pashmina4.jpg" alt="Crafted fabric" className="h-full w-full object-cover" />
      </motion.div>
    </motion.div>
  );
};

export default RegisterUser;
