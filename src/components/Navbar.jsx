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

  const activeStyleDesktop = "text-black font-bold underline underline-offset-4";
  const activeStyleMobile = "underline underline-offset-4";

  const toggleMobileMenu = () => {
    setMobileNav(prev => !prev);
  }

  return (
    <>
      <nav className="md:px-8 md:py-5 top-0 z-10 flex items-center justify-between w-full px-4 py-4 text-sm font-light bg-white border-b-2">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="text-lg font-semibold">
            Shopi
          </NavLink>
        </div>

        <ul className="md:flex items-center hidden gap-4">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeStyleDesktop : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allproducts" className={({ isActive }) => (isActive ? activeStyleDesktop : undefined)}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/mens_clothing" className={({ isActive }) => (isActive ? activeStyleDesktop : undefined)}>
              Men's Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to="/womens_clothing" className={({ isActive }) => (isActive ? activeStyleDesktop : undefined)}>
              Women's Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to="/jewelery" className={({ isActive }) => (isActive ? activeStyleDesktop : undefined)}>
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyleDesktop : undefined)}>
              Electronics
            </NavLink>
          </li>
        </ul>

        <ul className="md:flex items-center hidden gap-4">
          <li>
            <NavLink to="/myorder" className={({ isActive }) => (isActive ? activeStyleDesktop : undefined)}>
              My Orders
            </NavLink>
          </li>
          <li>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in">Sign In</Link>
            </SignedOut>
          </li>
          <li>
            <NavLink to="/cart">
              <div className="relative flex items-center gap-2">
                <ShoppingCartIcon className="text-black-500 w-6 h-6 cursor-pointer" />
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {totalQuantity}
                </span>
              </div>
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <div className="relative flex items-center gap-2 mx-2">
            <ShoppingCartIcon className="w-6 h-6 text-black cursor-pointer" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              {totalQuantity}
            </span>
          </div>
          <button onClick={toggleMobileMenu} className="text-black-500 focus:outline-none">
            {mobileNav ? <XMarkIcon className="text-black-500 w-6 h-6 cursor-pointer" /> : <Bars3Icon className="text-black-500 w-6 h-6 cursor-pointer" />}
          </button>
        </div>

        <div className={`fixed inset-y-0 left-0 w-64 bg-black text-white transform transition-transform duration-300 ease-in-out md:hidden z-20 ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex flex-col p-4">
            <div className='flex justify-between'>
              <NavLink to="/" className="mb-4 text-lg font-semibold">Shopi</NavLink>
              <button onClick={toggleMobileMenu} className="text-black-500 focus:outline-none">
                {mobileNav ? <XMarkIcon className="text-black-500 w-6 h-6 cursor-pointer" /> : undefined}
              </button>

            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink to="/allproducts" className={({ isActive }) => (isActive ? activeStyleMobile : undefined)}>
                  All
                </NavLink>
              </li>
              <li>
                <NavLink to="/mens_clothing" className={({ isActive }) => (isActive ? activeStyleMobile : undefined)}>
                  Men's Clothing
                </NavLink>
              </li>
              <li>
                <NavLink to="/womens_clothing" className={({ isActive }) => (isActive ? activeStyleMobile : undefined)}>
                  Women's Clothing
                </NavLink>
              </li>
              <li>
                <NavLink to="/jewelery" className={({ isActive }) => (isActive ? activeStyleMobile : undefined)}>
                  Jewelery
                </NavLink>
              </li>
              <li>
                <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyleMobile : undefined)}>
                  Electronics
                </NavLink>
              </li>
              <li>
                <NavLink to="/myorder" className={({ isActive }) => (isActive ? activeStyleMobile : undefined)}>
                  My Orders
                </NavLink>
              </li>
              <li>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <Link to="/sign-in">Sign In</Link>
                </SignedOut>
              </li>
              <li>
                <NavLink to="/cart">
                  <div className="relative flex items-center gap-2">
                    <ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" />
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
