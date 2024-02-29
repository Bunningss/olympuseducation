import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../verifyToken";
import { apiResponse } from "@/utils/apiRespose";
import connectDb from "@/utils/db/connect";
import { Student } from "@/models/Student";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const data = await req.json();
    const user = verifyToken(req);
    if (user === "SUPER ADMIN" && "ADMIN" && "LEVEL 2") {
      const student = new Student(data);
      await student.save();
      return apiResponse("Data added successfully.", 200);
    } else {
      return apiResponse("Unauthorized!", 401);
    }
  } catch (err) {
    console.log(err);
    return apiResponse(err, 400);
  }
}
