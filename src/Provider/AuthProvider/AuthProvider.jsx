import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Registration and login
    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //handle user information
    useEffect(() => {
        const addUser = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser.email)

            const loggedUser = { user: currentUser.email }
            if (currentUser && currentUser.email) {
                fetch('https://car-doctior-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loggedUser)
                })
                    .then(user => user.json())
                    .then(data => {
                        localStorage.setItem('car-doctor-token', data.token);
                    })
                    .catch(err => console.log(err.message))
            }


        });
        return () => {
            return addUser()
        }
    }, [])

    //logout information
    const logOut = () => {
        return signOut(auth)
    }


    const userInfo = {
        user, loading,
        userRegistration,
        userLogin, logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>

    );
};

export default AuthProvider;