"use client";
import { ContextProviderProps } from "@/utils/types";
import Context from "./context";
import { useState } from "react";

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  return (
    <Context.Provider
      value={{
        userDropdownOpen,
        setUserDropdownOpen,
        registerModalOpen,
        setRegisterModalOpen,
        loginModalOpen,
        setLoginModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
