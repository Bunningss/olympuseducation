import cryptoJs from "crypto-js";
import { User } from "@/models/User";
import connectDb from "@/utils/db/connect";
import { NextRequest } from "next/server";
import { apiResponse } from "@/utils/apiRespose";

export async function POST(req: NextRequest) {
  await connectDb();

  const body = await req.json();

  try {
    const existingUser = await User.findOne({ email: body.email });

    if (existingUser) return apiResponse("User already exist.", 500);

    const hashedPass = cryptoJs.AES.encrypt(
      body.password,
      process.env.CRYPTO_SEC || ""
    ).toString();

    let user = new User({ ...body, password: hashedPass });

    await user.save();
    return apiResponse("User saved", 200);
  } catch (err) {
    console.log(err);
    return apiResponse(err, 400);
  }
}
