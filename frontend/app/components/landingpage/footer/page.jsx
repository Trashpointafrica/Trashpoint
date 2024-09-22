import React from "react";
import { kyruslogo } from "@/app/assets/images";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-black text-white w-full">
      <div className="flex justify-between items-start py-16 pb-4 px-4 md:px-24 text-gray-700 flex-wrap">
        <div className="grid-cols-1 grid">
          <Image
            src={kyruslogo}
            alt="kyruslogo"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "6rem", height: "auto" }}
            unoptimized
          />
          <p className="text-sm max-w-xs text-white">
            Kyrus creates a streamlined platform that bridges individuals,
            businesses, and recycling companies, simplifying waste management
            and recycling while offering opportunities to earn rewards by
            turning waste into value.
          </p>
        </div>
        <div className="flex flex-col text-white pt-8 md:mt-0">
          <h2 className="text-2xl font-bold P-2">Quick Links</h2>
          <div className="grid-cols-2 grid justify-between items-center right-3">
            <ul className="flex flex-col gap-2">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
            <ul className="grid-cols-1 grid left">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/terms">Terms and Condition</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-white left-0 pt-8 md:mt-0">
          <h2 className="text-2xl font-bold P-2 mb-4">Connect With Us</h2>
          <div className="flex gap-3 mb-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={18} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={18} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
          </div>
          <ul className=" ">
            <div className="flex flex-col-reverse gap-1">
              <li className="text-green-500 text-md">Our Address</li>
              <li className="mt-1 ">
                22 Ikhaladeran street, off Aerodrome close,
                <br className="hidden sm:inline" /> Ekenhuan road, Benin City Edo
                state.
              </li>
            </div>
            <div className="flex flex-col gap-2">
              <li className="text-green-500 mt-6 text-md">Get in touch</li>
              <li className="text-sm">+234123456789</li>
            </div>
          </ul>
        </div>
      </div>
      <p className="w-full text-center bg-[rgb(9,9,9)] p-6">
        Copyright © {year} Kyrus, Inc.
      </p>
    </footer>
  );
};

export default Footer;
