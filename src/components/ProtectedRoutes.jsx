import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to="/login"/>  // to={{ path: "/login", state: { from: props.location } }} 
          );
        }
      }}
    />
  );
};

export default ProtectedRoutes;
