# `useRoute()`

- a `Nextjs` hook that allows you to access the router object and its properties within your component.
- It provides programmatic control over the router and allows you to navigate to different pages or perform other routing-related actions in response to user interactions or events within your component.
- Its useful when you need to hanfdle navigation or access route-specific information directly in your component logic.

```js
// app/page.js

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
```