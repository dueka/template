import React from "react";
import { Col, Row } from "react-bootstrap";
import AddIcon from "../../assets/vectors/add-icon.svg";
import BanIcon from "../../assets/vectors/ban-icon.svg";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import AddUsersModal from "./AddUsersModal";
import ViewUserModal from "./ViewUserModal";
import { userInfoInterface } from "../../interfaces/users";
import { useToggleUserActivation } from "../../lib/query/user";
import { toast } from "react-toastify";

interface UserListProps {
  users: any;
}

const UsersList: React.FC<UserListProps> = ({ users }) => {
  const [showAddUserModal, setShowAddUserModal] = React.useState(false);
  const [showViewUserModal, setShowViewUserModal] = React.useState(false);
  const [selectedUserDetails, setSelectedUserDetails] =
    React.useState<userInfoInterface>();
  const { mutate } = useToggleUserActivation();

  const handleViewUser = (user: userInfoInterface) => {
    setShowViewUserModal(true);
    setSelectedUserDetails(user);
  };

  const toggleActivation = async (pk: Number) => {
    await mutate(pk, {
      onSuccess: async (response: any) => {
        toast.success(response.message);
        setShowViewUserModal(false);
      },
      onError: (err: any) => {
        toast.error(err);
      }
    });
  };

  return (
    <>
      <Row>
        <Col md={3}>
          <div
            className="add-user-container"
            onClick={() => setShowAddUserModal(true)}
          >
            <img src={AddIcon} alt="add user" style={{ maxWidth: "80px" }} />

            <p>Invite users</p>
          </div>
        </Col>

        {users &&
          users?.map((user: userInfoInterface) => (
            <Col md={3} className="mb-4" key={user.pk + user.surname}>
              <div className="user-item-container">
                <img
                  src={BanIcon}
                  alt="Ban"
                  className={`user-item-container__ban ${
                    user.deactivated ? "visible" : "invisible"
                  }`}
                />
                {!user.loggedInUser && (
                  <div className="dropdown" style={{ position: "absolute" }}>
                    <span className="user-item-container__more">
                      <BiDotsHorizontalRounded size={25} />
                    </span>
                    <div
                      className="dropdown-content"
                      style={{ right: 0, top: "42px" }}
                    >
                      <p onClick={() => handleViewUser(user)}>View Details</p>
                      <p onClick={() => toggleActivation(user?.pk)}>
                        {!user?.deactivated ? "Deactivate" : "Activate"}
                      </p>
                    </div>
                  </div>
                )}
                <div>
                  <div className="user-item-container__image">
                    <img src={user.profilePicture} alt="profile" />
                  </div>
                  <p className="user-item-container__name">
                    {user.surname + " " + user.firstname}
                  </p>
                  <p className={"user-item-container__role"}>
                    {user.loggedInUser ? "This is you" : user.email}
                  </p>

                  {/* todo write a function to get role */}
                  <div
                    className={`badge ${
                      user.type === "ADMINISTRATOR" && "admin-role-container"
                    } ${user.type === "AGENT" && "agent-role-container"}`}
                  >
                    {user.type}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        <Col md={3} className="d-none">
          <div className="user-item-container">
            <div>
              <div className="user-item-container__image"></div>
              <p className="user-item-container__name">Kehinde Ademola</p>
              <p className="user-item-container__role">This is you</p>

              <div className="badge admin-role-container">ADMINISTRATOR</div>
            </div>
          </div>
        </Col>

        <Col md={3} className="d-none">
          <div className="user-item-container">
            <div className="dropdown" style={{ position: "absolute" }}>
              <span className="user-item-container__more">
                <BiDotsHorizontalRounded size={25} />
              </span>
              <div
                className="dropdown-content"
                style={{ right: 0, top: "42px" }}
              >
                <p>View Details</p>
                <p>Edit Information</p>
                <p>Deactive</p>
              </div>
            </div>
            <div>
              <div className="user-item-container__image"></div>
              <p className="user-item-container__name">Kehinde Ademola</p>
              <p className="user-item-container__role">This is you</p>

              <div className="badge agent-role-container">AGENT</div>
            </div>
          </div>
        </Col>

        <Col md={3} className="d-none">
          <div className="user-item-container">
            <img src={BanIcon} alt="Ban" className="user-item-container__ban" />
            <div className="dropdown" style={{ position: "absolute" }}>
              <span className="user-item-container__more">
                <BiDotsHorizontalRounded size={25} />
              </span>
              <div
                className="dropdown-content"
                style={{ right: 0, top: "42px" }}
              >
                <p>View Details</p>
                <p>Edit Information</p>
                <p>Deactive</p>
              </div>
            </div>
            <div>
              <div className="user-item-container__image"></div>
              <p className="user-item-container__name">Kehinde Ademola</p>
              <p className="user-item-container__role">This is you</p>

              <div className="badge admin-role-container">ADMINISTRATOR</div>
            </div>
          </div>
        </Col>
      </Row>

      <AddUsersModal
        isAddUserModal={showAddUserModal}
        handleClose={() => setShowAddUserModal(false)}
      />

      <ViewUserModal
        isViewUserModal={showViewUserModal}
        selectedUserDetails={selectedUserDetails}
        toggleActivation={toggleActivation}
        handleClose={() => setShowViewUserModal(false)}
      />
    </>
  );
};

export default UsersList;
