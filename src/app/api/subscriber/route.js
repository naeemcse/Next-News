import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.subscribers.create({
      data: reqBody,
    });
    return NextResponse.json({
      status: "success",
      message: "Subscriber is created successfully",
      data: result,
    });
  } catch (err) {
    return NextResponse.json({
      status: "error",
      message: "Subscriber failed",
      data: err,
    });
  }
}
