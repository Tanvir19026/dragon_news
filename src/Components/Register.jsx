import { Link, useNavigate } from "react-router";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [name,setName]=useState('');
    const [purl,setPurl]=useState('');

    const {createUser}=useContext(AuthContext);

     const navigate = useNavigate();
        
const rules = [
    { regex: /.{8,}/, message: "At least 8 characters" },
    { regex: /[A-Z]/, message: "At least 1 uppercase letter" },
    { regex: /\d/, message: "At least 1 number" },
    { regex: /[!@#$%^&*]/, message: "At least 1 special character (!@#$%^&*)" },
  ];

  const handleFormSubmit =()=>{
 event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const failedRules = rules.filter((rule) => !rule.regex.test(password));
    if (failedRules.length > 0) {
      
      toast.error("Password does not meet all requirements.");
      return;
    }

    createUser(email,password)
    .then(result=>{ 
     toast.success("Registration  successful 🎉");
     navigate('/login')} 
    )
    .catch(error=>
      toast.error(error.message || "Registration failed ❌")
    );
  }














  return (
    <div className="w-full lg:w-6/12 mx-auto mt-4 px-4 mb-5">
      <Navbar className="mt-lg-3 mt-sm-5"  />

      <div className="w-full md:w-10/12 mx-auto mt-lg-5 mt-sm-5">
        <div
          className="
            border-3 border-gray-200 bg-white 
            mt-32
            w-full sm:w-11/12 md:w-9/12 lg:w-[40rem] 
            h-auto lg:h-[40rem] 
            rounded-md shadow-md
          "
        >
          <h3 className="text-center p-lg-5 pb-sm-3 pt-sm-4 ms-sm-5 me-sm-5 ms-lg-5 me-lg-5 border-b-2 border-gray-200 text-lg md:text-xl">
            Register your account
          </h3>

          <div>
            <form onSubmit={handleFormSubmit} className="m-5">
              {/* Name */}
              <div className="mb-4">
                <label className="font-bold block mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Full Name"
                  className="w-full border-2 p-2 border-gray-200 bg-gray-200 rounded"
                />
              </div>

            {/* Email */}
             <div className="mb-4">
                <label className="font-bold block mb-2">Email address</label>
                <input
                  type="text"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full border-2 p-2 border-gray-200 bg-gray-200 rounded"
                />
              </div>

  {/* photoUrl */}
             <div className="mb-4">
                <label className="font-bold block mb-2">Photo URL</label>
                <input
                  type="text"
                  name="photoUrl"
                  required
                  value={purl}
                  onChange={(e) => setPurl(e.target.value)}
                  placeholder="Enter your photo Url"
                  className="w-full border-2 p-2 border-gray-200 bg-gray-200 rounded"
                />
              </div>


              {/* Password */}
              <div className="mb-4">
                <label className="font-bold block mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border-2 p-2 border-gray-200 bg-gray-200 rounded"
                />
              </div> 
               <div className="flex justify-content-start align-content-center">
                 <input type="checkbox" checked={isChecked}
                 onChange={(e) => setIsChecked(e.target.checked)}
                 style={{width:"20px",height:"20px"}}/>
                <p className="inline ms-2 text-danger">I agree to the terms and conditions</p>
               </div>
                         {/* Password Rules */}
          {password && (
            <ul className="password-rules">
              {rules.map((rule, index) => {
                const passed = rule.regex.test(password);
                return (
                  <li key={index} className={passed ? "valid" : "invalid"}>
                    {passed ? "✅" : "❌"} {rule.message}
                  </li>
                );
              })}
            </ul>
          )}

          {/* Error */}
          {error && <p className="error-message">{error}</p>}

               {
                 isChecked && <button className="d-block btn btn-success  w-full rounded-2 font-bold
                 rounded-b-3xl block
                 " >Register</button>
               }
             
            </form>

            <p className="text-center mt-3 text-sm md:text-base">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                <span className="text-orange-500">Login</span>
              </Link>
            </p>
          </div>
          
        </div>
      </div>
            <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Register;
