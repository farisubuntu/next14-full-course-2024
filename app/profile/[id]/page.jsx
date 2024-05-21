import { redirect } from "next/navigation";

async function fetchSpecificUser(id) {
  const res = await fetch(`https://fakestoreapi.com/users/${id}`);
  const data = await res.json();

  if (!data) {
    redirect("/login");
  }
  return data;
}

export default async function ProfilePage({ params }) {
  // console.log(typeof params); // object
  // const {id} = params.id; // 'undefined'
  const id = params.id; // '4'

  console.log(id);
  const user = await fetchSpecificUser(id);
  return <div className="text-3xl text-blue-600">{JSON.stringify(user)}</div>;
}
