"use client";
import React, { useEffect, useState } from "react";

const UsersClient = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setUserData(data);
      });
  }, []);

  return (
    <div>
      {userData.length > 0 &&
        userData.map((ele) => <li key={ele.id}>{ele.name}</li>)}
    </div>
  );
};

export default UsersClient;
