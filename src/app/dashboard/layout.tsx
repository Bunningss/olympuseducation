"use client";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const isVerified = async () => {
      const res = await fetch("http://localhost:3000/api/validate", {
        method: "GET",
      });
      const user = await res.json();

      if (
        user.isValid &&
        user?.user?.role !== "USER" &&
        "FLOOR" &&
        "QUALITY" &&
        "ACCOUNTS"
      ) {
        setIsValid(user.isValid);
      } else {
        return null;
      }
    };
    isVerified();
  }, [isValid]);

  if (!isValid) return null;

  return <main>{children}</main>;
};

export default DashboardLayout;
