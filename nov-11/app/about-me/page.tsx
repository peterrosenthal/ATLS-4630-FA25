import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <h1>About me!</h1>
      <p>My name is peter</p>
      <Link href="/" prefetch>Go home</Link>
    </>
  );
}
