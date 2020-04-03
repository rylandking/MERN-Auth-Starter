import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {


  const authAuthLinks = (
    <Fragment>
      <span className="ml-3 inline-flex rounded-md shadow-md">
        <span className="inline-flex rounded-md shadow-xs">
          <Link onClick={logout} to="#!" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Log out
          </Link>
        </span>
      </span>
    </Fragment >
  );

  const guestAuthLinks = (
    <Fragment>
      <span className="inline-flex rounded-md shadow-md">
        <span className="inline-flex rounded-md shadow-xs">
          <Link to="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Sign up
          </Link>
        </span>
      </span>
      <span className="ml-3 inline-flex rounded-md shadow-md">
        <span className="inline-flex rounded-md shadow-xs">
          <Link to="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-purple-600 bg-white hover:bg-purple-100 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Log in
          </Link>
        </span>
      </span>
    </Fragment>
  );

  const authNavLinks = (
    <Fragment>
      <div className="flex h-16">
        <div className="hidden sm:ml-6 sm:flex">
          <Link to="/trends" className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
            Accounts
          </Link>
          <Link to="/transactions" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
            Transactions
          </Link>
          <Link to="/trends" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
            Trends
          </Link>
        </div>
      </div>
    </Fragment>
  );

  const guestNavLinks = (
    <Fragment>
      {/* <div className="hidden md:block md:ml-10">
        <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Book</Link>
      </div> */}
    </Fragment>
  );

  return (
    <div data-todo-x-data="{ open: false }" className="relative pt-6 pb-16">
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/">
              <img className="h-8 w-auto sm:h-10" src="/img/moolah_logo_purple_on_white.png" alt="Moolah" />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button data-todo-at-click="open = true" type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {!loading && (<Fragment>{isAuthenticated ? authNavLinks : guestNavLinks}</Fragment>)}
        </div>
        <div className="hidden md:block text-right">
          {!loading && (<Fragment>{isAuthenticated ? authAuthLinks : guestAuthLinks}</Fragment>)}
        </div>
      </nav>

      <div className="absolute top-0 inset-x-0 p-2 hidden md:hidden">
        <div data-todo-x-show="open" data-todo-x-transition-enter="duration-150 ease-out" data-todo-x-transition-enter-start="opacity-0 scale-95" data-todo-x-transition-enter-end="opacity-100 scale-100" data-todo-x-transition-leave="duration-100 ease-in" data-todo-x-transition-leave-start="opacity-100 scale-100" data-todo-x-transition-leave-end="opacity-0 scale-95" className="rounded-lg shadow-md transition transform origin-top-right">
          <div className="rounded-lg bg-white shadow-xs overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="" />
              </div>
              <div className="-mr-2">
                <button data-todo-at-click="open = false" type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Book</Link>
            </div>
            <div>
              <Link to="/login" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">
                Log in
              </Link>
              <Link to="/register" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);