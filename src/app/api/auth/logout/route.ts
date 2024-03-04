import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { apiResponse } from "@/utils/apiRespose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("access_token");
    if (!token) return apiResponse("User logged out.", 200);

    const accessToken = sign({ name: "no cookie" }, process.env.JWT_SEC || "", {
      expiresIn: -1,
    });

    const serialized = serialize("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: -1, // instant
    });

    return NextResponse.json(JSON.stringify({ message: "Logged out" }), {
      status: 200,
      headers: { "Set-Cookie": serialized },
    });
  } catch (err) {
    console.log(err);
    return apiResponse(err, 400);
  }
}
