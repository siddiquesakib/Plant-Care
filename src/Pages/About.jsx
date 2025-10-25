import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Navbar from "../Component/Navbar";
import FooterComponent from "../Component/Footer";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <title>Plant Care | About</title> <Navbar />
      <div className="bg-[#f7f6f1] min-h-screen">
        <section className=" py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              About Us
            </h1>
            <p className="text-gray-500 text-lg md:text-xl">
              We are deeply passionate about plants, Dedicated to helping you
              craft your perfect green space. Our mission is to nurture a closer
              bond with nature, Bringing the beauty and calm of the outdoors
              right into your home.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://images.pexels.com/photos/34368099/pexels-photo-34368099.jpeg"
              alt="Our Story"
              className="w-full rounded-3xl shadow-lg object-cover h-80 md:h-[400px] transition-transform duration-500 hover:scale-105"
            />
            <div>
              <h2 className="text-3xl font-bold  mb-4">Our Story</h2>
              <p className="text-gray-500 mb-4">
                Founded with a love for greenery, we strive to provide the best
                plants and gardening advice for your home and office. Our team
                of plant experts carefully selects each plant to ensure quality
                and sustainability.
              </p>
              <p className="text-gray-500">
                Whether you are a beginner or an experienced gardener, we are
                here to help you make your green dreams come true.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold  mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-xl font-bold  mb-2">Sustainability</h3>
                <p className="text-gray-500">
                  We promote eco-friendly practices and sustainable plant care
                  for a healthier planet.
                </p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-xl font-bold  mb-2">Quality</h3>
                <p className="text-gray-500">
                  Every plant is carefully selected and nurtured to ensure
                  premium quality for our customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-xl font-bold  mb-2">Expert Guidance</h3>
                <p className="text-gray-500">
                  Our team of plant experts provides reliable advice and support
                  to help your plants thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold  mb-6">
              Join Our Plant Community
            </h2>
            <p className="text-gray-500 mb-6">
              Stay updated with tips, new arrivals, and plant care advice by
              subscribing to our newsletter.
            </p>
            <button className="cursor-pointer bg-[#2a7d2e] text-white px-7 py-3 rounded-lg hover:bg-[#222e1f] transition-colors duration-900 text-center">
              Subscribe Now
            </button>
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
};

export default About;
