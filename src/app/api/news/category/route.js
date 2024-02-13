import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        let {searchParams} = new URL(req.url) ;
        let catID = parseInt(searchParams.get('catID')) ;

        const prisma=new PrismaClient();
        const result=await prisma.news_list.findMany({
            where:{catID:catID},
            select:{title:true , id:true , img1:true }
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}