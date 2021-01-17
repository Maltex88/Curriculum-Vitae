import React from 'react';
import styled from 'styled-components';
import myProfile from '../assets/profil.png';
import { AboutInfo } from './aboutInfo.js';
import { ButtonDisplay } from '../Projects/buttonDisplay';

const Main = styled.div`
  background-color: #252628;
  height: 85vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
  "about skills skills"
  "about skills skills"
  "about education education";

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
  @media (height: 1024px) and (max-width: 768px) {
    height: 85vh;
  }
`;
const AboutContainer = styled.div`
  color: white;
  padding: 1rem;
  
  h3,
  p {
    padding-bottom: 2rem;
  }

  &:nth-child(1) {
    grid-area: about;
    
    background-color: #0A0A0A;
  }
  &:nth-child(2) {
    grid-area: skills;
    background-color: #141414;
   
  }
  &:nth-child(3) {
    grid-area: education;
    background-color: #1F1F1F;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  
  }
`;
const InnerContainer = styled.div`

  h4,
  p,
  li {
    margin: 10px 0 10px 0;
  }
  ul {
    list-style: none;
  }
`;


function About() {
  return (
    <Main>
      {AboutInfo.map(x => {
          return (
            <AboutContainer>
              <h3>{x.Title}</h3>
              {x.InfoString ? <p>{x.InfoString}</p> : ''}
              {x.InfoString2 ? <p>{x.InfoString2}</p> : ''}
              <ButtonDisplay Git={x.Github} LinkedIn={x.LinkedIn} />
              {x.Info.map(y => (
                <InnerContainer>
                  <h4>{y.title}</h4>
                  {y.info ? <p>{y.info}</p> : ''}
                  <ul>
                    {y.stackArray.map(z => (
                      <li>{z}</li>
                    ))}
                  </ul>
                </InnerContainer>
              ))}
            </AboutContainer>
          )
        

      })}
    </Main>
  );
}

export default About;
