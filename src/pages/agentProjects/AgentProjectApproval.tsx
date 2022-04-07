import React from "react";
import { thousandSeparator } from "../../components";
import TotalLineChart from "../projects/chart/TotalLineChart";
import { ProjectPartialData } from "../projects/data/ProjectPartialData";

const AgentProjectApproval = () => {
  return (
    <div className="project-card-container scroll">
      {ProjectPartialData.map((data) => (
        <div className="project-card" key={data.id}>
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
                    &#8358;{data.cost}
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
                <div className="project-card-tab-1-line">
                  <TotalLineChart
                    totalAmountRaised={data.amountRaised}
                    totalAmountNeeded={data.neededAmount}
                    bgColor="#4f269f"
                  />
                </div>
                <div
                  className="project-card-tab-1-bottom"
                  style={{ marginTop: "-5px" }}
                >
                  <p className="body-text-4-semibold text-primary-300">
                    &#8358; {thousandSeparator(data.amountRaised)} raised of
                    &#8358;
                    <span
                      className="text-primary-300"
                      style={{ opacity: "80%" }}
                    >
                      {thousandSeparator(data.neededAmount)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentProjectApproval;
