import React from "react";
import { thousandSeparator } from "../../components";
import { ProjectData } from "./data/ProjectData";

const ProjectApproval = ({ history }: any) => {
  return (
    <div className="project-card-container">
      {ProjectData.map((data) => (
        <div
          className="project-card"
          key={data.id}
          onClick={() => history.replace(`/project/${data.id}`)}
        >
          <div className="project-card-picture">
            <div className="project-card-bg">
              <img
                src={data.backgroundImg}
                className="project-card-bgImg"
                alt="backgroundImg"
              />
            </div>
            <div className="project-card-avatar">
              <img src={data.img} alt="avatar" className="project-card-img" />
            </div>
          </div>

          <div className="project-card-pad">
            <div className="project-card-header">
              <span className="body-text-3-semibold">{data.name}</span>
            </div>
            <div className="project-card-tab">
              <div className="project-card-tab-1">
                <div className="project-card-tab-1-top">
                  <p className="body-text-5 text-grey-600">Beneficiary</p>
                </div>
                <div className="project-card-tab-1-bottom">
                  <p
                    className="body-text-4-semibold text-primary-300"
                    style={{ opacity: 0.8 }}
                  >
                    {data.beneficiary}
                  </p>
                </div>
              </div>
              <div className="project-card-tab-2">
                <div className="project-card-tab-2-top">
                  <p className="body-text-5 text-grey-600">Number of slots</p>
                </div>
                <div className="project-card-tab-2-bottom">
                  <p
                    className="body-text-4-semibold text-primary-300"
                    style={{ opacity: 0.8 }}
                  >
                    {data.slots}
                  </p>
                </div>
              </div>
            </div>
            <div className="project-card-tab">
              <div className="project-card-tab-1">
                <div className="project-card-tab-1-top">
                  <p className="body-text-5 text-grey-600">Cost per slot</p>
                </div>
                <div className="project-card-tab-1-bottom">
                  <p
                    className="body-text-4-semibold text-primary-300"
                    style={{ opacity: 0.8 }}
                  >
                    &#8358;{thousandSeparator(data.cost)}
                  </p>
                </div>
              </div>
              <div className="project-card-tab-2">
                <div className="project-card-tab-2-top">
                  <p className="body-text-5 text-grey-600">
                    Slot cap per memeber
                  </p>
                </div>
                <div className="project-card-tab-2-bottom">
                  <p
                    className="body-text-4-semibold text-primary-300"
                    style={{ opacity: 0.8 }}
                  >
                    {data.slotPerCap}
                  </p>
                </div>
              </div>
            </div>

            <div className="project-card-tab">
              <div className="project-card-tab-1">
                <div className="project-card-tab-1-top">
                  <p className="body-text-5 text-grey-600">Returns</p>
                </div>
                <div className="project-card-tab-1-bottom">
                  <p
                    className="body-text-4-semibold text-green"
                    style={{ opacity: 0.8 }}
                  >
                    {data.returns}%
                  </p>
                </div>
              </div>
              <div className="project-card-tab-2">
                <div className="project-card-tab-2-top">
                  <p className="body-text-5 text-grey-600">Maturity duration</p>
                </div>
                <div className="project-card-tab-2-bottom">
                  <p
                    className="body-text-4-semibold text-primary-300"
                    style={{ opacity: 0.8 }}
                  >
                    {data.duration} months
                  </p>
                </div>
              </div>
            </div>

            <div className="project-card-tab">
              <div className="project-card-tab-1">
                <div className="project-card-tab-1-top">
                  <p className="body-text-5 text-grey-600">Category</p>
                </div>
                <div className="project-card-tab-1-bottom">
                  <p className="body-text-6-semibold project-card-tab-1-category text-primary-300">
                    {data.category}
                  </p>
                </div>
              </div>
              <div className="project-card-tab-2">
                <div className="project-card-tab-2-top">
                  <p className="body-text-5 text-grey-600">Approval Stage</p>
                </div>
                <div className="project-card-tab-2-bottom">
                  <p className="body-text-4 text-black"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectApproval;
