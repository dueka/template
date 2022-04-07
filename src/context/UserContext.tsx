import React from "react";
import { userInterface } from "../interfaces/users";

const initState = {
  userInfo: {} as userInterface,
  // eslint-disable-next-line
  storeUserInfo: (value: userInterface) => {}
};

const UserContext = React.createContext(initState);
export const UserProvider = UserContext.Provider;

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

export const UserProviderContainer: React.FC<Props> = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<userInterface>(
    initState.userInfo
  );

  const storeUserInfo = (value: userInterface) => {
    setUserInfo(value);
  };

  return (
    <UserProvider
      value={{
        userInfo,
        storeUserInfo
      }}
    >
      {children}
    </UserProvider>
  );
};

export default UserContext;
