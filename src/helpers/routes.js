import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

// We use these two components to protect the browse page from users who aren't logged in

export function IsUserRedirect({ user, loggedInPath, ...rest }) {
  // We pass in the loggedInPath, if the user is logged in, they go to the path
  // after passing auth.

  // If they're not logged in, we render the children, which is a page like signIn

  // We spread out the rest of the props so they get them

  // If there's no user, we return the child, if there's a user, redirect them to the login path.

  // If something has happened and we can't figure out if user is true or false, we return null

  if (user) {
    console.log("user~", loggedInPath);
    return (
      <Navigate
        {...rest}
        replace
        to={{
          loggedInPath
        }}
      />
    );
  } else {
    console.log("no user!");
    return <Outlet {...rest} />;
  }
}

export function ProtectedRoute({ user, children, ...rest }) {
  // We keep the location to remember where the user just came from (preserve history).

  // We take unauthenticated users to the sign in page.

  const location = useLocation();

  console.log(location);

  if (user) {
    return <Outlet {...rest} />;
  } else {
    return (
      <Navigate {...rest} replace to={"/signin"} state={location} />
    );
  }
}
