import { serialize } from "cookie";
import { apiResponse } from "@/utils/apiRespose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("access_token");
    if (!token) return apiResponse("User logged out.", 200);

    const serialized = serialize("access_token", "accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: -1, // instant
    });

    return NextResponse.json(
      JSON.stringify({ "firstName, lastName, email, address, role": "null" }),
      {
        status: 200,
        headers: { "Set-Cookie": serialized },
      }
    );
  } catch (err) {
    return apiResponse(err, 400);
  }
}
