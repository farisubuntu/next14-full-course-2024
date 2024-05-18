## Snippets: fetching data

### In `Client Components`:

```js
// app/data/page.js

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function DataPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://fakestoreapi.com/products/");
      let data = await res.json();
      setProducts((oldValues) => [...data]);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>Data Page</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              // .....
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
```

### In `Server Components`:

```js
// app/data/page.js

async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return data;
}

export default async function Data() {
  const products = await fetchData();
  console.log(products);
  return (
    <>
      <h1>Data Page</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            // .....
         // ....
```

---

## Backend Intro and `GET` Method

> Note: When you Inside the `app/api` directory = working with the `API` = working with the `backend`

**Basic**

- make `api` dir
- create the `endpoint` for the routes

```js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ result: "Hello" }); // {"result":"Hello"}
  // open developer tool -> network -> F5 to see the request
  // the status will be 200, if you want to change:
  // return NextResponse.json({ result: "Hello" },{status:404}); // result in Not Found
}
```

- To work with the `dynamic route` make for ex. `api/users/[id] dir and create a `route.js` file inside it:

```js
// app/api/users/[id]/route.js
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  return NextResponse.json({
    result: `User Id: ${id}`,
  });
}
```

- To work with data, create for ex. `/app/utils` -> `db.js`

```js
// utils/db.js
const users = [
  {
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    // ...
  },
];
```

now use this file from the route

```js
// app/api/users/route.js

import { NextResponse } from "next/server";
// import users array from db
import { users } from "@/app/utis/db.js";

export async function GET() {
  export async function GET() {
    return NextResponse.json(users);
  }
}

// also for `json` file such 'posts.json' you can get it this way:

import { json } from "next/server";

export async function GET() {
  const { users } = json.GET("@/app/utils/db.js");
  return Response.json(posts);
}
```

> You can add/update/delete any user in your db.js/users array but before that read about 'Middleware(s)' function next section

---

## `Middlewares`

In `Next.js`, middleware's are function or pieces of code that run in between a user's request to a web page and the server's response. They help you process and modify the request or response, adding `extra functionality` to your web application.

Example: suppose that the user want to access some sort of a route which needs the user credential like the user email/password then you need a `middleware` to redirect the user to the _login_ page and after authentication he would be able to get a response from their specific route right here.

> get an introduction about `middlewares` at [https://nextjs.org/docs/app/building-your-application/routing/middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

### Common Scenarios of `middlewares` uses:

- `Authentication and Authorization`
- Server-Side Redirects (at the server level)
- Logging and Analytics

`middlewares` NOT for:

- Complex Data Fetching and Manipulation
- Heavy Computational Tasks
- Extensive Session Management
- Direct Database Operations

**Convention**: `middleware.ts/js` in the root of your project such `/src`, `app/`, `pages/`

**Mactching Paths**: `Middleware` will be invoked for _every route in your project_. use matchers to precisely target or exclude specific routes. The following is the execution order:

- `headers` from `next.config.js`
- `redirects` from `next.config.js`
- Middleware (`rewrites`, `redirects`, etc.)
- `beforeFiles` (`rewrites`) from `next.config.js`
- Filesystem routes (`public/`, `_next/static/`, `pages/`, `app/`, etc.)
- `afterFiles` (`rewrites`) from `next.config.js`
- Dynamic Routes (`/blog/[slug]`)
- `fallback` (`rewrites`) from `next.config.js`

**There are two ways to define which paths Middleware will run on:**

1. `Custom matcher config`
2. `Conditional statements`

**Example - basic**

```js
// /src/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware ran");

  return NextResponse.json({ success: "OK...." });
}

// matcher: allows you to filter Middleware to run on specific paths.

export const config = {
  matcher: ["/userslist/:path*"], //single path
  //  or multiple paths:

  // matcher: ['/about/:path*', '/dashboard/:path*'],
};
// go to address bar and enter:
// localhost:3000/userslist
// localhost:3000/userslist/jhonnnn

// in server console : 'middleware ran'
// each request return {success: 'Ok ....}
```

**Example - redirection:**

```js
// /src/middleware.js

import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
/*
Notes: the `matcher` config allows full regex, for ex.

  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],


*/
```

### Conditional Statements

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }
  // or
  if(request.nextUrl.pathname !== '/login'){
    return NextResponse.redirect(new URL('/login',request.url))
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) 
  // note: paths must start with '/'
  {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}
```

continue: 
_Mastering Next.js 14: A Comprehensive Guide to the Latest Features and Advanced Concepts!_

https://www.youtube.com/watch?v=GowPe3iiqTs&list=PLYQvKkG7dksnf4OPr5qlSqd__7rAX6Iau&index=3

[02:09:41]