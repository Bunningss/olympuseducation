import cookie from "cookie";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const serialized = cookie.serialize("access_token", "no_cookie_for_you.", {
      httpOnly: true,
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
