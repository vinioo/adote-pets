import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthListener } from "./hooks/auth";

const ProtectedRoute: React.FC<{ path: string }> = ({ children, path }) => {
  const { loggedIn, checkingStatus } = useAuthListener();
  console.log("checking status", checkingStatus);
  console.log("logged in", loggedIn);
  return (
    <>
      {!checkingStatus &&
        (loggedIn ? (
          <Route exact path={path}>
            {children}
          </Route>
        ) : (
          <Redirect to="login" />
        ))}
    </>
  );
};

export default ProtectedRoute;
