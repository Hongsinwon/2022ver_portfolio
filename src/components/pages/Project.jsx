import React from "react";
import { NavTop, TopScrollBtn } from "../organisms";
import { mainProject, subProject } from "../datas/projext";

import {
  ProjectWrap,
  ProjectMain,
  ProjectList,
  ProjectContent,
  ProjectSub,
} from "../styled-components/project";

const Project = () => {
  return (
    <>
      <NavTop />
      <ProjectWrap>
        <ProjectMain>
          <h2>🏆 MAIN PROJECT</h2>
          <ProjectList>
            {mainProject.map(
              ({ id, url, img, title, content, Frontend, Backend }) => (
                <a key={id} href={url} target="_blank">
                  <img src={img} alt={title} />
                  <ProjectContent>
                    <h3>{title}</h3>
                    <p className="content">{content}</p>
                    <p className="frontend">
                      <span>Frontend</span>
                      {Frontend}
                    </p>
                    <p className="backend">
                      <span>Backend</span>
                      {Backend}
                    </p>
                  </ProjectContent>
                </a>
              )
            )}
          </ProjectList>
        </ProjectMain>
        <ProjectSub>
          <h2>🏆 SUB PROJECT</h2>
          <ProjectList>
            {subProject.map(
              ({ id, url, img, title, content, Frontend, Backend }) => (
                <a key={id} href={url} target="_blank">
                  <img src={img} alt={title} />
                  <ProjectContent>
                    <h3>{title}</h3>
                    <p className="content">{content}</p>
                    <p className="frontend">
                      <span>Frontend</span>
                      {Frontend}
                    </p>
                    <p className="backend">
                      <span>Backend</span>
                      {Backend}
                    </p>
                  </ProjectContent>
                </a>
              )
            )}
          </ProjectList>
        </ProjectSub>
      </ProjectWrap>
      <TopScrollBtn />
    </>
  );
};
export default Project;
