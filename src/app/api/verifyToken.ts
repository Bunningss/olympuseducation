import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

interface CustomJwtPayload extends jwt.JwtPayload {
  role: string;
}

export const verifyToken = (req: NextRequest) => {
  const token = req.cookies.get("access_token");

  if (!token) {
    return null;
  }
  const { role } = jwt.verify(
    token.value,
    process.env.JWT_SEC || ""
  ) as CustomJwtPayload;

  return role;
};
