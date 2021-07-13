import React, { useContext, useState, createContext, useCallback } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const Login = ()=>{
    console.log("alou")
    console.log(isLogin)
    setIsLogin(true);
  }

  const Logoff = ()=>{
    setIsLogin(false);
  }

  return (
    <UserContext.Provider
      value={{
        isLogin,
        Login,
        Logoff,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
