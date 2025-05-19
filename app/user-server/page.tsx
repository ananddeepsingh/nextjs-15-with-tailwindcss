import React from "react";

export default async function UserServerPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();

  return (
    <div>
      User Server Page
      <div>
        {userData.length > 0 &&
          userData.map((ele) => <li key={ele.id}>{ele.name}</li>)}
      </div>
    </div>
  );
}
