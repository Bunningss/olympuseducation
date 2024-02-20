import { StaticImageData } from "next/image";

export interface SocialItemProps {
  label: string;
  icon: StaticImageData;
  href: string;
}

export interface ContextProps {
  userDropdownOpen: boolean;
  setUserDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loginModalOpen: boolean;
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  registerModalOpen: boolean;
  setRegisterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
