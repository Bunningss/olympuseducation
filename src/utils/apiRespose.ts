import { NextResponse } from "next/server";

export const apiResponse = (message: any, statusCode: number) => {
  return NextResponse.json(message, {
    status: statusCode,
  });
};
