import React from "react";

function UserItem({ user }) {
  console.log(user);
  return <div>{user.login}</div>;
}

export default UserItem;
