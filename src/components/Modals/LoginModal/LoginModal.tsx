"use client";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "../Modal";
import styles from "./LoginModal.module.css";

import { useState } from "react";
import Input from "@/components/Input/Input";



const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const [ data, setData ] = useState({})

  const handleData = (e: any) => {
    setData({...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {};

  const bodyContent: JSX.Element = (
    <div>
      <Input placeholder="Email address" required type="email" name="email" handleChange={handleData} />
      <Input placeholder="Enter password" required type="password" name="password" handleChange={handleData} />
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
