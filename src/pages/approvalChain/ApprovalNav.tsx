import React from "react";
import { approvalListInterface } from "../../interfaces/approval";

interface ApprovalNavProps {
  data: approvalListInterface | undefined
}

const ApprovalNav: React.FC<ApprovalNavProps> = ({
  data
}) => {
  return (
    <div className="user-nav">
      <h3 className="user-nav__header">
        Approval Chains <span className="user-nav__subtext">{data?.mandateDTOs?.length} chains</span>
      </h3>
    </div>
  );
};

export default ApprovalNav;
