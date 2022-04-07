import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { useGetUsers } from "../../lib/query/user";
import UsersList from "./UsersList";
import UsersNav from "./UsersNav";

const Users = () => {
  const { data, error } = useGetUsers({});

  React.useEffect(() => {
    if (error) {
      const errorMessage: any = error;
      toast.error(errorMessage);
    }
  }, [error]);

  return (
    <>
      <Helmet>
        <title>Noor Coop users</title>
      </Helmet>
      <div className="user-dashboard">
        <UsersNav count={data?.count} />
        <div className="user-container">
          <UsersList users={data?.userDTOs} />
        </div>
      </div>
    </>
  );
};

export default Users;
