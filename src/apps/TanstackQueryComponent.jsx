import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

async function getAllUsers() {
  return await (await fetch("https://dummyjson.com/users")).json();
}

const TanstackQueryComponent = () => {
  const qc = useQueryClient();
  const { data, status, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  console.log(data);
  console.log(error);

  if (status !== "success") {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      TanstackQueryComponent
      <button onClick={(e) => qc.invalidateQueries(["users"])}>Refresh</button>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TanstackQueryComponent;
