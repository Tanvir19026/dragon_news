import { Link, useLocation, useNavigate } from "react-router";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { user, loading, setUser,signInUser,signOutUser } = useContext(AuthContext);
  if (user){
     signOutUser()
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false); // loader for login action

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setFormLoading(true);

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        toast.success("Login successful 🎉");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "Login failed ❌");
      })
      .finally(() => setFormLoading(false));
  };

  return (
    <div className="w-full lg:w-6/12 mx-auto mt-4 px-4">
      <Navbar className="mt-lg-3 mt-sm-5" />

      <div className="w-full md:w-10/12 mx-auto mt-lg-5 mt-sm-5">
        <div
          className="
            border-3 border-gray-200 bg-white 
            mt-32
            w-full sm:w-11/12 md:w-9/12 lg:w-[40rem] 
            h-auto lg:h-[35rem] 
            rounded-md shadow-md
          "
        >
          <h3 className="text-center p-lg-5 pb-sm-3 ms-lg-5 me-lg-5 border-b-2 border-gray-200 text-lg md:text-xl">
            Login your account
          </h3>

          <div>
            <form onSubmit={handleLogin} className="m-5">
              {/* Email */}
              <div className="mb-4">
                <label className="font-bold block mb-2">Email address</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full border-2 p-2 border-gray-200 bg-gray-200 rounded"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="font-bold block mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full border-2 p-2 border-gray-200 bg-gray-200 rounded"
                />
              </div>

              {/* Button with loader */}
              <div>
                <button
                  type="submit"
                  className="btn btn-warning w-full mt-4 flex justify-center items-center gap-2"
                  disabled={formLoading}
                >
                  {formLoading ? (
                    <span className="loader border-2 border-t-2 border-gray-300 border-t-orange-500 rounded-full w-5 h-5 animate-spin"></span>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>

            <p className="text-center mt-3 text-sm md:text-base">
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                <span className="text-orange-500">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Toaster container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Login;
