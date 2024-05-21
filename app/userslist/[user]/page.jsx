// app/userslist/[user]

export default function SingleUserPage({ params }) {
  const user = params.user;

  return (
    <div className="text-3xl border px-2 mt-3 text-blue-600">
      SingleUserPage - username:{" "}
      <span className="text-3xl text-red-600 p-1 mt-2">{user}</span>
    </div>
  );
}
