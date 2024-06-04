import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../Pages/Home";
import Roots from "../Roots/Roots";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Checkout from "../Pages/Checkout";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/checkout/:serviceID",
            element: <Checkout></Checkout>,
            loader: ({params}) => fetch(`http://localhost:5000/allServices/${params.serviceID}`)
        },
      ]
    },
  ]);

export default Routes;