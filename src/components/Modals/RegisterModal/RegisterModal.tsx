"use client";
import { useState } from "react";

import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "../Modal";
import Input from "@/components/Input/Input";

const bodyContent = (
  <form>
    <Input placeholder="First Name" required type="text" />
    <Input placeholder="Last Name" required type="text" />
    <Input placeholder="Email" required type="email" />
    <Input placeholder="Phone" required type="number" minimumValue={0} />
    <Input placeholder="Address" required type="text" />
  </form>
);

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};
  return (
    <Modal
      modalTitle="Register"
      onClose={registerModal.onClose}
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      body={bodyContent}
      actionLabel="Continue"
      onSubmit={handleSubmit}
      tagline="Create an account."
      isSecondaryCenter
    />
  );
};

export default RegisterModal;
