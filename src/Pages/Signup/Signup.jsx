import React, { useContext } from "react";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../../public/assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero bg-base-200 lg:min-h-screen">
        <div className="hero-content flex lg:gap-x-40">
          <div className="">
            <img src={login} alt="signup" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl text-center font-bold">SIGN UP</h2>
              <form onSubmit={handleSignup}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    name="name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />

                  <button className="btn bg-[#FF3811] border-0 mt-4 text-white hover:bg-[#472d27] transform hover:scale-105 transition duration-200 ease-in-out">
                    SIGN UP
                  </button>
                </fieldset>
              </form>
              <p className="text-sm capitalize text-center">or sign up with</p>
              <div className="flex gap-3 justify-center items-center">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer">
                  <FaGooglePlusG className="text-xl" />
                </button>

                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-800 hover:text-white transition duration-200 cursor-pointer">
                  <FaGithub className="text-xl" />
                </button>
              </div>

              <p className="text-center text-[14px] text-gray-400 my-2">
                Already have an account?{" "}
                <strong className="text-[#FF3811] ">
                  <Link to={"/login"}>Login</Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
