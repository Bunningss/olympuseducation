"use client";
import { ContextProviderProps, UserProps } from "@/utils/types";
import Context from "./context";
import { useEffect, useState } from "react";

const getInitialData = () => {
  const data = localStorage?.getItem("user");
  return JSON.parse(data || "{}");
};

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>(getInitialData);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const userLogin = (userData: UserProps) => {
    setUser(userData);
  };

  return (
    <Context.Provider
      value={{
        userDropdownOpen,
        setUserDropdownOpen,
        registerModalOpen,
        setRegisterModalOpen,
        loginModalOpen,
        setLoginModalOpen,
        userLogin,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
