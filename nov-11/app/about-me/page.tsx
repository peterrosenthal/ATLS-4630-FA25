// import { useState, useEffect } from "react";
import { neon } from "@neondatabase/serverless";
import Link from "next/link";

export default async function AboutMe() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const data = await sql`SELECT * FROM playing_with_neon`;

  /*
  const [data, setData] = useState<{ id: number, name: string, value: number }[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api');
      const json = await response.json();
      setData(json);
    })();
  }, []);
  */

  return (
    <>
      <h1>About me!</h1>
      <p>My name is peter</p>
      <Link href="/" prefetch>Go home</Link>
      <ul>
        {data.map(item => <li key={item.id}>{item.name}: {item.value}</li>)}
      </ul>
    </>
  );
}
