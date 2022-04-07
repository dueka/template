import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { ProjectApproval } from ".";
import ProjectMatured from "./ProjectMatured";
import ProjectPartiallyFunded from "./ProjectPartiallyFunded";
import ProjectsColumn from "./ProjectsColumn";
import ProjectsFullyFunded from "./ProjectsFullyFunded";

const Projects = () => {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>Project list - Noor Coop</title>
      </Helmet>
      <div className="user-dashboard">
        <ProjectsColumn />
        <div className="project">
          <div className="project-tags">
            <div
              className={
                location.pathname !== "/projects"
                  ? "project-tags_item"
                  : "project-tags_item dim"
              }
              onClick={() => history.push("/app/projects")}
            >
              <p
                className="project-text body-text-3-semibold"
                style={{ opacity: 0.8 }}
              >
                Awaiting Approval
              </p>
            </div>
            <div
              className={
                location.pathname === "/app/projects/partially" && step === 1
                  ? "project-tags_item dim"
                  : "project-tags_item"
              }
              onClick={() => {
                history.push("/app/projects/partially");
                setStep(1);
              }}
            >
              <p
                className="project-text body-text-3-semibold"
                style={{ opacity: 0.8 }}
              >
                Partially Funded
              </p>
            </div>
            <div
              className={
                location.pathname === "/app/projects/fully" && step === 2
                  ? "project-tags_item dim"
                  : "project-tags_item "
              }
              onClick={() => {
                history.push("/app/projects/fully");
                setStep(2);
              }}
            >
              <p
                className="project-text body-text-3-semibold"
                style={{ opacity: 0.8 }}
              >
                Fully Funded
              </p>
            </div>
            <div
              className={
                location.pathname === "/app/projects/matured" && step === 3
                  ? "project-tags_item dim"
                  : "project-tags_item "
              }
              onClick={() => {
                history.push("/app/projects/matured");
                setStep(3);
              }}
            >
              <p
                className="project-text body-text-3-semibold"
                style={{ opacity: 0.8 }}
              >
                Matured
              </p>
            </div>
          </div>
          <Switch>
            <Route
              exact
              path="/app/projects"
              render={(props) => <ProjectApproval {...props} />}
            />
            <Route
              exact
              path="/app/projects/partially"
              render={(props) => <ProjectPartiallyFunded {...props} />}
            />
            <Route
              exact
              path="/app/projects/fully"
              render={(props) => <ProjectsFullyFunded {...props} />}
            />

            <Route
              exact
              path="/app/projects/matured"
              render={(props) => <ProjectMatured {...props} />}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Projects;
