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
