
import { carDoctorContext } from "./carDoctorContext";


const AuthProvider = ({children}) => {

    const carAuthData = {data : "info"};

    return (
        <carDoctorContext.Provider value={carAuthData}>
           {children}
        </carDoctorContext.Provider>
    );
};

export default AuthProvider;