"use client";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "../Modal";
import styles from "./LoginModal.module.css";

import { useState } from "react";
import Input from "@/components/Input/Input";

const bodyContent = (
  <div>
    <Input placeholder="Email address" required type="email" />
    <Input placeholder="Enter password" required type="password" />
  </div>
);

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <Modal
      title="Login to OLYMPUS"
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
