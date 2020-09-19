import React from 'react';
import { Route, Switch, NavLink} from 'react-router-dom';
import Home from './components/home'
import Projects from './components/Projects/projects'
import Resumé from './components/resumé'
import Error from './components/error'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarMain> 
      <Title>@ Henrik Nilsson</Title>
      <NavbarList>
        <NavLink exact to="/"
          style={{ marginRight: 15, textDecoration: 'none', color: '#f1faee'}}
          activeStyle={{ color: "lightBlue" }}>
          <NavBarChild>Projects</NavBarChild>
        </NavLink>

      </NavbarList> 
      
    </NavbarMain>
  );
};

function App() {
  return (
    <MainComponent>
      <header>
        <Navbar />
      </header>
      <main>
        <Projects />
      </main>
      <footer>
        <NavbarMain></NavbarMain>  
      </footer>
    </MainComponent>
  );
}

export default App;




/* <Route path='/' component={Home} exact />
          <Route path="/projects" component={Projects} />
          <Route path="/resumé" component={Resumé} /> 
                 <NavLink exact to="/projects"
          style={{ margin: 15, textDecoration: 'none', color: '#f1faee'}}
          activeStyle={{ color: "#e63946" }}>
          <NavBarChild>Projects</NavBarChild>
        </NavLink>
        <NavLink exact to="/resumé"
          style={{ margin: 15, textDecoration: 'none', color: '#f1faee'}}
          activeStyle={{ color: "#e63946" }}>
          <NavBarChild>Resumé</NavBarChild>
        </NavLink>
                  <NavLink exact to="/resumé"
          style={{ margin: 15, textDecoration: 'none', color: '#f1faee'}}
          activeStyle={{ color: "#e63946" }}>
          <NavBarChild>Resumé</NavBarChild>
        </NavLink>*/

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const NavbarMain = styled.div`
  background-color: #1d3557;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;
const NavbarList = styled.div`
  display: flex;
  
`;
const NavBarChild = styled.h2`
  text-decoration: 'none';
  @media (max-width: 425px) {
   
  }
`;
const Title = styled.h1`
  color: #f1faee;
  @media (max-width: 425px) {
    
  }
`;