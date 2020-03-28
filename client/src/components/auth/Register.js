import React, { Fragment, useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
            Create your account
          </h2>
          <p className='mt-2 text-center text-sm leading-5 text-gray-600 max-w'>
            <span>Or </span>
            <a
              href='/'
              className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
            >
              start your 14-day free trial
            </a>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form onSubmit={e => onSubmit(e)}>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-5 text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1 rounded-md shadow-sm'>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>
              </div>

              <div className='mt-6'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-5 text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1 rounded-md shadow-sm'>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>
              </div>

              <div className='mt-6 flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember_me'
                    type='checkbox'
                    className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                  />
                  <label
                    htmlFor='remember_me'
                    className='ml-2 block text-sm leading-5 text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm leading-5'>
                  <a
                    href='/'
                    className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className='mt-6'>
                <span className='block w-full rounded-md shadow-sm'>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
                  >
                    Sign in
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
