import {NextResponse} from "next/server";

import { headers } from 'next/headers';
import { PrismaClient } from '@prisma/client';

export async function POST(req,res){
    try {

        let headerList = headers() ;
        let id = parseInt(headerList.get('id')) ;

        let reqBody = await req.json() ;
        const prisma = new PrismaClient() ;
    
        const result = await prisma.users.update({
            where:{id:id},
            data:reqBody 
        })
        
        return NextResponse.json({status:"Success",data:result})

    } catch (error) {
        return NextResponse.json({status:"fail to update",data:error})

        
    }
}
