"use client";
import useValidate from "@/hooks/useValidate";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useValidate();
  const { push } = useRouter();

  if (user.role !== "SUPER ADMIN" && "ADMIN" && "LEVEL 2") {
    <span>Loading</span>;
    push("/");
  } else {
    return <main>{children}</main>;
  }
};

export default DashboardLayout;
