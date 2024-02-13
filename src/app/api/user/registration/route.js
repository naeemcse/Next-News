import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    reqBody.otp = "0";
    const prisma = new PrismaClient();
    const result = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({
      status: "success",
      message: "User registered successfully",
      data: result,
    });
  } catch (err) {
    return NextResponse.json({
      status: "error",
      message: "User registration failed",
      data: err,
    });
  }
}
