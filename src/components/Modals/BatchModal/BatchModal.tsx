import { ChangeEvent, FC, useState } from "react";
import Modal from "../Modal";
import useBatchModal from "@/hooks/zustand/useBatchModal";
import Input from "@/components/Input/Input";
import { courseData, requestUrl } from "@/utils/static";

const BatchModal: FC = () => {
  const batchModal = useBatchModal();
  const [values, setValues] = useState({
    batchNumber: "",
    courseName: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(requestUrl + "batch", {
        method: "PUT",
        body: JSON.stringify(values),
      });
      if (res.status === 200) {
        // batchModal.onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const modalBody = (
    <div>
      <Input
        typeSelect
        selectData={courseData}
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
        isOpen={batchModal.isOpen}
        onClose={batchModal.onClose}
        onSubmit={handleSubmit}
        modalTitle="Add Batch Number"
        body={modalBody}
        actionLabel="submit"
      />
    </div>
  );
};

export default BatchModal;
