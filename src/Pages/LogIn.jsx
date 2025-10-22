import React, { useState } from "react";
import { Link } from "react-router";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const LogIn = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f6f1]">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Login Now!
            </h2>
            <p className="text-gray-600">Welcome back to GreenNest</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[13px] top-[45px] cursor-pointer z-50"
                >
                  {show ? <VscEye size={20} /> : <VscEyeClosed size={20} />}
                </span>
              </div>

              <div className="text-right">
                <Link className="text-sm text-green-600 hover:text-green-700 font-medium">
                  Forget Password?
                </Link>
              </div>

              <button
                type="button"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to={"/auth/register"}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
