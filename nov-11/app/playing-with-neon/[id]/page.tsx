import { neon } from "@neondatabase/serverless";

export default async function PlayingWithNeon({ params }: { params: Promise<{ id: string }> }) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const { id } = await params;
  const [ data ] = await sql`SELECT * FROM playing_with_neon WHERE id = ${id}`;

  return (
    <>
      <p>Name: {data.name}</p>
      <p>Value: {data.value}</p>
    </>
  );
}