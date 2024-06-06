import { useContext } from "react";
import { carDoctorContext } from "../AuthProvider/carDoctorContext";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const { user, isLoading, isAdmin } = useContext(carDoctorContext);

    if (isLoading) {
        return <p className="pt-32">Loading..</p>
    }
    else if (user && !isAdmin) {
      alert('Only Admin has access to this route');
      return <Navigate to={'/'}></Navigate>
    }
    
    return (
        <div>
            {children}
        </div>
    )


};

export default AdminRoutes;