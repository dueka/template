import React from "react";

interface UsersNavProps {
  count?: Number;
}

const UsersNav: React.FC<UsersNavProps> = ({ count }) => {
  return (
    <div className="user-nav">
      <h3 className="user-nav__header">
        Users <span className="user-nav__subtext">{count} people</span>
      </h3>
    </div>
  );
};

export default UsersNav;
