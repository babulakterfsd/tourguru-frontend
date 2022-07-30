/* eslint-disable prettier/prettier */
import {
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider,
  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState('');
    const [response, setResponse] = useState('');
    const [name, setName] = useState('');


    const googleProvider = new GoogleAuthProvider();

    // sign in with popup provided by google
    const signInUsingGoogle = () => signInWithPopup(auth, googleProvider);

     // update user info
  const updateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
  };

    // register with email and password
  const registerWithEmail = (email, password) => {
    if (userPassword.length < 6) {
      setResponse("Password is Less than 6 character, update it!");
      return createUserWithEmailAndPassword(auth, email, password);
    } 
      setResponse("account created successfully !");
      return createUserWithEmailAndPassword(auth, email, password);
  };

    // firebase observer if user is logged in or not, checking user state
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (myUser) => {
            if (myUser) {
                setUser(myUser);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });

        return () => unSubscribed;
    }, []);

    return {
        auth,
        user,
        setUser,
        signOut,
        isLoading,
        setIsLoading,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        response,
        registerWithEmail,updateUser,name, setName, setResponse, signInWithEmailAndPassword, signInUsingGoogle
    };
};

export default useFirebase;
