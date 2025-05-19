import React, { Suspense } from "react";
import UserTable from "./new/UserTable";
import Link from "next/link";

interface Porps {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Porps) => {
  return (
    <>
      <h1>User Table</h1>
      <Link href={"/users/new"} className="btn">
        New User
      </Link>

      <Suspense fallback="Loading...">
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
