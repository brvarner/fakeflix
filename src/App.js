import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { useAuthListener } from "./hooks";

export default function App() {
  // We check if the user is already signed in,
  // if they are not (in which case there would be no user), then they're redirected
  // to the sign in page, where they can easily access sign up page if necessary.
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={user ? <Navigate to={ROUTES.BROWSE} /> : <Signin />}
        />
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={user ? <Navigate to={ROUTES.BROWSE} /> : <Signup />}
        />
        <Route
          exact
          path={ROUTES.HOME}
          element={user ? <Navigate to={ROUTES.BROWSE} /> : <Home />}
        />
        <Route
          path={ROUTES.BROWSE}
          element={user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
