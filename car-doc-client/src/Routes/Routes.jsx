import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../Pages/Home";
import Roots from "../Roots/Roots";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Checkout from "../Pages/Checkout";
import Cart from "../Pages/Cart";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AdminConsole from "../Pages/AdminConsole";
import AdminRoutes from "../PrivateRoutes/AdminRoutes";

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
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/adminRoute",
        element: <PrivateRoutes>
          <AdminRoutes>
            <AdminConsole></AdminConsole>
          </AdminRoutes>
        </PrivateRoutes>,
      },
      {
        path: "/checkout/:serviceID",
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.serviceID}`)
      },
    ]
  },
]);

export default Routes;