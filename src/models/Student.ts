import { StudentModelProps } from "@/utils/types";
import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    batchNumber: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    emergencyContact: { type: Number, required: false },
    startDate: {
      type: Date,
      required: false,
    },
    expectedBandScore: {
      type: Number,
      required: true,
    },
    bandScoreAchieved: {
      type: Number,
      required: false,
    },
    nidNumber: {
      type: Number,
      required: false,
    },
    passportNumber: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    picture: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["STUDENT"],
      required: false,
      default: "STUDENT",
    },
  },
  { timestamps: true }
);

export const Student: Model<StudentModelProps> =
  mongoose.models?.Student || mongoose.model("Student", userSchema);
