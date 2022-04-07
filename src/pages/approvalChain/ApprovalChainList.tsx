import React from "react";
import { Col, Row } from "react-bootstrap";
import AddIcon from "../../assets/vectors/add-icon.svg";
import BanIcon from "../../assets/vectors/ban-icon.svg";

import { BiDotsHorizontalRounded } from "react-icons/bi";

const ApprovalChainList = () => {
  return (
    <Row>
      <Col md={3}>
        <div className="add-user-container">
          <img src={AddIcon} alt="add user" style={{ maxWidth: "80px" }} />

          <p>Invite users</p>
        </div>
      </Col>

      <Col md={3}>
        <div className="user-item-container">
          <div>
            <div className="user-item-container__image"></div>
            <p className="user-item-container__name">Kehinde Ademola</p>
            <p className="user-item-container__role">This is you</p>

            <div className="badge admin-role-container">ADMINISTRATOR</div>
          </div>
        </div>
      </Col>

      <Col md={3}>
        <div className="user-item-container">
          <div className="dropdown" style={{ position: "absolute" }}>
            <span className="user-item-container__more">
              <BiDotsHorizontalRounded size={25} />
            </span>
            <div className="dropdown-content" style={{ right: 0, top: "42px" }}>
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

      <Col md={3}>
        <div className="user-item-container">
          <img src={BanIcon} alt="Ban" className="user-item-container__ban" />
          <div className="dropdown" style={{ position: "absolute" }}>
            <span className="user-item-container__more">
              <BiDotsHorizontalRounded size={25} />
            </span>
            <div className="dropdown-content" style={{ right: 0, top: "42px" }}>
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
  );
};

export default ApprovalChainList;
