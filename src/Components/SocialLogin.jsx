import { FcGoogle  } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const {signWithGoogle}=useContext(AuthContext);

   const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
   const signInWithGoogle = async () => {
    try {
      await signWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p className="font-bold">Login with</p>
      <div className="d-flex flex-col gap-3 mt-3">
        <button  onClick={signInWithGoogle} className="btn btn-primary bg-white text-primary d-flex gap-2">
          <FcGoogle className="fs-4" />
          Login with Google
        </button>

        {/* <button className="btn btn-warning bg-white text-primary d-flex gap-2  ">
         {/* <FaGithub className="fs-4"/>
          Login with Github
          </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
