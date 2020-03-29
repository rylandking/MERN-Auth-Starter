import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div x-data='{ open: false }' className='relative pt-6 pb-4'>
        <nav className='relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6'>
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <Link to='/'>
                <h1 className='font-bold text-grey-900 w-auto'>Cash Camp</h1>
              </Link>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                >
                  <svg
                    className='h-6 w-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='hidden md:block text-right'>
            <span className='inline-flex rounded-md shadow-md'>
              <span className='inline-flex rounded-md shadow-xs'>
                <Link
                  to='/accounts'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                >
                  Accounts
                </Link>
              </span>
            </span>
            <span className='ml-3 inline-flex rounded-md shadow-md'>
              <span className='inline-flex rounded-md shadow-xs'>
                <Link
                  to='/transactions'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                >
                  Transactions
                </Link>
              </span>
            </span>
            <span className='ml-3 inline-flex rounded-md shadow-md'>
              <span className='inline-flex rounded-md shadow-xs'>
                <Link
                  to='/trends'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                >
                  Trends
                </Link>
              </span>
            </span>
            <span className='ml-3 inline-flex rounded-md shadow-md'>
              <span className='inline-flex rounded-md shadow-xs'>
                <Link
                  to='/register'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-green-400 bg-white hover:bg-green-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                >
                  Sign up
                </Link>
              </span>
            </span>
            <span className='ml-3 inline-flex rounded-md shadow-md'>
              <span className='inline-flex rounded-md shadow-xs'>
                <Link
                  to='/login'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-green-400 bg-white hover:bg-green-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                >
                  Log in
                </Link>
              </span>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
