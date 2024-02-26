"use client";
import useValidate from "@/hooks/useValidate";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { isValid } = useValidate();

  if (!isValid) return null;

  return <main>{children}</main>;
};

export default DashboardLayout;
