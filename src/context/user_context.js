import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {

      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
      <UserContext.Provider value={{ user, logIn, signUp, logOut, googleSignIn }}>
        {children}
      </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

