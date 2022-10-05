import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  OAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const signup = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      setError(error.message)
    );
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) =>
      setError(error.message)
    );
  };

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).catch((error) =>
      setError(error.message)
    );
  };

  const loginWithApple = () => {
    const appleProvider = new OAuthProvider("apple.com");
    return signInWithPopup(auth, appleProvider);
  };

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider).catch((error) =>
      setError(error.message)
    );
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        signin,
        loginWithGoogle,
        loginWithApple,
        loginWithFacebook,
        logout,
        user,
        error,
        setError,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
