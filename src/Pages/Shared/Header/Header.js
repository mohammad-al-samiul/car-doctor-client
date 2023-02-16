import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../Assets/logo.svg';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/');
        toast.success('Log out Success');
      })
      .catch((error) => console.log(error.message));
  };
  console.log(user);
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
                <Link to={'/contact'}>Contact</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>

              {user?.uid ? (
                <>
                  <li>
                    <Link to={'/services'}>Services</Link>
                  </li>
                  <li>
                    <Link to={'/orders'}>Orders</Link>
                  </li>
                  <li>
                    <Link to={'/blog'}>Blog</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={'/login'}>Sign In</Link>
                  </li>
                  <li>
                    <Link to={'/signup'}>Sign Up</Link>
                  </li>
                </>
              )}
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
                to={'/contact'}
                className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                Contact
              </Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link
                    to={'/services'}
                    className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/orders'}
                    className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/blog'}
                    className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to={'/login'}
                    className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/signup'}
                    className="active:bg-violet-700 focus:ring  focus:ring-violet-500">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            target={'_blank'}
            href="https://github.com/mohammad-al-samiul"
            className=""
            rel="noreferrer">
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
