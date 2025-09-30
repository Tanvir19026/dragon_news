
import { useContext } from 'react';
import profilepic from '../assets/user.png'
import { Link, NavLink,useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
    const{user,signOutUser,setUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate('/login');
    }
     const handleSignOut = () => {
      signOutUser()
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  };
    return (
        <div className='flex justify-between align-items-center'>
            <div></div>
            <div className="nav flex gap-4">
                <NavLink className='text-decoration-none primarytext'  to="/">Home</ NavLink>
                <NavLink className='text-decoration-none primarytext' to="/about">About</ NavLink>
                <NavLink className='text-decoration-none primarytext' to="/career">Career</ NavLink>
            </div>
            <div className="login-info flex gap-3">
               {
                user?<img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />:<img className='w-10 h-10 rounded-full' src={profilepic} alt="" />
               }
               {
                user?<button onClick={handleSignOut}>Logout</button>:<button onClick={handleNavigate}>Login</button>
               }
                
            </div>
            
        </div>
    );
};

export default Navbar;