// 'use client'

// import Link from "next/link";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <>
      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-10">
          {/* Left Side */}
          <div className="flex items-center justify-start">
            {/* Logo */}
            <h1 className="text-3xl font-bold text-center sm:text-left">Hekto</h1>
          </div>

          {/* Center Section for Navigation Links */}
          <div className="flex items-center justify-center gap-x-8 w-full sm:w-auto">
            {/* Navigation Links */}
            <ul className="hidden sm:flex gap-x-8">
              <li>
                <a className="hover:text-[#FB2E86] transition-colors" href={"/"}>
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-[#FB2E86] transition-colors" href={"/pages"}>
                  Pages
                </a>
              </li>
              <li>
                <a className="hover:text-[#FB2E86] transition-colors" href={"/products"}>
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-[#FB2E86] transition-colors" href={"/blog"}>
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-[#FB2E86] transition-colors" href={"/shop"}>
                  Shop
                </a>
              </li>
              <li>
                <a className="hover:text-[#FB2E86] transition-colors" href={"/contact"}>
                  Contact
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <IoSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search and Navigation */}
      <div className="w-full sm:hidden flex flex-col px-5 py-2 gap-y-2">
        {/* Mobile Search Bar */}
        <div className="flex items-center border rounded-md overflow-hidden bg-gray-100">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 text-sm outline-none bg-transparent"
          />
          <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
            <IoSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex justify-around text-sm gap-4">
          <li>
            <a className="hover:text-[#FB2E86] transition-colors" href={"/"}>
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#FB2E86] transition-colors" href={"/pages"}>
              Pages
            </a>
          </li>
          <li>
            <a className="hover:text-[#FB2E86] transition-colors" href={"/products"}>
              Products
            </a>
          </li>
          <li>
            <a className="hover:text-[#FB2E86] transition-colors" href={"/blog"}>
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-[#FB2E86] transition-colors" href={"/shop"}>
              Shop
            </a>
          </li>
          <li>
            <a className="hover:text-[#FB2E86] transition-colors" href={"/contact"}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;