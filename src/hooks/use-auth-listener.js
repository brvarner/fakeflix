import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";

// This function allows us to maintain an auth state in our app so that even
// if users close out the application and return hours later, we can
// still hold their info and greet them personally.

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    // This listener checks the local storage to see if there's an authenticated user
    // logged into our site. If so, it sets the user in local storage to their
    // auth data from Firebase. If not, it sets the user to null and removes any possible
    // users that may be left over.

    const listener = db.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    // Here we clean up our listener so that we won't get any unmounting errors
    return () => {
      listener();
    };
  });

  return { user };
}
