import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error";
import HomeLayout from "../Layouts/HomeLayout";

import Home from "../Pages/Home";
import Category_News from "../Pages/Category_News";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Components/Login";
import Register from "../Components/Register";





const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category_News></Category_News>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            
            
        ]
        
    },
   
    
    {
        path:'/*',
        element:<Error></Error>
    },
     {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }



])

export default router;