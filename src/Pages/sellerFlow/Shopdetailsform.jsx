import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";

export default function ShopDetailsPage() {
  const [shopName, setShopName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [storeDescription, setStoreDesc] = useState("");
  const [businessAddress, setBusinessAdd] = useState("");

  const handleShopInfo = (e) => {
    e.preventDefault();
    if (shopName && contactNumber && storeDescription && businessAddress) {
      console.log({
        shopName,
        contactNumber,
        storeDescription,
        businessAddress,
      });
      // Redirect or next step here
    }
  };

  return (
    <section className="h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-12 bg-white font-sans">
      <div className="w-full max-w-3xl space-y-10">
        {/* Stepper */}
        <div className="flex justify-between items-center">
          {["Shop Details", "Financial Details", "Verification"].map((label, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              {/* Circle */}
              <div
                className={`h-3.5 w-3.5 rounded-full border-2 ${
                  index === 0 ? "bg-black border-black" : "bg-white border-black"
                }`}
              />
              {/* Label */}
              <span className="mt-2 text-[13px] text-black font-normal">{label}</span>
              {/* Dotted Line */}
              {index !== 2 && (
                <div className="absolute top-1.5 right-0 w-full h-0.5 border-t border-dotted border-gray-400 z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Welcome Section */}
        <div className="text-center space-y-2">
          <h1 className="text-[22px] font-serif italic font-normal">Welcome, Hasan</h1>
          <p className="text-gray-600 text-[14px] leading-relaxed max-w-xl mx-auto">
            Tell us about your craft business. We'll help you get set up as a seller on LaCraft.
            Don’t worry – you can always update these details later in your shop settings.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleShopInfo} className="space-y-5 text-sm">
          <div className="flex items-center gap-6">
            <label className="w-44 text-[15px] text-black font-medium">Shop’s Name</label>
            <input
              type="text"
              placeholder="What would you like to call your shop?"
              className="flex-1 border-b border-gray-400 text-[14px] py-1.5 focus:outline-none"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-44 text-[15px] text-black font-medium">Contact Number</label>
            <input
              type="text"
              placeholder="10-digit mobile number for shop enquiries"
              className="flex-1 border-b border-gray-400 text-[14px] py-1.5 focus:outline-none"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-44 text-[15px] text-black font-medium">Shop’s Address</label>
            <input
              type="text"
              placeholder="Where do you create your products?"
              className="flex-1 border-b border-gray-400 text-[14px] py-1.5 focus:outline-none"
              value={businessAddress}
              onChange={(e) => setBusinessAdd(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-44 text-[15px] text-black font-medium">Shop’s Description</label>
            <input
              type="text"
              placeholder="Tell customers what you make and sell (50–200 characters)"
              className="flex-1 border-b border-gray-400 text-[14px] py-1.5 focus:outline-none"
              value={storeDescription}
              onChange={(e) => setStoreDesc(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-black text-white text-[14px] px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
