import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <p className="py-4">Hello! please Login here</p>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email', { required: true })}
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                {...register('password', { required: true })}
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-blue-900 rounded-md px-3 py-1 hover:bg-blue-500 duration-200">
                Login
              </button>
              <p className="text-xl">
                Not Registered ?{' '}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>{' '}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
