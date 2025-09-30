import { Outlet } from "react-router";



const Home = () => {
    return (
        <div>
            <p>Dragon News Home</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;