import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


export async function POST(req, res) {
try{

    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const count = await prisma.users.count({
        where: {
            email: reqBody.email,
            otp: reqBody.otp
        }
    });
    if(count===1){
        return NextResponse.json({ status: "success", data: "OTP Verified" });
    }
    else{
        return NextResponse.json({ status: "fail", data: "Invalid OTP" });
    }

}
 catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }

}