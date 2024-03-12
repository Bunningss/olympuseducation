import { NextRequest } from "next/server";
import { verifyAdmin } from "../verifyToken";
import { apiResponse } from "@/utils/apiRespose";
import connectDb from "@/utils/db/connect";
import { Student } from "@/models/Student";
import { Batch } from "@/models/Batch";
import { CustomTokenVerifyProps } from "@/utils/types";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const data = await req.json();
    const { admin } = verifyAdmin(req) as CustomTokenVerifyProps;

    if (!admin) return apiResponse("Unauthorized!", 400);

    const newStudent = new Student(data);

    // Verify if batch exist
    const getBatch = await Batch.findOne({ courseName: newStudent.course });
    if (!getBatch) return apiResponse("Course does not exist.", 400);

    const studentId = newStudent._id;

    const batchToUpdate = getBatch.batches[0].students.find(
      (batch: any) => batch.batchNumber === newStudent.batchNumber
    );

    if (!batchToUpdate) return apiResponse("Batch number does not exist.", 400);

    batchToUpdate.batchStudents.push(studentId);

    await getBatch.save();
    await newStudent.save();
    return apiResponse("Data added successfully.", 200);
  } catch (err) {
    return apiResponse(err, 400);
  }
}
