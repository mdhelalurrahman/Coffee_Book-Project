import React from "react";
import {useRouteError} from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-center font-bold">Something went wrong</h1>
      <p className="text-center text-red-500">
        {error.statusText || error.message}
      </p>
      <p className="text-center text-red-500">{error.data}</p>
      <p className="text-center text-red-500">{error.status}</p>
    </div>
  );
};

export default Error;
