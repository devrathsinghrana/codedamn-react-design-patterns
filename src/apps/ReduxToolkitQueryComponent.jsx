import React from "react";
import { useGetAllUsersQuery } from "../redux/api/user";

const ReduxToolkitQueryComponent = () => {
  const { data, isError, isFetching, isLoading } = useGetAllUsersQuery("/");

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isFetching) {
    return <h1>Fetching...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      ReduxToolkitQueryComponent
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxToolkitQueryComponent;
