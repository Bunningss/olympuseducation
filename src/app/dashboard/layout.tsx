"use client";
import useValidate from "@/hooks/useValidate";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { isAdmin } = useValidate();
  const { push } = useRouter();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (!isAdmin) {
      push("/");
      return;
    } else {
      setIsSuccess(isAdmin);
    }
  }, [isAdmin, push]);

  if (!isSuccess) {
    return <p>Loading...</p>;
  }

  return <main>{children}</main>;
};

export default DashboardLayout;
