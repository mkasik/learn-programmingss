import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut/CheckOut";
import Courses from "../../Pages/Course/Courses/Courses";
import Details from "../../Pages/Details/Details/Details";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Not from "../../Pages/Not/Not/Not";
import Register from "../../Pages/Register/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes= createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/home',
                element:<Home></Home>,
                
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>,
                
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }, 
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader: ({params})=>fetch(`https://server-mkasik.vercel.app/details/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=>fetch(`https://server-mkasik.vercel.app/details/${params.id}`)
            } 
        ]
    },
    {
        path:'*',
        element: <Not></Not>
    }

])