"use client";
import Modal from "../Modal";
import { ChangeEvent, useContext, useState } from "react";
import Input from "@/components/Input/Input";
import useLoginModal from "@/hooks/zustand/useLoginModal";

const LoginModal: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginModal = useLoginModal();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status !== 200) {
        return null;
      } else {
        loginModal.onClose();
        window.location.reload();
      }
    } catch (err) {
      console.log(JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent: JSX.Element = (
    <div>
      <Input
        placeholder="Email address"
        required
        type="email"
        name="email"
        handleChange={handleData}
      />
      <Input
        placeholder="Enter password"
        required
        type="password"
        name="password"
        handleChange={handleData}
      />
    </div>
  );

  return (
    <Modal
      modalTitle="Login"
      onClose={loginModal.onClose}
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      body={bodyContent}
      actionLabel="Continue"
      onSubmit={handleSubmit}
      tagline="Login to your account."
    />
  );
};

export default LoginModal;
