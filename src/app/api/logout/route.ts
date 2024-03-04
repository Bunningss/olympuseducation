import { apiResponse } from "@/utils/apiRespose";
import cookie from "cookie";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("access_token");

    if (!token) return apiResponse("User logged out.", 200);

    const serialized = cookie.serialize("access_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: -1, // instant expire
    });

    return NextResponse.json(JSON.stringify({ message: "Logged out." }), {
      status: 200,
      headers: { "Set-Cookie": serialized },
    });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 401 });
  }
}
