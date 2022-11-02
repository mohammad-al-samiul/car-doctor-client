import React from 'react';
import logo from '../../../Assets/logo.svg';

const Header = () => {
  return (
    <div>
      <div className="navbar mb-12 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case ">
            <img className="w-20" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <>
            <form action="" className="relative w-max mr-2">
              <input
                type="search"
                className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-6 outline-none focus:w-full focus:cursor-text focus:border-grey-300 focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-grey-300 peer-focus:stroke-grey-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </>
          <a className="mx-2 lg:block hidden">
            <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Button
            </button>
          </a>
          <a href="">
            <button
              className="button button-gradient button-pink mr-3 hidden"
              data-ripple-light="true">
              Appointment
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
