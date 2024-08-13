import { useState, useContext, useEffect } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { getTotalQuantity } = useContext(ProductContext);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(getTotalQuantity());
  }, [getTotalQuantity]);

  const activeStyleDesktop = "text-white font-bold border-b-2 border-teal-500";
  const activeStyleMobile = "border-b-2 border-teal-500";

  const toggleMobileMenu = () => {
    setMobileNav(prev => !prev);
  }

  return (
    <>
      <nav className="md:px-8 md:py-5 top-0 z-10 flex items-center justify-between w-full px-4 py-4 text-sm font-light text-white bg-gray-900 shadow-lg">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="hover:text-teal-400 text-lg font-semibold text-teal-500 transition-colors duration-300">
            Shopi
          </NavLink>
        </div>

        <ul className="md:flex items-center hidden gap-6">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeStyleDesktop : "hover:text-teal-400 transition-colors duration-300")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allproducts" className={({ isActive }) => (isActive ? activeStyleDesktop : "hover:text-teal-400 transition-colors duration-300")}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/mens_clothing" className={({ isActive }) => (isActive ? activeStyleDesktop : "hover:text-teal-400 transition-colors duration-300")}>
              Men's Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to="/womens_clothing" className={({ isActive }) => (isActive ? activeStyleDesktop : "hover:text-teal-400 transition-colors duration-300")}>
              Women's Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to="/jewelery" className={({ isActive }) => (isActive ? activeStyleDesktop : "hover:text-teal-400 transition-colors duration-300")}>
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyleDesktop : "hover:text-teal-400 transition-colors duration-300")}>
              Electronics
            </NavLink>
          </li>
        </ul>

        <ul className="md:flex items-center hidden gap-6">
          <li>
            <NavLink to="/myorder" className={({ isActive }) => (isActive ? activeStyleDesktop : "hover:text-teal-400 transition-colors duration-300")}>
              My Orders
            </NavLink>
          </li>
          <li>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in" className="hover:text-teal-400 transition-colors duration-300">Sign In</Link>
            </SignedOut>
          </li>
          <li>
            <NavLink to="/cart">
              <div className="relative flex items-center gap-2">
                <ShoppingCartIcon className="hover:text-teal-400 w-6 h-6 text-teal-500 transition-colors duration-300 cursor-pointer" />
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {totalQuantity}
                </span>
              </div>
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <div className="relative flex items-center gap-2 mx-2">
            <ShoppingCartIcon className="hover:text-teal-400 w-6 h-6 text-teal-500 transition-colors duration-300 cursor-pointer" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              {totalQuantity}
            </span>
          </div>
          <button onClick={toggleMobileMenu} className="focus:outline-none text-teal-500">
            {mobileNav ? <XMarkIcon className="hover:text-teal-400 w-6 h-6 transition-colors duration-300 cursor-pointer" /> : <Bars3Icon className="hover:text-teal-400 w-6 h-6 transition-colors duration-300 cursor-pointer" />}
          </button>
        </div>

        <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out md:hidden z-20 ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex flex-col p-4">
            <div className='flex justify-between mb-6'>
              <NavLink to="/" className="text-lg font-semibold text-teal-500">Shopi</NavLink>
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <XMarkIcon className="hover:text-teal-400 w-6 h-6 text-teal-500 transition-colors duration-300 cursor-pointer" />
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              <li>
                <NavLink to="/allproducts" className={({ isActive }) => (isActive ? activeStyleMobile : "hover:text-teal-400 transition-colors duration-300")}>
                  All
                </NavLink>
              </li>
              <li>
                <NavLink to="/mens_clothing" className={({ isActive }) => (isActive ? activeStyleMobile : "hover:text-teal-400 transition-colors duration-300")}>
                  Men's Clothing
                </NavLink>
              </li>
              <li>
                <NavLink to="/womens_clothing" className={({ isActive }) => (isActive ? activeStyleMobile : "hover:text-teal-400 transition-colors duration-300")}>
                  Women's Clothing
                </NavLink>
              </li>
              <li>
                <NavLink to="/jewelery" className={({ isActive }) => (isActive ? activeStyleMobile : "hover:text-teal-400 transition-colors duration-300")}>
                  Jewelery
                </NavLink>
              </li>
              <li>
                <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyleMobile : "hover:text-teal-400 transition-colors duration-300")}>
                  Electronics
                </NavLink>
              </li>
              <li>
                <NavLink to="/myorder" className={({ isActive }) => (isActive ? activeStyleMobile : "hover:text-teal-400 transition-colors duration-300")}>
                  My Orders
                </NavLink>
              </li>
              <li>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <Link to="/sign-in" className="hover:text-teal-400 transition-colors duration-300">Sign In</Link>
                </SignedOut>
              </li>
              <li>
                <NavLink to="/cart">
                  <div className="relative flex items-center gap-2">
                    <ShoppingCartIcon className="hover:text-teal-400 w-6 h-6 text-teal-500 transition-colors duration-300 cursor-pointer" />
                    <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                      {totalQuantity}
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
