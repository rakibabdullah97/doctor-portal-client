import { useEffect, useState } from "react"
import initializeFirebase from '../Pages/Login/Firebase/firebase.init'
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

initializeFirebase()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                //save user to database
                saveUser(email, name, 'POST')
                //send name to firebase after create
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false))
    }

    const logInUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.push(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log('signInGoogle', user)
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.push(destination)
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://infinite-brook-63682.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        console.log(user)
        if (email) {
            fetch('https://stark-plains-85592.herokuapp.com//users', {
                method: method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then()
        }

    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        logInUser,
        logOut,
    }
}

export default useFirebase