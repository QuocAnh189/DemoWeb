import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { Table } from "src/constant";
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    const result =
      await sql`INSERT INTO ${Table} (_id, avatar, name, description, age, dislike, CreatedAt) VALUES (${uuidv4()},'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1699412622/334051984_3538504303032537_58771249030900257_n_lz9ove.jpg','Trương Nguyễn Phước Trí','Bạn này đến từ Huế mộng mơ nhưng không mơ mộng như tôi nghĩ , thật thất vọng khi có mối tình như thế này',3,false,'4/13/2006');`;
    revalidatePath("/home");
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
