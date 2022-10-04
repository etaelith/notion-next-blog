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
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    console.log(email);
  };

  const logout = () => {
    signOut(auth);
    console.log("logout");
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithApple = () => {
    const appleProvider = new OAuthProvider("apple.com");
    return signInWithPopup(auth, appleProvider);
  };

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)
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
      }}
    >
      {children}
    </authContext.Provider>
  );
}
