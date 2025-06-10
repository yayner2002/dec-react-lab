import React, { useEffect, useState } from "react";

function UserFetcher() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []); // run when the component is mounted once
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserFetcher;
