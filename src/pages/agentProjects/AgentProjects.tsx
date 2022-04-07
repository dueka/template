import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useHistory, useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../assets/vectors/plus.svg";
import AgentProjectApproval from "./AgentProjectApproval";
import AgentProjectsColumn from "./AgentProjectsColumn";

const AgentProjects = () => {
  const location = useLocation();
  const history = useHistory();
  const [step, setStep] = useState(1);

  return (
    <>
      <Helmet>
        <title>Project list - Noor Coop</title>
      </Helmet>
      <div className="user-dashboard">
        <AgentProjectsColumn />
        <div className="project">
          <div className="project-tags">
            <div
              className={
                location.pathname !== "/agent/project"
                  ? "project-tags_item"
                  : "project-tags_item dim"
              }
              onClick={() => history.push("/agent/project")}
            >
              <p
                className="project-text body-text-3-semibold"
                style={{ opacity: 0.8 }}
              >
                Approved
              </p>
            </div>
            <div
              className={
                location.pathname === "/agent/project/awaiting" && step === 1
                  ? "project-tags_item dim"
                  : "project-tags_item"
              }
              onClick={() => {
                history.push("/agent/project/awaiting");
                setStep(1);
              }}
            >
              <p
                className="project-text body-text-3-semibold"
                style={{ opacity: 0.8 }}
              >
                Awaiting approval
              </p>
            </div>
            <div
              className="project-button"
              style={{ marginLeft: "36.3rem", marginTop: "-0.5rem" }}
            >
              <div className="project-card-plus">
                <button
                  className="project-card-btn1"
                  onClick={() => history.push("/app/agent/create")}
                >
                  <PlusIcon style={{ marginLeft: "-25px" }} height={100} />
                  Add a project
                </button>
              </div>
            </div>
          </div>

          <Switch>
            <Route
              exact
              path="/app/agent/project"
              render={() => <AgentProjectApproval />}
            />
            <Route exact path="/app/agent/project/awaiting" />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default AgentProjects;
