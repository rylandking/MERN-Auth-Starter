import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24'>
      <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
        <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
          <div className='text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base'>
            Coming soon
          </div>
          <h2 className='mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-4xl lg:text-5xl xl:text-5xl'>
            A financial adulting camp
            <br className='hidden md:inline' />
            <span className='text-green-400'>
              {' '}
              for people who will be rich.
            </span>
            {/* ...will be. ...are happy. do what they love. travel (guilt free). */}
          </h2>
          <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
            Cash Camp is a stupidly simple, no nonsense adulting camp that gives
            you the actionable tips you need to become rich.
          </p>
          <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <Link
                to='#'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
              >
                Read Our Book
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center border'>
          <div className='flex-1 px-4 py-2 m-0 border'>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 1: How to Get Rich in Nine Words</Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>
                Lesson 2: How to Save $100K in 3 Years (Author's Story)
              </Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 3: How Long Will It Take to Get Rich</Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 4: How Bank Accounts Work</Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 5: How Credit Cards Work</Link>
            </p>
          </div>
          <div className='flex-1 px-4 pt-0 sm:py-2 m-0 border-2'>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 6: My Finances are a Mess. Step 1.</Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 7: Get Started with a Budgeting App</Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 8: The Best Simple Budgeting Categories</Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>Lesson 9: What Should My Monthly Budget Be</Link>
            </p>
            <p className='mt-2 text-gray-900 hover:text-green-400 font-semibold cursor-pointer'>
              <Link to=''>
                Lesson 10: Take Control of Your Finances. The First Step.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
