import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Regester from "../../Pages/Regester/Regester";
import SingleTour from "../../Pages/SingleTour/SingleTour";
import Tour from "../../Pages/Tour/Tour";

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
                loader:()=> fetch("fakedata.json"),
                element:<Tour></Tour>
            },
            {
                path:"/tour/:id",
                loader:({params}) => fetch(""),
                element:<SingleTour></SingleTour>
            }
        ]
    }
])
export default Router;