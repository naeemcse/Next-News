import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        let {searchParams} = new URL(req.url) ;
        let postID = parseInt(searchParams.get('postID')) ;

        const prisma=new PrismaClient();

        const result=await prisma.comments.findMany({
            // select:{userID:true ,description:true},
            where:{postID:postID},
            // select:{userID:true ,description:true,createdAt:true}
            include:{users:{select:{firstName:true ,lastName:true}}}
            
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}