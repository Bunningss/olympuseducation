"use client";
import Button from "@/components/Button/Button";
import styles from "./Dashboard.module.css";
import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";
import Headers from "@/components/Headers/Headers";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { courseData } from "@/utils/static";
import { SelectDataProps } from "@/utils/types";

const Dashboard: FC = () => {
  const [values, setvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    course: "",
    batchNumber: "",
    phone: 0,
    amount: 0,
    emergencyContactName: "",
    emergencyContactNumber: 0,
    emergencyContactRelation: "",
    expectedBandScore: 1,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("api/student", {
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
    } finally {
      setLoading(false);
    }
  };

  const ieltsBatchData: SelectDataProps[] = [
    {
      label: "I-01",
      value: "I-01",
    },
    {
      label: "I-02",
      value: "I-02",
    },
    {
      label: "I-03",
      value: "I-03",
    },
    {
      label: "I-04",
      value: "I-04",
    },
    {
      label: "I-05",
      value: "I-05",
    },
  ];

  const sscBatchData: SelectDataProps[] = [
    {
      label: "SSC-01",
      value: "SSC-01",
    },
    {
      label: "SSC-02",
      value: "SSC-02",
    },
    {
      label: "SSC-03",
      value: "SSC-03",
    },
  ];

  const referData: SelectDataProps[] = [
    {
      label: "Ashfaq Alif",
      value: "Ashfaq Alif",
    },
    {
      label: "Sumon Albi",
      value: "Sumon Albi",
    },
    {
      label: "Shemanto",
      value: "Shemanto",
    },
  ];

  return (
    <div>
      <Container>
        <div className={styles.mainContent}>
          <div className={styles.dashboardFormWrapper}>
            <div className={styles.buttonWrapper}>
              <Button label="add batch number" outline />
              <Button label="view student data" />
            </div>
            <div className={styles.buttonWrapper}>
              <Button label="add employee data" />
              <Button label="add expense data" outline />
            </div>
            <div>
              <div className={styles.headerWrapper}>
                <Headers secondary="Add student data" />
              </div>
              <form onSubmit={handleSubmit} className={styles.dashboardForm}>
                <div className={styles.inputGroup}>
                  <Input
                    typeSelect
                    selectData={courseData}
                    handleChange={handleChange}
                    name="course"
                    placeholder="Course"
                    label="Select Course (Required)"
                  />
                  <Input
                    typeSelect
                    selectData={
                      values.course === "IELTS"
                        ? ieltsBatchData
                        : values.course === "SSC"
                        ? sscBatchData
                        : []
                    }
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
                  selectData={referData}
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
                <Button label="submit data" disabled={loading} />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
