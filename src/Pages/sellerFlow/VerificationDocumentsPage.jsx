import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function VerificationDocumentsPage() {
  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    gi: null,
    business: null,
  });

  const handleFileChange = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted files:", files);
    // Submit logic here
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-12 bg-white font-sans"
    >
      <div className="w-full max-w-3xl space-y-10">
        {/* Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center"
        >
          {[
            { label: "Shop Details", path: "/shop-details" },
            { label: "Financial Details", path: "/financial-details" },
            { label: "Verification", path: "/verification" },
          ].map((step, index, arr) => (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              <div
                className={`h-3.5 w-3.5 rounded-full border-2 ${
                  index === 2 ? "bg-black border-black" : "bg-white border-black"
                }`}
              />
              <Link to={step.path}>
                <span
                  className={`mt-2 text-[13px] font-normal transition ${
                    index === 2 ? "font-semibold underline" : "text-black hover:underline"
                  }`}
                >
                  {step.label}
                </span>
              </Link>
              {index < arr.length - 1 && (
                <div className="absolute top-1.5 right-[-50%] w-full h-0.5 border-t border-dotted border-gray-400 z-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Title + Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-2"
        >
          <h1 className="text-[22px] font-serif italic">Verification Documents</h1>
          <p className="text-gray-600 text-[14px] max-w-xl mx-auto leading-relaxed">
            Please share your identity and business documents so we can verify your shop. Our team
            will review these within 72 hours. All your documents are kept secure and private.
          </p>
        </motion.div>

        {/* Upload Inputs */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 text-sm"
        >
          {[
            {
              label: "Aadhaar Card",
              description: "Both sides of your Aadhaar card in clear quality",
              key: "aadhaar",
            },
            {
              label: "PAN Card",
              description: "Clear image of your PAN card",
              key: "pan",
            },
            {
              label: "GI Certificate",
              description: "Clear image of your GI Certificate",
              key: "gi",
            },
            {
              label: "Business Registration",
              description: "",
              key: "business",
            },
          ].map((field, i) => (
            <motion.div
              key={field.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              className="flex flex-col"
            >
              <span className="text-black font-semibold text-base font-sans">
                {field.label}
              </span>
              {field.description && (
                <p className="text-[13px] text-gray-500 font-sans leading-snug">
                  {field.description}
                </p>
              )}
              <label className="mt-2 border border-gray-300 px-4 py-2 text-[15px] rounded cursor-pointer text-center text-black hover:border-black transition">
                Upload Photos
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => handleFileChange(e, field.key)}
                  className="hidden"
                />
              </label>
              {files[field.key]?.name && (
                <span className="text-xs text-gray-600 truncate mt-1">
                  {files[field.key].name}
                </span>
              )}
            </motion.div>
          ))}
        </form>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="flex justify-between pt-6"
        >
          <Link to="/financial-details">
            <button className="border border-black px-5 py-1.5 text-sm rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
              ← Back
            </button>
          </Link>
          <button
            type="submit"
            className="bg-black text-white px-6 py-1.5 text-sm rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
          >
            Submit <FaChevronDown size={10} />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}