"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const navigation=(page)=>{
    router.push(page)
  }
  return (
    <>
      <section>
        <h1>useRouter</h1>
        <button className="border px-2" onClick={() => navigation('about')}>Go To About Page</button>
      </section>
    </>
  );
}
