import React from "react";
import Navbar from "../Component/Navbar";
import FAQ from "../Component/FAQ";
import FooterComponent from "../Component/Footer";

const FAQPage = () => {
  return (
    <>
      <title>Plant Care | FAQ </title> <Navbar />
      <div className="bg-linear-to-b from-green-50/50 via-white to-emerald-50/30 min-h-screen">
        <section className=" py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Find answers to common questions about our plant care services,
              authentication, and more.
            </p>
          </div>
        </section>
        <FAQ />
      </div>
      <FooterComponent />
    </>
  );
};

export default FAQPage;
