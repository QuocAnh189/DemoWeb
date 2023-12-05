import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { Table } from 'src/constant';


export async function GET() {
    try {
        await sql`DROP TABLE ${Table}`;
        revalidatePath('/home');
        return NextResponse.json({ message: 'Delete Successfully' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
