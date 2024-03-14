import cryptoJs from "crypto-js";
import jwt from "jsonwebtoken";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/utils/db/connect";
import { apiResponse } from "@/utils/apiRespose";
import cookie from "cookie";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) return apiResponse("Incorrect email or password!", 400);

    const decryptedPass = cryptoJs.AES.decrypt(
      user.password,
      process.env.CRYPTO_SEC || ""
    ).toString(cryptoJs.enc.Utf8);

    if (decryptedPass === password) {
      const { firstName, lastName, email, address, role, _id } = user;

      const admin = user.role !== "STUDENT" || "USER" ? true : false;

      const accessToken = jwt.sign(
        { firstName, lastName, email, address, role, _id, admin },
        process.env.JWT_SEC || "",
        { expiresIn: 1800 }
      );

      const serialized = cookie.serialize("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 1800, // 30 minutes
      });

      return NextResponse.json(
        JSON.stringify({
          firstName,
          lastName,
          email,
          address,
          role,
          _id,
          admin,
        }),
        {
          status: 200,
          headers: { "Set-Cookie": serialized },
        }
      );
    } else {
      return apiResponse("Incorrect email or password!", 400);
    }
  } catch (err) {
    return apiResponse("An error occured!", 400);
  }
}
