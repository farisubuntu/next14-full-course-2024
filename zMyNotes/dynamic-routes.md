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
