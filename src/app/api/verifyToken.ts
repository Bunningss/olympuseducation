import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

interface CustomJwtPayload extends jwt.JwtPayload {
  role: string;
}

export const verifyAdmin = (req: NextRequest) => {
  try {
    const token = req.cookies.get("access_token");

    if (!token) {
      return false;
    }

    const { role, firstName, lastName } = jwt.verify(
      token.value,
      process.env.JWT_SEC || ""
    ) as CustomJwtPayload;

    if (role === "SUPER ADMIN" && "ADMIN" && "LEVEL 2") {
      return { admin: true, name: firstName + lastName };
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
