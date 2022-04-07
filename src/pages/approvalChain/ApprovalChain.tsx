import React from "react";
import { Helmet } from "react-helmet-async";
import { Col } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ApprovalColumn from "./ApprovalColumn";
import useComponentVisible from "../../hooks/useComponentVisible";
import { ApprovalChainModal } from "../../components";
import { EditApprovalChainModal } from "../../components/Modal";
import { useGetApprovalList } from "../../lib/query/approval";
import { mandateDTOsInterface } from "../../interfaces/approval";

const ApprovalChain = () => {
  const { data } = useGetApprovalList({});
  const [ApprovalData, setApprovalData] =
    React.useState<mandateDTOsInterface>();

  const {
    ref: modalRef,
    isComponentVisible: isModalVisible,
    setIsComponentVisible: setIsModalVisible
  } = useComponentVisible(false);

  const {
    ref: editModalRef,
    isComponentVisible: isEditModalVisible,
    setIsComponentVisible: setIsEditModalVisible
  } = useComponentVisible(false);

  const handleClick = (data: mandateDTOsInterface) => {
    setApprovalData(data);
    setIsModalVisible(true);
  };

  const handleEditClick = () => {
    setIsEditModalVisible(true);
  };

  return (
    <>
      <Helmet>
        <title>Approval Chain - Noor Coop</title>
      </Helmet>
      <div className="user-dashboard">
        <ApprovalColumn data={data} />
        <div className="user-dashboard__center">
          {data?.mandateDTOs.map((item, index) => {
            return (
              <Col md={3} key={index}>
                <div className="user-item-container" key={index}>
                  <div className="dropdown" style={{ position: "absolute" }}>
                    <span className="user-item-container__more">
                      <BiDotsHorizontalRounded size={25} />
                    </span>
                    <div
                      className="dropdown-content"
                      style={{ right: 0, top: "42px" }}
                    >
                      <a onClick={() => handleClick(item)}>
                        <p>View approval chain</p>
                      </a>
                      <a onClick={handleEditClick}>
                        <p>Edit approval chain</p>
                      </a>
                    </div>
                  </div>
                  <div>
                    <img
                      src=""
                      alt="add user"
                      style={{ maxWidth: "80px", marginLeft: "15px" }}
                    />

                    <p
                      className="user-item-container__name heading-5-bold"
                      style={{ marginTop: "10px" }}
                    >
                      {item.type}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </div>
        {isModalVisible && (
          <ApprovalChainModal
            modalRef={modalRef}
            data={ApprovalData}
            modalMessage="WORKFLOW DETAILS"
            modalClose={() => setIsModalVisible(false)}
            proceed={() => [
              setIsEditModalVisible(true),
              setIsModalVisible(false)
            ]}
          />
        )}
        {isEditModalVisible && (
          <EditApprovalChainModal
            modalRef={editModalRef}
            data={ApprovalData}
            modalMessage="APPROVAL LEVELS"
            modalClose={() => setIsEditModalVisible(false)}
          />
        )}
      </div>
    </>
  );
};

export default ApprovalChain;
