import React, { useState } from "react";
import { ReactComponent as CaretLeft } from "../../assets/vectors/caret-left.svg";
import { useParams } from "react-router-dom";
import { ProjectData } from "./data/ProjectData";
import { thousandSeparator } from "../../components";

const ViewProject = ({ history }: any) => {
  const { id }: any = useParams();
  const [project] = useState([ProjectData[id]]);
  return (
    <div className="view-dashboard">
      {project.map((data) => {
        return (
          <div key={data.id} className="view-project">
            <div className="view-project__left">
              <div className="view-project__column">
                <div className="view-project-header" key={data?.id}>
                  <div className="view-project-icon">
                    <CaretLeft onClick={() => history.replace("/projects")} />
                  </div>
                  <div className="view-project-text heading-3-bold">
                    {data?.name}
                  </div>
                  <p className="view-project-category body-text-6-semibold">
                    {data?.category}
                  </p>
                </div>
                {/* <button className="view-card-btn">Pause Project</button> */}
              </div>
              <div className="view-project-about">
                <div className="view-project-bg">
                  <img
                    src={data?.backgroundImg}
                    alt="background"
                    className="view-project-img"
                  />
                </div>
                <h2 className="heading-3-bold">About this project</h2>
                <div className="view-project-section">
                  <p className="body-text-3-semibold text-grey-200">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself.
                  </p>
                  <p className="body-text-3-semibold text-grey-200">
                    Because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally encounter consequences
                    that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself
                  </p>
                </div>
                <div
                  className="view-project-bg"
                  style={{ marginTop: "2.5rem" }}
                >
                  <img
                    src={data?.backgroundImg1}
                    alt="background"
                    className="view-project-img"
                  />
                </div>
                <div className="view-project-section">
                  <p className="body-text-3 text-grey-200">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself.
                  </p>
                  <p className="body-text-3 text-grey-200">
                    Because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally encounter consequences
                    that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself
                  </p>
                </div>
              </div>
            </div>
            <div className="view-project__right">
              <div>
                <div className="view-project-card">
                  <div className="view-project-card__pad">
                    <div className="view-project-card__header">
                      <h2 className="heading-4-bold">Project info</h2>
                    </div>
                    <div className="project-card-tab">
                      <div className="project-card-tab-1">
                        <div className="project-card-tab-1-top">
                          <p className="body-text-4 text-grey-600">
                            Number of slots
                          </p>
                        </div>
                        <div className="project-card-tab-1-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.slots}
                          </p>
                        </div>
                      </div>
                      <div className="project-card-tab-2">
                        <div className="project-card-tab-2-top">
                          <p className="body-text-4 text-grey-600">
                            Funds required
                          </p>
                        </div>
                        <div className="project-card-tab-2-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            &#8358;{thousandSeparator(data?.neededAmount)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="project-card-tab">
                      <div className="project-card-tab-1">
                        <div className="project-card-tab-1-top">
                          <p className="body-text-4 text-grey-600">
                            Cost per slot
                          </p>
                        </div>
                        <div className="project-card-tab-1-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            &#8358;{thousandSeparator(data?.cost)}
                          </p>
                        </div>
                      </div>
                      <div className="project-card-tab-2">
                        <div className="project-card-tab-2-top">
                          <p className="body-text-4 text-grey-600">
                            {" "}
                            Slot cap per memeber
                          </p>
                        </div>
                        <div className="project-card-tab-2-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.slotPerCap}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="project-card-tab">
                      <div className="project-card-tab-1">
                        <div className="project-card-tab-1-top">
                          <p className="body-text-4 text-grey-600">Returns</p>
                        </div>
                        <div className="project-card-tab-1-bottom">
                          <p
                            className="body-text-3-semibold  text-green"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.returns}%
                          </p>
                        </div>
                      </div>
                      <div className="project-card-tab-2">
                        <div className="project-card-tab-2-top">
                          <p className="body-text-4 text-grey-600">
                            Maturity duration
                          </p>
                        </div>
                        <div className="project-card-tab-2-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.duration} months
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="project-card-tab">
                      <div className="project-card-tab-1">
                        <div className="project-card-tab-1-top">
                          <p className="body-text-4 text-grey-600">
                            Vendor&#39;s name
                          </p>
                        </div>
                        <div className="project-card-tab-1-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.vendorsName}
                          </p>
                        </div>
                      </div>
                      <div className="project-card-tab-2">
                        <div className="project-card-tab-2-top">
                          <p className="body-text-4 text-grey-600">
                            Account type
                          </p>
                        </div>
                        <div className="project-card-tab-2-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.accountType}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="project-card-tab">
                      <div className="project-card-tab-1">
                        <div className="project-card-tab-1-top">
                          <p className="body-text-4 text-grey-600">
                            Bank details
                          </p>
                        </div>
                        <div className="project-card-tab-1-bottom">
                          <p
                            className="body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.bankDetails}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="project-card-tab">
                      <div className="project-card-tab-1">
                        <div className="project-card-tab-1-top">
                          <p className="body-text-4 text-grey-600">
                            Beneficiary&#39;s credit report
                          </p>
                        </div>
                        <div className="project-card-tab-1-bottom">
                          <p
                            className="project-card-tab-svg body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.beneficiaryCreditReport}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="project-card-tab">
                      <div className="project-card-tab-1">
                        <div className="project-card-tab-1-top">
                          <p className="body-text-4 text-grey-600">
                            Beneficiary&#39;s credit report
                          </p>
                        </div>
                        <div className="project-card-tab-1-bottom">
                          <p
                            className="project-card-tab-svg body-text-3-semibold text-primary-300"
                            style={{ opacity: 0.8, paddingTop: 5 }}
                          >
                            {data?.beneficiaryAccountStatement}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="view-project-card"
                  style={{ marginTop: "1rem" }}
                >
                  <div className="view-project-card__pad">
                    {/* <div className="view-project-card-picture"> */}
                    <div className="view-project-card-avatar">
                      <img
                        src={data?.img}
                        alt="avatar"
                        className="view-project-card-img"
                      />
                    </div>
                    <div className="view-project-card-subHead">
                      <h2 className="heading-4-semibold">
                        {data?.beneficiary}
                      </h2>
                    </div>
                    <div
                      className="view-project-card-body body-text-4-semibold text-grey-600"
                      style={{ opacity: 0.8 }}
                    >
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give
                    </div>
                    <div className="view-project-card-link text-csprimary body-text-4-semibold">
                      View more info
                    </div>
                  </div>
                  {/* </div> */}
                </div>

                <div
                  className="view-project-card"
                  style={{ marginTop: "1rem" }}
                >
                  <div className="view-project-card__pad">
                    <div className="view-project-card-subHead1">
                      <h2 className="heading-4-bold">Approval stage</h2>
                    </div>

                    <div className="view-project-card-link1 text-csprimary body-text-4-semibold">
                      View approval chain
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewProject;
