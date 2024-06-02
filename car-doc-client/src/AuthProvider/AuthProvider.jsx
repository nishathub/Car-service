
import { useEffect, useState } from "react";
import { carDoctorContext } from "./carDoctorContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/FirebaseConfig";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    
    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                if(currentUser){
                    setUser(currentUser);
                    setLoading(false);
                }
                else{
                    console.log('no user found');
                    setUser(null);
                    setLoading(false);
                }
            })

        return () => unSubscribe();
    },[])

    const carAuthData = {
        user,
        isLoading,
        createNewUser,
        updateUserProfile,
        loginUser,
        logoutUser,
    };

    return (
        <carDoctorContext.Provider value={carAuthData}>
           {children}
        </carDoctorContext.Provider>
    );
};

export default AuthProvider;