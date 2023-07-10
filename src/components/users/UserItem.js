import React from "react";

function UserItem({ user: { login, avatar_url } }) {
  //console.log(user);
  return <div className="card shadow-md compact side bg-base-100">{login}</div>;
}

export default UserItem;
