import { StaticImageData } from "next/image";

export interface SocialItemProps {
  label: string;
  icon: StaticImageData;
  href: string;
}

export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  address: string;
}

export interface ContextProps {
  userDropdownOpen: boolean;
  setUserDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loginModalOpen: boolean;
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  registerModalOpen: boolean;
  setRegisterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
  userLogin: (userData: UserProps) => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface UserModelProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  address?: string; // Optional
  role?: "LEVEL 2" | "USER" | "STUDENT"; // Optional with default
  picture: String;
  createdAt?: Date; // From timestamps
  updatedAt?: Date; // From timestamps
}

export interface StudentModelProps {
  batchNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  emergencyContact?: number; // Optional
  startDate?: number;
  expectedBandScore: number;
  bandScoreAchieved?: number; // Optional
  nidNumber?: number; // Optional
  passportNumber?: string;
  address?: string; // Optional
  picture?: string; // Optional
  role?: "STUDENT"; // Optional with default
  createdAt?: Date; // From timestamps
  updatedAt?: Date; // From timestamps
}
