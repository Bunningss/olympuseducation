import { Expense } from "@/models/Expense";
import connectDb from "@/utils/db/connect";
import { NextRequest } from "next/server";
import { verifyAdmin } from "../verifyToken";
import { apiResponse } from "@/utils/apiRespose";
import { CustomTokenVerifyProps } from "@/utils/types";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const { title, details, date, amount } = await req.json();
    const client = verifyAdmin(req) as CustomTokenVerifyProps;

    if (!client.admin) return apiResponse("Unauthorized.", 401);

    const newExpense = new Expense({
      title,
      details,
      amount,
      date,
      addedBy: client.name,
    });
    await newExpense.save();
    return apiResponse("Data saved successfully.", 200);
  } catch (err) {
    console.log(err);
    return apiResponse("An error occured!", 400);
  }
}
