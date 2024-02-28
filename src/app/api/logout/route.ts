import cookie from "cookie";
import { NextResponse } from "next/server";

export async function GET() {
  const serialized = cookie.serialize("access_token", "no cookie for you!", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 1800, // 30 minutes
  });

  return (
    NextResponse.json({ message: "Logout successful." }),
    {
      status: 200,
      headers: { "Set-Cookie": serialized },
    }
  );
}
