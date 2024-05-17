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