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

> See Examples for uses in `server component`, `client component`
