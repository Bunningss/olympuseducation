import { ChangeEvent, FC, useState } from "react";
import Modal from "../Modal";
import useBatchModal from "@/hooks/zustand/useBatchModal";
import Input from "@/components/Input/Input";
import { requestUrl } from "@/utils/static";
import { useGetData } from "@/hooks/useGetData";
import useAlert from "@/hooks/zustand/useAlert";

const BatchModal: FC = () => {
  const batchModal = useBatchModal();
  const { data } = useGetData("batch");
  const [values, setValues] = useState({
    batchNumber: "",
    courseName: "IELTS",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const alert = useAlert();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(requestUrl + "batch", {
        method: "PUT",
        body: JSON.stringify(values),
      });
      if (res.status !== 200) {
        alert.onAlert(await res.json());
        return;
      }
      batchModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const modalBody = (
    <div>
      <Input
        typeSelect
        selectData={data?.courseList}
        name="courseName"
        label="Course Name"
        handleChange={handleChange}
        required
      />
      <Input
        name="batchNumber"
        type="number"
        placeholder="Batch Number"
        label="Batch Number"
        handleChange={handleChange}
        required
      />
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={batchModal.isOpen}
        onClose={batchModal.onClose}
        onSubmit={handleSubmit}
        modalTitle="Batch Number"
        tagline="add new batch number."
        body={modalBody}
        actionLabel="submit"
      />
    </div>
  );
};

export default BatchModal;
