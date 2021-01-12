import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  background-color: #252628;
  height: 85vh;

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

const Container = styled.div`
  padding: 15px;
  color: white;

  h3 {
    color: grey;
    padding: 0 0 15px 0;

    &:nth-child(2) {
      margin-left: 15px;
    }
    &:nth-child(5) {
      margin-left: 15px;
    }
    &:nth-child(4) {
      margin-left: 30px;
    }
  }
  h1 {
    &:nth-child(3) {
      margin-left: 30px;
    }
  }
`;

function Home() {
  return (
    <Main>
      <Content>
        <Container>
          <h3>&lt;html&gt;</h3>
          <h3>&lt;body&gt;</h3>
          <h1>
            <p>Hello,</p>
            <p>I´m Henrik,</p>
            <p>Front End Developer.</p>
          </h1>
          <h3>Web / App Developer</h3>
          <h3>&lt;body /&gt;</h3>
          <h3>&lt;html /&gt;</h3>
        </Container>
      </Content>
    </Main>
  );
}

export default Home;
