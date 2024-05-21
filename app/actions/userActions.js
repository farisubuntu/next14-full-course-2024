"use server";
import { redirect } from "next/navigation";

async function fetchSpecificUser(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  if (!data) {
    redirect("/login");
  }
  return data;
}

export async function navigateUserAction(formData) {
  const { id } = Object.fromEntries(formData);
    redirect("/users/newUser/");
}
