import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async ([url, AUTH_TOKEN, number]) => {
  console.log("url, AUTH_TOKEN, number>>>", url, AUTH_TOKEN, number);
  const res = await fetch(url);
  return await res.json();
};

const SwrComponent = () => {
  const [authToken, setAuthToken] = useState(123);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, error, isValidating } = useSWR(
    () =>
      pageNumber % 2 === 0
        ? [`https://reqres.in/api/users?page=${pageNumber}`, authToken, 7]
        : null,
    fetcher
  );

  console.log({ data, error, isValidating });

  return (
    <div>
      <h3>SwrComponent</h3>
      <button
        onClick={() => pageNumber > 1 && setPageNumber((prev) => prev - 1)}
      >
        Prev
      </button>
      <button onClick={() => setAuthToken(Math.random() * 1000)}>
        Randomize token
      </button>
      <button onClick={() => setPageNumber((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default SwrComponent;
