import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.svg';

const Header = () => {
  return (
    <>
      <div className="navbar mb-12 bg-base-100 px-2">
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
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/home'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/services'}>Services</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="normal-case ">
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={'/home'} className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={'/about'}
                className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                About
              </Link>
            </li>
            <li>
              <Link
                to={'/services'}
                className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                Services
              </Link>
            </li>
            <li>
              <Link to={'/blog'} className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={'/contact'}
                className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <>
            <form action="" className="relative w-max mr-4">
              <input
                type="search"
                className="peer cursor-pointer relative z-10 h-11 w-11 rounded-full border bg-transparent pl-6 outline-none focus:w-full focus:cursor-text focus:border-grey-300 focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 my-auto h-12 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-grey-300 peer-focus:stroke-grey-800"
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

          <a className="">
            <button className="font-semibold hover:text-white  px-4  bg-transparent hover:bg-red-500 text-red-500 border border-red-500 hover:border-transparent rounded h-12  ">
              Appointment
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
