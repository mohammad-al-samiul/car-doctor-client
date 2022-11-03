/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import image from '../../Assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
  const { createUser, profileUpdate, verifyEmail } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        toast.success('User Created Successfully');
        form.reset();
        const user = result.user;
        console.log(user);
        verifyEmail().then(() => {
          toast.warning('Please Check Your Email');
        });
        profileUpdate(name)
          .then(() => {
            toast.success('Profile Updated');
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left pr-28">
            <img src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <h1 className="text-3xl font-bold pt-5  text-center">Register now</h1>
            <form onSubmit={handleSubmit} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn font-semibold text-white  px-4  bg-transparent bg-red-500  rounded h-12 border-none "
                  value="Register"
                />
              </div>
            </form>

            <p className="text-center pt-0 pb-10">
              Already have an account?{' '}
              <Link to={'/login'} className="text-red-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
