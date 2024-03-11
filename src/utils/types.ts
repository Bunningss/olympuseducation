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
  address?: string;
  role?: "LEVEL 2" | "USER" | "STUDENT";
  picture: String;
  createdAt?: Date;
  updatedAt?: Date;
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
  emergencyContactName: string;
  emergencyContactNumber: number;
  emergencyContactRelation: string;
  startDate?: number;
  expectedBandScore: number;
  bandScoreAchieved?: number;
  nidNumber?: number;
  passportNumber?: string;
  address?: string;
  picture?: string;
  role?: "STUDENT";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BatchProps {
  courseList: string[];
  batches: {
    IELTS: [];
    SPOKEN: [];
    BASIC: [];
    HSC: [];
    SSC: [];
  };
}
