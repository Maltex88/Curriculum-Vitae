import React from 'react';
import styled from 'styled-components';
import { ButtonDisplay } from './buttonDisplay';
import { StackData } from './stackData';

const Main = styled.div`
  display: flex;
  padding: 25px;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const AboutContent = styled.div`
  margin: 0 5% 0 0;
  width: 50vh;
  h2,
  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: auto;
    margin: 0;
  }
`;

const InfoContent = styled.div`
margin: 0 15% 25px 0;
width: 100vh;

  div {
    display: flex;
    flex-direction: row;
    
    ul {
      margin: 0 7% 0 0;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    width: auto;
    border-bottom: 4px solid #0df8de;
    p {
        margin: 0 0 15px 0;
    }
    div {
      flex-direction: column;
      ul {
        margin: 0 0 15px 0;
      }
    }
  }
`;

const Project = props => (
  <Main>
    <AboutContent>
      <h2>{props.projectInfo.Title}</h2>
      <p>{props.projectInfo.About}</p>
      <ButtonDisplay
        Git={props.projectInfo.Github}
        CheckOut={props.projectInfo.CheckItOut}
      />
    </AboutContent>
    <InfoContent>
      <h2>Role & Experience</h2>
      <p>{props.projectInfo.Role}</p>
      <h2>Features & Stack</h2>
      <StackData
        Features={props.projectInfo.Features}
        Frameworks={props.projectInfo.Frameworks}
        Others={props.projectInfo.Others}
      />
    </InfoContent>
  </Main>
);

export default Project;
