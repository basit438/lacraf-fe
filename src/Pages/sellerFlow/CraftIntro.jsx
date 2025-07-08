import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CraftIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex h-screen w-full font-sans overflow-hidden"
    >
      {/* Left Side */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="w-1/2 flex items-center justify-center px-12 py-10"
      >
        <div className="flex flex-col justify-between h-full w-full max-w-md">
          {/* Header + Intro */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold italic font-quirk leading-snug">
              <span className="block">Share Your Craft with</span>
              <span className="block italic">the World</span>
            </h1>

            <p className="text-gray-600 text-sm leading-normal font-mozaic">
              Join our community of skilled artisans and connect your handcrafted treasures with appreciative customers.
            </p>

            <div>
              <h2 className="font-semibold text-sm mb-1">What to expect next:</h2>
              <p className="text-gray-600 text-sm leading-normal font-mozaic">
                Thank you for your interest in sharing your craftsmanship with our community. We've designed a simple three-step process to bring your handmade treasures to appreciative customers.
              </p>
            </div>
          </div>

          {/* Steps with Dotted Line */}
          <div className="relative mt-4 ml-2">
            {/* Dotted Line */}
            <div className="absolute left-2.5 top-3 bottom-3 w-px border-l border-dotted border-gray-400 z-0" />

            <div className="space-y-4 relative z-10">
              {[
                {
                  title: "Shop Details",
                  desc: "Tell us about you and your craft",
                },
                {
                  title: "Financial Details",
                  desc: "Set up your payment information",
                },
                {
                  title: "Verification",
                  desc: "Submit required documents for account verification",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                >
                  <div className="h-5 w-5 border-2 border-gray-400 rounded-full flex items-center justify-center mt-1 bg-white z-10">
                    <div className="h-2 w-2 bg-gray-400 rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.4 }}
            className="mt-4"
          >
            <Link to={"/shop-details"}>
              <button className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
                Begin Your Journey
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Image comes from outside screen */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="w-1/2 h-full relative"
      >
        <img
          src="/artisan.png"
          alt="Artisan crafting"
          className="h-full w-full object-center"
        />
      </motion.div>
    </motion.div>
  );
}
