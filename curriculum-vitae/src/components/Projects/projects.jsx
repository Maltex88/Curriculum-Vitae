import React from 'react';
import styled from 'styled-components';
import { ProjectsArray } from './projectArray.jsx';
import Project from './project.jsx';

const ProjectsMainContainer = styled.div`
  color: white;

  h2,
  h3 {
    margin: 0 0 15px 0;
  }

  p {
    margin: 0 0 25px 0;
  }
  li {
    list-style: none;
  }
`;

const Projects = () => (
  <ProjectsMainContainer>
    {ProjectsArray.map(x => (
      <Project key={x.Id} projectInfo={x} />
    ))}
  </ProjectsMainContainer>
);

export default Projects;
