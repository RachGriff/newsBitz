import React from "react";

const UserDetails = ({ user }) => {
  return (
    <section className="side-bar">
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt="avatar" />
    </section>
  );
};

export default UserDetails;
