import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE congngheweb (_id varchar(255), avatar varchar(255), name varchar(255), description varchar(255), age int, dislike boolean ,CreatedAt TIMESTAMP );`;
    revalidatePath("/home");
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
