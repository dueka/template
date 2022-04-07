import React from "react";
import { withRouter } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { ReactComponent as SearchIcon } from "../assets/vectors/search.svg";
import { ReactComponent as UserIcon } from "../assets/vectors/user-icon.svg";
import { ReactComponent as NotificationIcon } from "../assets/vectors/notification-icon.svg";
import { ReactComponent as NewNotification } from "../assets/vectors//greenRound.svg";
import Emoji from "./Emoji";
import UserContext from "context/UserContext";
const UserHeader = ({ location }: any) => {
  const hideInLocation = [
    "/login",
    "/forgot-password",
    "/signup/admin",
    "/confirm-password"
  ];

  const { userInfo } = React.useContext(UserContext);
  return (
    <div className="hide-on-print">
      <div
        className={`"" ${
          hideInLocation.includes(location.pathname) && "hide-nav"
        }`}
      >
        <div>
          <div className="dashboard">
            <div className="dashboard-column">
              <div className="dashboard__header">
                <span className="heading-3-regular text-grey-600"> Howdy </span>{" "}
                <span className="heading-3-regular">{userInfo.given_name}</span>
                <Emoji symbol="🤟🏾" label="peace" className="dashboard__emoji" />
              </div>

              <div className="dashboard__user-icon-div ">
                <SearchIcon width={14} />
                <div className="notification-div px-3">
                  <NotificationIcon width={13} />
                  <NewNotification
                    className="notification-div__active-state"
                    width={12}
                  />
                </div>

                <div className="user-details-div">
                  <p className="user-details-div__header">
                    {userInfo.family_name + " " + userInfo.given_name}
                  </p>
                  <p className="user-details-div__role">
                    {userInfo.is_admin ? "ADMIN" : "AGENT"}
                  </p>
                </div>
                <UserIcon width={40} />
              </div>
            </div>
            <ReactTooltip
              place="bottom"
              border={false}
              textColor="#4f269f"
              backgroundColor="#f2eef7"
              className="dashboard__right-tooltip"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(UserHeader);
