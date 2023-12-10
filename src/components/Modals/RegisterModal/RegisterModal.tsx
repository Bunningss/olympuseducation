"use client";
import styles from "./RegisterModal.module.css";
import axios from "axios";
import { useState } from "react";

import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "../Modal";
import Input from "@/components/Input/Input";

const bodyContent = (
  <form>
    <Input placeholder="Email here" required />
  </form>
);

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};
  return (
    <Modal
      title="Register"
      onClose={registerModal.onClose}
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      body={bodyContent}
      actionLabel="Continue"
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterModal;
