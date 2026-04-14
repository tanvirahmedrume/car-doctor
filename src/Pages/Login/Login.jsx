import axios from "axios";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../public/assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // ✅ fallback path fix
    const path = location.state?.from?.pathname;

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const user = { email };
        console.log(loggedInUser);
        
        axios.post("https://car-doctor-server-production-153a.up.railway.app/jwt", user, {
          withCredentials: true
        })
        .then(res =>{
          console.log(res.data);
          if (res.data.success) {
            navigate(location?.state ? path : '/')
          }
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 lg:min-h-screen">
        <div className="hero-content flex lg:gap-x-40">
          <div>
            <img src={login} alt="login" />
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl text-center font-bold">Login</h2>

              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    required
                  />

                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  {/* ✅ button text fixed */}
                  <button className="btn bg-[#FF3811] border-0 mt-4 text-white hover:bg-[#472d27] transform hover:scale-105 transition duration-200 ease-in-out">
                    LOGIN
                  </button>
                </fieldset>
              </form>

              <p className="text-sm capitalize text-center">or sign in with</p>

              <div className="flex gap-3 justify-center items-center">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer">
                  <FaGooglePlusG className="text-xl" />
                </button>

                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-800 hover:text-white transition duration-200 cursor-pointer">
                  <FaGithub className="text-xl" />
                </button>
              </div>

              <p className="text-center text-[14px] text-gray-400 my-2">
                Don't have an account?{" "}
                <strong className="text-[#FF3811]">
                  <Link to="/signup">Signup</Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
