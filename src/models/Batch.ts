import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    courseName: String,
    batches: [
      {
        batchNumbers: {
          type: [String],
        },
        students: [
          {
            batchNumber: String,
            batchStudents: [
              {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student",
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const Batch =
  mongoose.models?.Batch || mongoose.model("Batch", batchSchema);
