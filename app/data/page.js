import Image from "next/image";
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
            <th>price</th>
            <th>image</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                />
              </td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
