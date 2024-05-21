# `Link`

- `Link` is a component provided by `Next.js` that allows you to create links to navigate between pages in your application.
- Its primarily used for declarative, client-side navigation. When you click on a link created with `Link`, it prevents the default browser full-page referesh and fetches the new page content on the client side, resulting in a faster and smooter user experience.
- Its typically used in your components's `JSX` code to create clickable links tha lead to other pages within your `Next.js` application.
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

---

# `Dynamic Routes`

- Dynamic route in `Next.js` refer to a feature that allows you to create web pages with variable or dynamic parts in the `URL`.
- Instead of defining individual routes for every possible `URL`, you can create a single `route pattern` that matches a variety of dynamic values.
- Its useful whe you have pages that share a common structure but differ based on specific information in the `URL`.

```js
// app/userslist/[user]

// example url address: 'localhost:3000/userslist/jhon

export default function SingleUserPage({ params }) {
  const user = params.user;
  console.log(params); // {user: 'jhon'}
  return (
    <div className="text-3xl border px-2 mt-3 text-blue-600">
      SingleUserPage - username:{" "}
      <span className="text-3xl text-red-600 p-1 mt-2">{user}</span>
    </div>
  );
}
```
---

# `Catch-All` Routes

- In `Next.js`, the `[...foldername]` notation indicates that you are using a `catch-all` route, which allows you to capture multiple `URL` segments and treat them as a dynamic array of values.
- Its useful when you want to create dynamic rtoutes that can handle varying mumbers of `URL` segments.

```jsx
// app/projects/[...all]/page.jsx

// example url address: localhost:3000/projects/e-commerice/order/abcd-order
export default function SpecificProject({ params }) {
  console.log(params);
  // ^ output:
  // { all: [ 'e-commerice', 'order', 'abcd-order' ] }
  // note: 'all' word comes from [...all] route name

  // Examples of return value:

  return <h1>Project {params.all}</h1>; // Project e-commericeorderabcd-order

  /*
   <h3>All routes:</h3>
   {
    params.all.map((p)=>(
     <li key={p}>{p}</li>
    ))
   }
  */
}
```

---

# `redirect` function

The `redirect` function allows you to redirect the user to another URL. `redirect` can be used in [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components), [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).

**Notes**:

- In Server Actions and Route Handlers, `redirect` should be called after the `try/catch` block.
- If you prefer to return a 308 (Permanent) HTTP redirect instead of 307 (Temporary), you can use the [`permanentRedirect` function](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect) instead.

> `redirect` does not return any value. `redirect` does not require you to use `return redirect()` as it uses the TypeScript [`never`](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) type.

**`parameters`**

```js
redirect(path, type);
```

| Parameter | Type                                                          | Description                                                 |
| --------- | ------------------------------------------------------------- | ----------------------------------------------------------- |
| `path`    | `string`                                                      | The URL to redirect to. Can be a relative or absolute path. |
| `type`    | `'replace'` (default) or `'push'` (default in Server Actions) | The type of redirect to perform.                            |

```jsx
// app/about/[id].page.jsx
import { redirect } from "next/navigation";

// examples of urls:
// localhost:3000/about/3
// localhost:3000/about/4 => redirect to `/login` page
export default function SpecififAboutID({ params }) {
  // if (params.id === 4) { // note id is a string not number
  if (params.id == 4) { // this  works...
    redirect("/login");
  }
  return <div>SpecififAboutID : {params.id}</div>;
}
```

> See Examples for uses in `server component` and `client component` through a `Server Action`

