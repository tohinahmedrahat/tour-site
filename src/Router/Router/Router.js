import { createBrowserRouter } from "react-router-dom";
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
                loader:()=> fetch("http://localhost:5000/tour"),
                element:<Tour></Tour>
            },
            {
                path:"/tour/:id",
                loader:({params}) => fetch(`http://localhost:5000/tour/${params.id}`),
                element:<PrivateRoute><SingleTour></SingleTour></PrivateRoute>
            },
            {
                path:"/review",
                element:<UserReview></UserReview>
            },
            {
                path:"/update/:id",
                loader:({params}) => fetch(`http://localhost:5000/review/${params.id}`),
                element:<UpdateReview></UpdateReview>
            }
        ]
    }
])
export default Router;