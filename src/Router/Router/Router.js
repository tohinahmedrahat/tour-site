import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Regester from "../../Pages/Regester/Regester";
import SingleTour from "../../Pages/SingleTour/SingleTour";
import Tour from "../../Pages/Tour/Tour";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import UserReview from "../../Pages/UserReview/UserReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/regester",
                element:<Regester></Regester>
            },
            {
                path:"/tour",
                loader:()=> fetch("https://tour-server.vercel.app/tour"),
                element:<Tour></Tour>
            },
            {
                path:"/tour/:id",
                loader:({params}) => fetch(`https://tour-server.vercel.app/tour/${params.id}`),
                element:<PrivateRoute><SingleTour></SingleTour></PrivateRoute>
            },
            {
                path:"/review",
                element:<PrivateRoute><UserReview></UserReview></PrivateRoute>
            },
            {
                path:"/update/:id",
                loader:({params}) => fetch(`https://tour-server.vercel.app/review/${params.id}`),
                element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            }
        ],
       
    },
    {
        path:"*",
        element:<h1 className="text-xl text-red-700 font-bold my-4">sorry your page not found</h1>
    }
])
export default Router;