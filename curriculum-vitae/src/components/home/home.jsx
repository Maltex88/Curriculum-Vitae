import React, { Component } from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import logo from '../assets/no.png';

import profile from '../assets/profil.png';
/*background-image: url(${logo}); */
/*#0DF8DE turkås */
/*
AiFillHome
AiOutlineHome

*/
const Main = styled.div`
  background-color: #252628;
  height: 100vh;

  background-position: center;
  backaground-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 70px;
  padding: 10px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: black;
`;

const GrafitiContainer = styled.div`
  padding: 15px;
  color: white;
  font-family: 'Roboto Slab', serif;
  h3 {
    color: grey;
  }
`;
const ProfileContainer = styled.div`
  background-image: url(${profile});
  background-position: center;
  backaground-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 270px;
  width: 270px;
  border-radius: 50%;

  filter: grayscale(100%);
`;

function Home() {
  return (
    <Main>
      <Content>
        <GrafitiContainer>
          <h1>
            <p>Hello,</p>
            <p>I´m Henrik,</p>
            <p>Front End Developer.</p>
          </h1>
          <h3>Web / App Developer ReactIcon</h3>
        </GrafitiContainer>
      </Content>
    </Main>
  );
}
/**        <ProfileContainer>
          <p>Profile her</p>
        </ProfileContainer>*/
export default Home;
