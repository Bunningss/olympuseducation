"use client";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "../Modal";
import styles from "./LoginModal.module.css";

import { useState } from "react";

const bodyContent = <div>Login</div>;

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <Modal
      title="Register"
      onClose={loginModal.onClose}
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      body={bodyContent}
      actionLabel="Continue"
      onSubmit={handleSubmit}
    />
  );
};

export default LoginModal;
