import React from "react";
import { loginKey } from "../utils/constants";
import storage from "../utils/storage";
const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp"));
const loadAuthenticatedApp = () => import("./AuthenticatedApp");
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);

const AppLayout = () => {
  const token = storage.get(loginKey);
  return <div>{token ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
};

export default AppLayout;
