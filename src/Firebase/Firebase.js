import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import firebaseApp from "./firebase.config";

// auth
export const firebaseAuth = getAuth(firebaseApp);

// google provider
export const googleProvider = new GoogleAuthProvider();

// twitter provider
export const twitterProvider = new TwitterAuthProvider();
