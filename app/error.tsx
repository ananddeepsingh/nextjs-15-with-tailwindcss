"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error }: Props) => {
  console.log(error, "Error");

  const reset = () => {};
  return (
    <div>
      <div>An unexpected error has occured.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
