import React from "react";
import { ReactComponent as CaretDown } from "../../assets/vectors/caret-down.svg";

const ProjectsColumn = () => {
  return (
    <div style={{ paddingBottom: "6rem" }}>
      {/* <ProjectsNav /> */}
      <div className="project-column" style={{ paddingBottom: "1rem" }}>
        <h3 className="user-nav__header">
          Project list <span className="user-nav__subtext">8 projects</span>
        </h3>
        <div className="project-column__filter">
          <div className="project-column__filter-body">
            <div className="project-column__filter-body-text">
              <p className="body-text-5-semibold">Filter by category</p>
            </div>
            <div className="project-column__filter-icon">
              <CaretDown />
            </div>
          </div>
        </div>
        <div className="project-column__left">
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

export default ProjectsColumn;
