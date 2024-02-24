"use client";
import Button from "@/components/Button/Button";
import styles from "./Dashboard.module.css";
import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";
import Headers from "@/components/Headers/Headers";
import { ChangeEvent, FC, useState } from "react";

const Dashboard: FC = () => {
  const [values, setvalues] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Container>
        <div className={styles.mainContent}>
          <div className={styles.dashboardFormWrapper}>
            <div className={styles.buttonWrapper}>
              <Button label="add batch number" outline />
              <Button label="view studet data" />
            </div>
            <div className={styles.buttonWrapper}>
              <Button label="add employee data" />
              <Button label="add expense data" outline />
            </div>
            <div>
              <div className={styles.headerWrapper}>
                <Headers secondary="Add student data" />
              </div>
              <form action="" className={styles.dashboardForm}>
                <Input
                  typeSelect
                  handleChange={handleChange}
                  name="batchNumber"
                  placeholder="Batch Number"
                  label="Batch Number (Required)"
                />
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
                <div className={styles.inputGroup}>
                  <Input
                    name="emergencyContact"
                    placeholder="Emergency Contact"
                    label="Emergency Contact (Required)"
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
                  required
                  type="file"
                  errorMessage=""
                  handleChange={handleChange}
                />
                <Button label="submit data" />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
