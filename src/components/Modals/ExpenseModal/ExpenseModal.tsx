import useExpenseModal from "@/hooks/zustand/useExpenseModal";
import Modal from "../Modal";
import Input from "@/components/Input/Input";
import { nunito } from "@/fonts/fonts";
import { ChangeEvent, FormEvent, useState } from "react";
import { requestUrl } from "@/utils/static";
import useAlert from "@/hooks/zustand/useAlert";

const ExpenseModal = () => {
  const expenseModal = useExpenseModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState({});
  const alert = useAlert();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(requestUrl + "expense", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Context-Type": "application/json",
        },
      });

      if (res.status !== 200) {
        alert.onAlert(await res.json());
        return;
      }
      expenseModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div>
      <Input
        name="title"
        handleChange={handleChange}
        placeholder="Title"
        required
        type="text"
      />
      <textarea
        name="details"
        placeholder="Add details"
        style={{
          borderRadius: "var(--border-radius)",
          width: "100%",
          padding: "15px 10px",
          outline: "none",
          fontSize: "var(--font-regular)",
          fontWeight: "var(--font-bold)",
        }}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        className={nunito.className}
      />
      <Input
        name="date"
        handleChange={handleChange}
        placeholder="Date"
        required
        type="date"
      />
      <Input
        name="amount"
        handleChange={handleChange}
        placeholder="Total amount"
        required
        type="number"
        minimumValue={0}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      body={bodyContent}
      isOpen={expenseModal.isOpen}
      onClose={expenseModal.onClose}
      onSubmit={handleSubmit}
      modalTitle="Expense"
      tagline="add expense data."
      actionLabel="submit"
    />
  );
};

export default ExpenseModal;
