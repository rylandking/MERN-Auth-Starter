import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    register({ name, email, password });

    setAlert('Success', 'bg-green-400', 3000);
  };

  return (
    <Fragment>
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-0 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
            Create your account
          </h2>
        </div>

        <div className='mt-3 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form onSubmit={e => onSubmit(e)}>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-5 text-gray-700'
                >
                  First name
                </label>
                <div className='mt-1 rounded-md shadow-sm'>
                  <input
                    id='name'
                    type='name'
                    name='name'
                    value={name}
                    onChange={e => onChange(e)}
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>
              </div>

              <div className='mt-3'>
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

              <div className='mt-3'>
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

              <div className='mt-6'>
                <span className='block w-full rounded-md shadow-sm'>
                  <button
                    type='submit'
                    value='Login'
                    className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
                  >
                    Create account
                  </button>
                </span>
              </div>
              <div className='text-sm w-full flex justify-center mt-6 leading-5'>
                <Link
                  to='/login'
                  className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
                >
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(Register);
