import mongoose, { Model } from "mongoose";

import { UserModelProps } from "@/utils/types";

const userSchema = new mongoose.Schema(
  {
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
    password: {
      type: String,
      required: true,
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
      enum: ["SUPERADMIN", "ADMIN", "LEVEL 2", "STUDENT", "USER"],
      required: false,
      default: "USER",
    },
  },
  { timestamps: true }
);

export const User: Model<UserModelProps> =
  mongoose.models?.Users || mongoose.model("Users", userSchema);
