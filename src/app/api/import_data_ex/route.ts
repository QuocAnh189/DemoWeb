import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { Table } from "src/constant";

export async function GET() {
  try {
    await sql`DROP TABLE ${Table}`;
    revalidatePath("/home");
    return NextResponse.json(
      { message: "Delete Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return `Failed ${JSON.stringify(error)}`;
  }
}
