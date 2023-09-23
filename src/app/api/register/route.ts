import {NextResponse} from 'next/server'
import prisma from '@/app/prismaContext/prismadb'
export async function POST(request:Request){
    const body = await request.json();
    const {email,name,rut} = body;
    const user = await prisma.user.create({
        data:{
            email,
            name,
            rut,
        }
    });
    return NextResponse.redirect('/login');
}