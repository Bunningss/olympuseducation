"use client";
import { useContext, useState } from "react";
import Modal from "../Modal";
import Input from "@/components/Input/Input";
import Context from "@/Context/context";

const RegisterModal: React.FC = () => {
  const { registerModalOpen, setRegisterModalOpen } = useContext(Context);
  const { loginModalOpen, setLoginModalOpen } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const registerInputs = [
    {
      placeholder: "First Name",
      type: "text",
      required: true,
      onchange: handleChange,
      name: "firstName",
    },
    {
      placeholder: "Last Name",
      type: "text",
      required: true,
      onchange: handleChange,
      name: "lastName",
    },
    {
      placeholder: "Email Address",
      type: "email",
      required: true,
      onchange: handleChange,
      name: "email",
    },
    {
      placeholder: "Password",
      type: "password",
      required: true,
      onchange: handleChange,
      name: "password",
    },
    {
      placeholder: "Phone Number",
      type: "number",
      required: false,
      onchange: handleChange,
      name: "phone",
    },
    {
      placeholder: "Address",
      type: "text",
      required: true,
      onchange: handleChange,
      name: "address",
    },
  ];

  const bodyContent: JSX.Element = (
    <div>
      {registerInputs.map((input, indx) => (
        <Input
          key={indx}
          handleChange={input.onchange}
          name={input.name}
          placeholder={input.placeholder}
          required
          type={input.type}
        />
      ))}
    </div>
  );

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status !== 200) {
        return;
      } else {
        setRegisterModalOpen(false);
        setLoginModalOpen(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      modalTitle="Register"
      onClose={() => setRegisterModalOpen(false)}
      disabled={isLoading}
      isOpen={registerModalOpen}
      body={bodyContent}
      actionLabel="Continue"
      onSubmit={handleSubmit}
      tagline="Create an account."
      isSecondaryCenter
    />
  );
};

export default RegisterModal;
