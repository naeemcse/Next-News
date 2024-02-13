import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        let {searchParams} = new URL(req.url) ;
        let keyword = (searchParams.get('keyword')) ;
        const prisma=new PrismaClient();
        const result=await prisma.news_list.findMany({
            where:{title:{contains:keyword}}, // kewwords is a column in the table news_list but spellin was mistake 
            select:{title:true , id:true , img1:true }
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}