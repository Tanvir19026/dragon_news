import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from './../Components/LatestNews';

import LeftAside from "../Components/LeftAside";
import RightAside from "../Components/RightAside";
import Navbar from './../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-4">
                    <LatestNews></LatestNews>
                </section>
                <section className="w-11/12 mx-auto my-2">
                <Navbar>
                </Navbar>
                </section>
            </header>
            <main className="w-11/12 mx-auto  grid grid-cols-12 gap-5">
               <aside className="col-span-3">
                <LeftAside></LeftAside>
               </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;