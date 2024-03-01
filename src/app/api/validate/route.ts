import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("access_token");

    if (!token) {
      return NextResponse.json({ isValid: false }, { status: 401 }); // Unauthorized
    }
    const decoded = jwt.verify(token.value, process.env.JWT_SEC || "");
    return NextResponse.json({ isValid: true, user: decoded });
  } catch (err) {
    return NextResponse.json({ isValid: false }, { status: 401 });
  }
}
