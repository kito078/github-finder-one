import React from "react";

function UserItem({ user: { login, avatar_url } }) {
  //console.log(user);
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
