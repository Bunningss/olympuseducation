"use client";
import Button from "@/components/Button/Button";
import styles from "./Dashboard.module.css";
import Container from "@/components/Container/Container";
import { FC } from "react";
import { useRouter } from "next/navigation";
import useBatchModal from "@/hooks/zustand/useBatchModal";
import useExpenseModal from "@/hooks/zustand/useExpenseModal";

const Dashboard: FC = () => {
  const { push } = useRouter();
  const batchModal = useBatchModal();
  const expenseModal = useExpenseModal();
  return (
    <div>
      <Container>
        <div className={styles.mainContent}>
          <div className={styles.dashboardFormWrapper}>
            <div className={styles.buttonWrapper}>
              <Button
                label="add batch number"
                outline
                onClick={batchModal.onOpen}
              />
              <Button
                label="add student"
                outline
                onClick={() => push("dashboard/student")}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button label="add employee" outline />
              <Button
                label="add expense"
                outline
                onClick={expenseModal.onOpen}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button label="view employees" />
              <Button label="view expense" />
            </div>
            <div className={styles.buttonWrapper}>
              <Button label="view students" />
              <Button label="view batches" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
