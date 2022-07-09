import { useState } from "react";
import UserInfoContext from "./UserInfoContext";

type Props = {
  children: JSX.Element;
};

const UserInfoContextProvider: React.FC<Props> = ({ children }) => {

  const [email, setEmail] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  
  const userInfoValue = {
    userInfo: { 
      userName: userName,
      email: email
    },
    changeUserName: (userName: string) => {
      setUserName(userName)
    },
    changeEmail: (email: string) => {
      setEmail(email)
    },
  };

  return (
    <UserInfoContext.Provider value={userInfoValue}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider;