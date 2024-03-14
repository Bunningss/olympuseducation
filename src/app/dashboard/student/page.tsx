"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./student.module.css";
import { StudentModelProps } from "@/utils/types";
import { requestUrl } from "@/utils/static";
import Input from "@/components/Input/Input";
import FormModal from "@/components/Modals/FormModal/FormModal";
import { useGetData } from "@/hooks/useGetData";

const Student: FC = () => {
  const [values, setvalues] = useState<StudentModelProps>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    course: "IELTS",
    batchNumber: "",
    phone: 0,
    amount: 0,
    emergencyContactName: "",
    emergencyContactNumber: 0,
    emergencyContactRelation: "",
    expectedBandScore: 1,
  });
  const { data } = useGetData("batch");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(requestUrl + "student", {
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.status === 200) {
        console.log("Success.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formBody = (
    <>
      <div className={styles.inputGroup}>
        <Input
          typeSelect
          selectData={data?.courseList}
          handleChange={handleChange}
          name="course"
          placeholder="Course"
          label="Select Course (Required)"
        />
        <Input
          typeSelect
          selectData={data?.batches[values.course]}
          handleChange={handleChange}
          name="batchNumber"
          placeholder="Batch Number"
          label="Batch Number (Required)"
        />
      </div>
      <div className={styles.inputGroup}>
        <Input
          name="firstName"
          placeholder="First Name"
          label="First Name (Required)"
          required
          type="text"
          errorMessage=""
          handleChange={handleChange}
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          label="Last Name (Required)"
          required
          type="text"
          errorMessage=""
          handleChange={handleChange}
        />
      </div>
      <Input
        name="email"
        placeholder="Email Address"
        label="Email Address (Required)"
        required
        type="email"
        errorMessage=""
        handleChange={handleChange}
      />
      <Input
        name="phone"
        placeholder="Phone Number"
        label="Phone Number (Required)"
        required
        type="tel"
        errorMessage=""
        handleChange={handleChange}
      />
      <Input
        name="amount"
        placeholder="Course fee"
        label="Course fee (Required)"
        required
        type="number"
        minimumValue={0}
        errorMessage=""
        handleChange={handleChange}
      />
      <Input
        name="referredBy"
        placeholder="Referred By"
        label="Referred By"
        typeSelect
        selectData={[]}
        errorMessage=""
        handleChange={handleChange}
      />
      <div className={styles.inputGroup}>
        <Input
          name="emergencyContactName"
          placeholder="Emergency Contact Name"
          label="Emergency Contact Name (Required)"
          required
          type="text"
          errorMessage=""
          handleChange={handleChange}
        />
        <Input
          name="emergencyContactNumber"
          placeholder="Emergency Contact Number"
          label="Emergency Contact Number (Required)"
          required
          type="tel"
          errorMessage=""
          handleChange={handleChange}
        />
        <Input
          name="emergencyContactRelation"
          placeholder="Emergency Contact Relation"
          label="Emergency Contact Relation (Required)"
          required
          type="text"
          errorMessage=""
          handleChange={handleChange}
        />
      </div>
      <Input
        name="startDate"
        placeholder="Start Date"
        label="Start Date (Required)"
        required
        type="date"
        errorMessage=""
        handleChange={handleChange}
      />
      <div className={styles.inputGroup}>
        <Input
          name="expectedBandScore"
          placeholder="Expected Band Score"
          label="Expected Band Score (Required)"
          required
          type="number"
          minimumValue={0}
          errorMessage=""
          handleChange={handleChange}
        />
        <Input
          name="bandScoreAchieved"
          placeholder="Band Score Achieved"
          label="Band Score Achieved"
          required={false}
          type="number"
          minimumValue={0}
          errorMessage=""
          handleChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <Input
          name="nidNumber"
          placeholder="NID Number"
          label="NID Number"
          required={false}
          type="number"
          minimumValue={0}
          errorMessage=""
          handleChange={handleChange}
        />
        <Input
          name="passportNumber"
          placeholder="Passport Number"
          label="Passport Number"
          required={false}
          type="text"
          errorMessage=""
          handleChange={handleChange}
        />
      </div>
      <Input
        name="address"
        placeholder="Address"
        label="Address (Required)"
        required
        type="text"
        errorMessage=""
        handleChange={handleChange}
      />
      <Input
        name="photo"
        placeholder="Photo"
        label="Photo"
        type="file"
        errorMessage=""
        handleChange={handleChange}
      />
    </>
  );
  return (
    <div>
      <FormModal
        body={formBody}
        formTitle="Add student data"
        action={handleSubmit}
      />
    </div>
  );
};

export default Student;
