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
  course: "IELTS" | "SPOKEN" | "BASIC" | "HSC" | "SSC";
  batchNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  amount: number;
  referredBy?: string;
  emergencyContactName: string; // Optional
  emergencyContactNumber: number; // Optional
  emergencyContactRelation: string; // Optional
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

export interface SelectDataProps {
  label: string;
  value: string;
}
