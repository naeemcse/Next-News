import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SendEmail } from "@/utility/EmailUtility";

export async function POST(req, res) {

  try {
    let reqBody = await req.json();
    const email = reqBody.email; // Extract email from request body's json 
    const prisma = new PrismaClient();

    const result = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    if (result) {
      await prisma.users.update({
        where: { email: email },
        data: {
          otp: randomOtp,
        },
      });
      
      // Send email using SendEmail function (modify as needed)
    // const emailText = `Your OTP Code is ${randomOtp}`
    // const emailSubject = "OTP Code Update";
    //  await SendEmail(email, emailText, emailSubject);

      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: "No user found" });
    }
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}
