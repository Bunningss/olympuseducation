import { NextResponse } from "next/server";

export const apiResponse = (message: any, statusCode: number) => {
  return NextResponse.json(JSON.stringify({ message: message }), {
    status: statusCode,
  });
};
