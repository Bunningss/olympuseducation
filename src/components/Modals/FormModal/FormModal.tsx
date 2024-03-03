import Button from "@/components/Button/Button";
import styles from "./FormModal.module.css";
import Headers from "@/components/Headers/Headers";
import { FC, FormEvent } from "react";

interface FormModalProps {
  body: JSX.Element;
  formTitle: string;
  action: (e: FormEvent) => void;
}

const FormModal: FC<FormModalProps> = ({ action, body, formTitle }) => {
  return (
    <div className={styles.formModalWrapper}>
      <Headers secondary={formTitle} />

      <form onSubmit={action} className={styles.modalForm}>
        {body}
        <Button label="submit" />
      </form>
    </div>
  );
};

export default FormModal;
