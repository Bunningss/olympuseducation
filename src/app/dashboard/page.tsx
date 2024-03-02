"use client";
import Button from "@/components/Button/Button";
import styles from "./Dashboard.module.css";
import Container from "@/components/Container/Container";
import { FC } from "react";
import { useRouter } from "next/navigation";

const Dashboard: FC = () => {
  const { push } = useRouter();
  return (
    <div>
      <Container>
        <div className={styles.mainContent}>
          <div className={styles.dashboardFormWrapper}>
            <div className={styles.buttonWrapper}>
              <Button label="add batch number" outline />
              <Button
                label="view student data"
                onClick={() => push("dashboard/student")}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button label="add employee data" />
              <Button label="add expense data" outline />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
