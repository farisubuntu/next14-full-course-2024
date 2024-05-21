"use client";
import { navigateUserAction } from "../actions/userActions";
export default function users() {
  return (
    <form action="navigateUserAction">
      <input type="text" name="id" />
      <button type="submit">Submit</button>
    </form>
  );
}
