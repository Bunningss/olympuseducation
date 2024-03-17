"use client";
import useAlert from "@/hooks/zustand/useAlert";
import styles from "./Alert.module.css";
import { useEffect, useRef } from "react";
import Container from "../Container/Container";

const Alert = () => {
  const alert = useAlert();
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      alert.onAlertReset();
    }, 5000);
  }, [alert]);

  if (!alert.alert) return null;

  return (
    <div className={`${styles.alert} ${alert.alert && styles.active}`}>
      <Container>
        <h3>{alert.alert}</h3>
      </Container>
    </div>
  );
};

export default Alert;
