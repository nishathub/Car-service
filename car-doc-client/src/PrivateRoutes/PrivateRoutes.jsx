import { useContext } from "react";
import { carDoctorContext } from "../AuthProvider/carDoctorContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, isLoading } = useContext(carDoctorContext);
    const location = useLocation();
    const attemptURL = location.pathname;

    if (isLoading) {
        return <p className="pt-32">Loading..</p>
    }
    if (!user) {
        alert('Log in to view this page');
        return <Navigate state={attemptURL} to={'/login'}></Navigate>
    }
    
    return children;

};

export default PrivateRoutes;