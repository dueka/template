import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AppRoutes } from "../routes/Routes.config";

const UnauthenticatedApp = () => {
  const publicRoutes = AppRoutes.filter((route) => !route.isPrivate);
  return (
    <Router>
      <Switch>
        {publicRoutes.map(({ component: Component, path }, index) => (
          <Route exact path={path} key={`auth-route-${index}`}>
            {<Component />}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;
