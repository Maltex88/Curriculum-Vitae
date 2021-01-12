import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar';
import { Icon } from './components/assets/Icon';
import Home from './components/home/home.jsx';
import Projects from './components/Projects/projects.jsx';
import About from './components/About/about.jsx';
//import Error from './components/error';
//fix error page
import styled from 'styled-components';

//Move icon to seperate file and export / import it.
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
let array = [FaReact, FaCss3Alt, FaHtml5, FaJs];

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Route path="/" component={Home} exact />
        <Route path="/Projects" component={Projects} />
        <Route path="/About" component={About} />
      </Main>

      <MainFoot>
        {array.map(x => (
          <Icon iconName={x} iconSize={35} key={x} color={'#0DF8DE'} />
        ))}
      </MainFoot>
    </div>
  );
}

export default App;

const MainFoot = styled.div`
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 7.5vh;
`;

const Main = styled.main`
  position: relative;
  background-color: #252628;
`;
