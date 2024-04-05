import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[600px]'>
        <div className='modal-box'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <p className="py-4">Hello! please Signup here</p>
            {/* Name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input type="text" placeholder='Enter your name' {...register('name', { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none'/>
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Enter your password'
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: "Password must contain at least one letter, one number, and one special character",
                  },
                })}
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-blue-900 rounded-md px-3 py-1 hover:bg-blue-500 duration-200'>Signup</button>
              <p className='text-xl'>Have Account ?{' '}
                <Link to="/login" className='underline text-blue-500 cursor-pointer'>Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
