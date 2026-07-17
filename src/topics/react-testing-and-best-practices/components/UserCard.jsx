function UserCard({ user }) {
  return (
    <article className="card">
      <h3>{user.name}</h3>

      <p>{user.email}</p>
    </article>
  );
}

export default UserCard;