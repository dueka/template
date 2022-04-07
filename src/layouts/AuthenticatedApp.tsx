import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { UserHeader, UserMenu } from "../components";
import { AppRoutes } from "../routes/Routes.config";
import { decrypt_key, encrypt_userobj } from "../utils/auth-util";
import { loginKey, userKey } from "../utils/constants";
import storage from "../utils/storage";
import jwt_decode from "jwt-decode";
import UserContext from "context/UserContext";

const AuthenticatedApp = () => {
  return (
    <Router>
      <UserMenu />
      <UserHeader />
      <Routes />
    </Router>
  );
};

const Routes = () => {
  const privateRoutes = AppRoutes.filter((route) => route.isPrivate);

  const token = decrypt_key(storage.get(loginKey));

  const { storeUserInfo } = React.useContext(UserContext);

  React.useEffect(() => {
    storage.set(userKey, encrypt_userobj(jwt_decode(token)));
    storeUserInfo(jwt_decode(token));
    //eslint-disable-next-line
  }, []);

  return (
    <React.Suspense fallback={<p>Dashboard Loader</p>}>
      <Switch>
        {privateRoutes.map(({ path, component: Component }, index) => (
          <Route exact path={path} key={`dashboard-route-${index}`}>
            <Component />
          </Route>
        ))}
      </Switch>
    </React.Suspense>
  );
};

export default AuthenticatedApp;
