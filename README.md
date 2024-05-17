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
// you can add/update/delete any user in your db.js/users array but before that read about 'Middleware(s)' function next section
}
```

---

