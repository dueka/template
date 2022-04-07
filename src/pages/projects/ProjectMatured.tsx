import React from "react";
import { ProjectFundedData } from "./data/ProjectFundedData";
import { thousandSeparator } from "../../components";

const ProjectMatured = ({ history }: any) => {
  return (
    <div className="project-card-container scroll">
      {ProjectFundedData.map((data) => (
        <div
          className="project-card"
          key={data.id}
          style={{ paddingBottom: 30, height: "23rem" }}
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
            <div className="project-card-tab scroll">
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
                    &#8358; {thousandSeparator(data.cost)}
                  </p>
                </div>
              </div>
              <div className="project-card-tab-2">
                <div className="project-card-tab-2-top">
                  <p className="body-text-5 text-grey-600">Members</p>
                </div>
                <div className="project-card-tab-2-bottom">
                  <p
                    className="body-text-4-semibold text-primary-300"
                    style={{ opacity: 0.8 }}
                  >
                    {data.members}
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
                  <p className="body-text-5 text-grey-600">Category</p>
                </div>
                <div
                  className="project-card-tab-1-bottom"
                  style={{ marginLeft: "60px" }}
                >
                  <p
                    className="body-text-6-semibold project-card-tab-1-category text-primary-300"
                    // style={{ opacity: 1 }}
                  >
                    {data.category}
                  </p>
                </div>
              </div>
            </div>
            <div className="project-card-tab">
              <div className="project-card-tab-1">
                <div className="project-card-tab-1-top">
                  <p className="body-text-5-semibold text-grey-600">
                    Maturity date:{" "}
                    <span className="body-text-5-semibold text-round">
                      {data.maturityDate}
                    </span>
                  </p>
                </div>

                <div
                  className="project-card-tab-1-bottom"
                  style={{ marginTop: "10px" }}
                >
                  <p className="body-text-4-bold text-primary-300"></p>
                </div>
              </div>
            </div>
            <button className="project-card-returns">
              View returns shared
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMatured;
