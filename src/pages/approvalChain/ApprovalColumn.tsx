import React from "react";
import { approvalListInterface } from "../../interfaces/approval";
import ApprovalNav from "./ApprovalNav";

interface ApprovalColumnProps {
  data: approvalListInterface | undefined
}

const ApprovalColumn: React.FC<ApprovalColumnProps> = ({
  data
}) => {
  return (
    <div>
      <div className="top-column">
        <ApprovalNav data={data} />
        <div className="top-column__left">
          <span className="body-text-5-semibold">Showing 1 - 8 of 8</span>
        </div>
        <div className="project-column__right">
          <div className="project-column__right-round">
            <a
              href="#"
              className="project-column__right-previous"
              style={{ fontSize: "35px" }}
            >
              &#8249;
            </a>
          </div>

          <span className="project-column__right-space"></span>
          <div className="project-column__right-round">
            <a
              href="#"
              className="project-column__right-next"
              style={{ fontSize: "35px" }}
            >
              &#8250;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalColumn;
