import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FinancialDetailsPage() {
  const [gstin, setGstin] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");

  const handleFinancialInfo = (e) => {
    e.preventDefault();
    if (gstin && bankName && accountNumber && ifsc) {
      console.log({
        gstin,
        bankName,
        accountNumber,
        ifsc,
      });
      // Move to next step
    }
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
          {["Shop Details", "Financial Details", "Verification"].map((label, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              <div
                className={`h-3.5 w-3.5 rounded-full border-2 ${
                  index === 1 ? "bg-black border-black" : "bg-white border-black"
                }`}
              />
              <span
                className={`mt-2 text-[13px] font-normal ${
                  index === 1 ? "font-semibold underline" : "text-black"
                }`}
              >
                {label}
              </span>
              {index !== 2 && (
                <div className="absolute top-1.5 right-0 w-full h-0.5 border-t border-dotted border-gray-400 z-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-2"
        >
          <h1 className="text-[22px] font-serif italic">Payment Information</h1>
          <p className="text-gray-600 text-[14px] max-w-xl mx-auto leading-relaxed">
            Let us know how you'd like to receive payments for your sales. This information helps us
            send your earnings securely. You can update these details later in your shop settings.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleFinancialInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-5 text-sm"
        >
          {[
            {
              label: "GSTIN Number",
              placeholder: "Enter your 15-digit GSTIN",
              value: gstin,
              setValue: setGstin,
            },
            {
              label: "Bank Account holder",
              placeholder: "Enter account holder's name",
              value: bankName,
              setValue: setBankName,
            },
            {
              label: "Bank Account Number",
              placeholder: "Enter your bank account number",
              value: accountNumber,
              setValue: setAccountNumber,
            },
            {
              label: "IFSC Code",
              placeholder: "Enter your bank's IFSC code",
              value: ifsc,
              setValue: setIfsc,
            },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-6"
            >
              <label className="w-44 text-[15px] text-black font-medium">{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                required
                className="flex-1 border-b border-gray-400 text-[14px] py-1.5 focus:outline-none"
              />
            </motion.div>
          ))}

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="text-center pt-2"
          >
            <Link to={"/verification-documents"}>
              <button
              type="submit"
              className="bg-black text-white text-[14px] px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Next Step
            </button>
            </Link>
          
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
