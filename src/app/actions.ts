"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { IBlog } from "src/style";
// import { process.env.congngheweb } from "src/constant";

export const getEx = async (id: string) => {
  try {
    const data: any =
      await sql`SELECT * FROM congngheweb WHERE _id=${id}`;
    const { rows: ex } = data;
    return ex;
  } catch (error) {
    return `Failed ${JSON.stringify(error)}`;
  }
};

export const getExs = async () => {
  try {
    const data: any = await sql`SELECT * FROM congngheweb`;
    const { rows: exs } = data;
    return exs;
  } catch (error) {
    console.log(error);
    return `Failed ${JSON.stringify(error)}`;
  }
};

export const createEx = async (formValues: IBlog) => {
  try {
    const result = await sql`INSERT INTO congngheweb (_id, avatar, name, description, age, CreatedAt) VALUES (${
      formValues._id
    },${formValues.avatar},${formValues.name},${formValues.description},${
      formValues.age
    },${JSON.stringify(new Date())});`;
    revalidatePath("/home");
    return "Success";
  } catch (error) {
    console.log({ error });
    return `Failed ${JSON.stringify(error)}`;
  }
};

export const updateEx = async (blog: IBlog) => {
  try {
    await sql`UPDATE congngheweb SET name=${blog.name},avatar=${blog.avatar},age=${blog.age},description=${blog.description} WHERE _id = ${blog._id}`;
    revalidatePath("/home");
    return "success";
  } catch (error) {
    console.log(error);
    return `Failed ${JSON.stringify(error)}`;
  }
};

export const changeDisLikeEx = async (id: string, dislike: boolean) => {
  try {
    await sql`UPDATE congngheweb SET dislike = ${dislike} WHERE _id = ${id}`;
    revalidatePath("/home");
    return "success";
  } catch (error) {
    console.log(error);
    return `Failed ${JSON.stringify(error)}`;
  }
};

export const deleteEx = async (id: string) => {
  try {
    await sql`DELETE FROM congngheweb WHERE _id=${id};`;
    revalidatePath("/home");
    return "Success";
  } catch (error) {
    console.log(error);
    return `Failed ${JSON.stringify(error)}`;
  }
};
