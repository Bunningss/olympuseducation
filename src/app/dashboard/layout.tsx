"use client";
import BatchModal from "@/components/Modals/BatchModal/BatchModal";
import { useValidate } from "@/hooks/useValidate";
import { FC, ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { isAdmin } = useValidate();

  if (!isAdmin) {
    return <span>Loading...</span>;
  }

  return (
    <main>
      <BatchModal />
      {children}
    </main>
  );
};

export default DashboardLayout;
