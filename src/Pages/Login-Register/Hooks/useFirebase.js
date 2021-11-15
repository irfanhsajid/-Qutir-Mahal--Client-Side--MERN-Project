import initializeFirebase from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //new user registration 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    //user login via email-password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)


    }

    //google sign in 
    const signInWithGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result);
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])



    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }



    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        authError,
        setAuthError,
        registerUser,
        loginUser,
        logOut,
        signInWithGoogle
    }
}

export default useFirebase;