import { redirect } from "next/navigation";

// examples of urls: 
// localhost:3000/about/3
// localhost:3000/about/4 => redirect to `/login` page
export default function SpecififAboutID({ params }) {
 console.log('params.id= ',params.id,' typeof = ',typeof params.id)
  if (params.id == 4) {
    redirect("/login");
  }
  return <div>SpecififAboutID : {params.id}</div>;
}
