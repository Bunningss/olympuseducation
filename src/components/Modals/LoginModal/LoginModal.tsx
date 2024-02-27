"use client";
import Modal from "../Modal";
import { ChangeEvent, useContext, useState } from "react";
import Input from "@/components/Input/Input";
import Context from "@/Context/context";

const LoginModal: React.FC = () => {
  const { loginModalOpen, setLoginModalOpen } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { userLogin } = useContext(Context);

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

      const userData = await res.json();
      if (res.status !== 200) {
        return null;
      } else {
        userLogin(userData);
        setLoginModalOpen(false);
        // window.location.reload();
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
