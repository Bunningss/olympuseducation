import { Batch } from "@/models/Batch";
import { apiResponse } from "@/utils/apiRespose";
import connectDb from "@/utils/db/connect";
import { NextRequest } from "next/server";
import { verifyAdmin } from "../verifyToken";

export async function PUT(req: NextRequest) {
  try {
    await connectDb();
    const admin = verifyAdmin(req);

    if (!admin) return apiResponse("Unauthorized!", 400);

    const data = await req.json();

    const newBatchNumber =
      data.courseName === "IELTS"
        ? "I-" + data.batchNumber
        : data.courseName === "SPOKEN"
        ? "S-" + data.batchNumber
        : data.courseName === "BASIC"
        ? "B-" + data.batchNumber
        : data.courseName === "HSC"
        ? "HS-" + data.batchNumber
        : data.courseName === "SSC"
        ? "SS-" + data.batchNumber
        : null;

    const getBatch = await Batch.findOne({ courseName: data.courseName });
    if (!getBatch) return apiResponse("Course does not exist.", 400);

    const existingBatches = getBatch.batches[0]?.batchNumbers;
    if (existingBatches.includes(newBatchNumber))
      return apiResponse("Batch number already exist.", 400);

    existingBatches.push(newBatchNumber);

    getBatch.batches[0].students.push({
      batchNumber: newBatchNumber,
      batchStudents: [],
    });

    await getBatch.save();

    return apiResponse(getBatch, 200);
  } catch (err) {
    console.log(err);
    return apiResponse(err, 400);
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDb();

    const admin = verifyAdmin(req);
    if (!admin) return apiResponse("Unauthorized.", 401);

    const data = await Batch.find();

    let courseList: string[] = [];
    let batches: any = {};

    data.forEach((batch) => {
      courseList.push(batch.courseName);
      batches[batch.courseName] = batch.batches[0].batchNumbers;
    });

    return apiResponse({ courseList, batches }, 200);
  } catch (err) {
    console.log(err);
    return apiResponse("An error occured.", 400);
  }
}
