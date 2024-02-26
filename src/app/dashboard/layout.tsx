"use client";
import useValidate from "@/hooks/useValidate";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useValidate();
  if (user.role !== "SUPER ADMIN" && "ADMIN" && "LEVEL 2") return null;

  return <main>{children}</main>;
};

export default DashboardLayout;
