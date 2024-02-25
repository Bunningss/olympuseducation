import { ContextProps } from "@/utils/types";
import { createContext } from "react";

const Context = createContext<ContextProps>({
  userDropdownOpen: false,
  setUserDropdownOpen: () => {},
  loginModalOpen: false,
  setLoginModalOpen: () => {},
  registerModalOpen: false,
  setRegisterModalOpen: () => {},
  user: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    role: "",
  },
  setUser: () => {},
});

export default Context;
