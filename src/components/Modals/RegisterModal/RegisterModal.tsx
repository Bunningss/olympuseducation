"use client";
import { useContext, useState } from "react";
import Modal from "../Modal";
import Input from "@/components/Input/Input";
import Context from "@/Context/context";

const RegisterModal = () => {
  const { registerModalOpen, setRegisterModalOpen } = useContext(Context);
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
    <form>
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
    </form>
  );

  const handleSubmit = () => {};
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
