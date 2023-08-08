import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebaseConfig";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const createUserHandler = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdate = async (name, image) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        });
    };

    const loginHandler = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setIsLoading(false);
            setUser(currentUser);
            return currentUser;
        })
        return unsubscribe;
    }, []);
    const logOut = () => {
        return signOut(auth);
    }

    const userInfo = {
        user,
        createUserHandler,
        userUpdate,
        loginHandler,
        isLoading,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;