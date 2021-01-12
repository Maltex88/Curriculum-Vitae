import React from 'react';
import styled from 'styled-components';
import myProfile from '../assets/profil.png';
import { AboutInfo } from './aboutInfo.js';
import { ButtonDisplay } from '../Projects/buttonDisplay';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #252628;
  height: 85vh;
  background-position: center;
  backaground-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
  @media (height: 1024px) and (max-width: 768px) {
    height: 85vh;
  }
`;
const AboutContainer = styled.div`
  color: white;
  flex: 1 0 50%;
  padding: 15px;

  h3 {
    padding-bottom: 15px;
  }

  &:nth-child(1) {
    border-bottom: 1px solid #0df8de;
    border-right: 1px solid #0df8de;
    p {
      padding-bottom: 40px;
    }
  }
  &:nth-child(2) {
    border-bottom: 1px solid #0df8de;
    border-left: 1px solid #0df8de;
  }
  &:nth-child(3) {
    border-top: 1px solid #0df8de;
    border-right: 1px solid #0df8de;
  }
  &:nth-child(4) {
    border-top: 1px solid #0df8de;
    border-left: 1px solid #0df8de;
  }
  p:nth-child(1) {
    color: blue;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex: 1 0 0;
  }
`;
const MyPicture = styled.img`
  width: 15rem;
  height: 15rem;
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
      {AboutInfo.map(x => (
        <AboutContainer>
          <h3>{x.Title}</h3>
          <p>{x.InfoString}</p>
          <ButtonDisplay Git={x.Github} LinkedIn={x.LinkedIn} />

          {x.Info.map(y => (
            <InnerContainer>
              <h4>{y.title}</h4>
              <p>{y.info}</p>
              <ul>
                {y.stackArray.map(z => (
                  <li>{z}</li>
                ))}
              </ul>
            </InnerContainer>
          ))}
        </AboutContainer>
      ))}
    </Main>
  );
}

export default About;
