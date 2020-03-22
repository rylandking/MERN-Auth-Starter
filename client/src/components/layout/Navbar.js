import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      data-todo-x-data='{ open: false }'
      className='bg-white border-b border-gray-200'
    >
      {/* Desktop Nav */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <h1 className='hidden sm:block font-bold text-grey-900 w-auto'>
                Cash Camp
              </h1>
            </div>
            {/* Mobile Nav Button */}
            <div className='flex items-center sm:hidden'>
              <button
                data-todo-x-data='{ open: true }'
                className='inline-flex items-center justify-center rounded-md text-gray-900 focus:outline-none focus:text-green-500 transition duration-150 ease-in-out'
              >
                <h1 className='block font-bold text-grey-900 w-auto mr-1'>
                  Cash Camp
                </h1>
                <svg
                  className='h-5 w-5'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='inline-flex'
                    fill-rule='evenodd'
                    stroke-width='2'
                    d='M19 9l-7 7-7-7'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>
            </div>
            {/* END - Mobile Nav Button */}
            <div className='hidden sm:-my-px sm:ml-6 sm:flex'>
              <Link
                to='/'
                className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-800 hover:border-gray-500 focus:outline-none focus:text-gray-800 focus:border-gray-500 transition duration-150 ease-in-out'
              >
                Accounts
              </Link>
              <Link
                to='/'
                className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-green-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-green-600 transition duration-150 ease-in-out'
              >
                Transactions
              </Link>
              <Link
                to='/'
                className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-800 hover:border-gray-500 focus:outline-none focus:text-gray-800 focus:border-gray-500 transition duration-150 ease-in-out'
              >
                Trends
              </Link>
            </div>
          </div>
          {/* Profile Stats - Desktop */}
          <div className='sm:ml-6 sm:flex sm:items-center pt-3 py-1'>
            <div className='ml-3 relative' x-data='{ open: false }'>
              <div>
                <button className='flex text-sm border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out'>
                  <div className='flex flex-col items-center text-center'>
                    <img
                      className='inline-block h-8 w-8 rounded-full mb-1'
                      src='https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                    <h2 className='hidden text-xl font-bold text-gray-900'>
                      Matt
                    </h2>
                    <h2 className='text-base font-bold text-gray-900 inline-flex'>
                      <span>
                        <svg
                          className='h-4 w-4 mt-1'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='3'
                            d='M5 10l7-7m0 0l7 7m-7-7v18'
                          />
                        </svg>
                      </span>
                      $732
                    </h2>
                  </div>
                </button>
              </div>
              <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
                <div className='py-1 rounded-md bg-white shadow-xs'>
                  <Link
                    to='#'
                    className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                  >
                    Settings
                  </Link>
                  <Link
                    to='#'
                    className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
        </div>
      </div>
      <div className='hidden sm:hidden bg-gray-50'>
        <div className='pt-2 pb-3'>
          <Link
            to='#'
            className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
          >
            Accounts
          </Link>
          <Link
            to='#'
            className='mt-1 block pl-3 pr-4 py-2 border-l-4 border-green-500 text-base font-medium text-green-700 bg-green-50 focus:outline-none focus:text-green-800 focus:bg-green-100 focus:border-green-700 transition duration-150 ease-in-out'
          >
            Transactions
          </Link>
          <Link
            to='#'
            className='mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
          >
            Trends
          </Link>
        </div>
        <div className='pt-4 pb-3 border-t border-gray-200'>
          <div className='flex items-center px-4'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium leading-6 text-gray-800'>
                Matt DiRocco
              </div>
              <div className='text-sm font-medium leading-5 text-gray-500'>
                matt@dirocco.com
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <Link
              to='#'
              className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out'
            >
              Your Profile
            </Link>
            <Link
              to='#'
              className='mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out'
            >
              Settings
            </Link>
            <Link
              to='#'
              className='mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out'
            >
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
