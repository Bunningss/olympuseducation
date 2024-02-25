import cryptoJs from "crypto-js";
import jwt from "jsonwebtoken";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/utils/db/connect";
import { apiResponse } from "@/utils/apiRespose";
import cookie from "cookie";

export async function POST(req: NextRequest) {
  await connectDb();

  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) return apiResponse("Incorrect email or password!", 400);

    const decryptedPass = cryptoJs.AES.decrypt(
      user.password,
      process.env.CRYPTO_SEC || ""
    ).toString(cryptoJs.enc.Utf8);

    if (decryptedPass === password) {
      const { firstName, lastName, email, address, role } = user;

      const accessToken = jwt.sign(
        { firstName, lastName, email, address, role },
        process.env.JWT_SEC || ""
      );

      const serialized = cookie.serialize("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 1,
      });

      return new Response(
        JSON.stringify({ firstName, lastName, email, address, role }),
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
