import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const results = await sql`SELECT * FROM playing_with_neon`;
  return Response.json(results);
}
