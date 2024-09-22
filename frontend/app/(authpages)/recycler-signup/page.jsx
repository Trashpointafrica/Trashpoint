import React from "react";
import {person} from "@/app/assets/images";
import Image from "next/image";

const RecyclerSignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className=" shadow-lg rounded-sm w-[200px]max-w-2xl flex flex-cols-1 md:grid-cols-2">
        {/* Left side form section */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold  text-blue-800">
            Sign Up as a Recycler
          </h1>
          <div className= "flex p-6 gap-8 rounded-md ">
		  <form className="space-y-4 border border-[--sidebarGradient] py-1 px-6 rounded-md  ">
            <div className="mt-28">
              <span className="block text-sm font-medium text-gray-700">
                Full Name
              </span>
              <input
                type="text"
                placeholder="Name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>
            <span className="block text-sm font-medium text-gray-700">
              Create Password
            </span>
            <div className="relative">
              <input
                type="password"
                placeholder="input password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
              />
              {/* Eye icon for password toggle (optional, can be replaced with an actual icon) */}
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                🔒
              </span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Email Address
              </span>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>
            <div>
              <button className="w-full px-4 py-3 text-white primarybtn rounded-md focus:outline-none hover:bg-green-600">
                Sign Up
              </button>
              <p className="text-sm text-center text-gray-700 mt-4">
                Already have an account?{" "}
                <a href="#" className="text-green-500">
                  Login?
                </a>
              </p>
              <p className="text-sm text-center text-gray-700">
                By signing up, you agree to <span></span>
                <a href="#" className="text-green-500 p-1">
                  Trashpoint by Kyrus
                </a>
                <a href="#" className="text-blue-800">
                  Terms and Conditions
                </a>
              </p>
              <p className="text-sm text-center text-gray-700">
                And our{" "}
                <a href="#" className="text-blue-800">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
		  <div>
			<Image
				src={person}
				width={0}
				height={0}
				sizes="10vw"
				style={{ width: "500px", height: "auto" }}
				className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-md justify-center"
				/>
		  </div>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclerSignUp;
