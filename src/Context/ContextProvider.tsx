"use client";
import { ContextProviderProps, UserProps } from "@/utils/types";
import Context from "./context";
import { useEffect, useState } from "react";

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    role: "NULL",
  });

  const userLogin = (userData: UserProps) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
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
