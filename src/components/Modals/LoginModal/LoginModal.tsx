"use client";
import Modal from "../Modal";
import { useContext, useState } from "react";
import Input from "@/components/Input/Input";
import Context from "@/Context/context";

const LoginModal = () => {
  const { loginModalOpen, setLoginModalOpen } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  const bodyContent: JSX.Element = (
    <form>
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
    </form>
  );

  return (
    <Modal
      modalTitle="Login"
      onClose={() => setLoginModalOpen(false)}
      disabled={isLoading}
      isOpen={loginModalOpen}
      body={bodyContent}
      actionLabel="Continue"
      onSubmit={handleSubmit}
      tagline="Login to your account."
    />
  );
};

export default LoginModal;
