import React, {useState} from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar';

import Home from './components/home/home.jsx'
import Projects from './components/Projects/projects.jsx'
import Resumé from './components/resumé.js'
import Error from './components/error'

import styled from 'styled-components'

import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

import { IconContext } from "react-icons";
import { BiMenu} from "react-icons/bi";



let array = [FaReact, FaCss3Alt, FaHtml5, FaJs]

const Icon = (props) => (
  <IconContext.Provider value={{ color: "white", size: `${props.iconSize}` }}>
    <props.iconName/>
  </IconContext.Provider>
)







//Loop out my routes..



// function Navbar() {
//   const [state, toggleMenu] = useState(false);
 
//   return (
//     <NavbarMain> 
//       <Title>@ Henrik Nilsson</Title>
//       <NavbarList showHide={state}>
//         <NavLink exact to="/"
//           style={{ textDecoration: 'none', color: '#f1faee'}}
//           activeStyle={{ color: "lightBlue" }}>
//           <NavBarChild>Home</NavBarChild>     
//         </NavLink>
//         <NavLink exact to="/projects"
//           style={{ textDecoration: 'none', color: '#f1faee'}}
//           activeStyle={{ color: "lightBlue" }}>
//           <NavBarChild>Projects</NavBarChild>
//         </NavLink>
//         <NavLink exact to="/resumé"
//           style={{ textDecoration: 'none', color: '#f1faee'}}
//           activeStyle={{ color: "lightBlue" }}>
//           <NavBarChild>About me</NavBarChild>
//         </NavLink>
//       </NavbarList>
//       <HamburgerIcon showHide={state} onClick={() => toggleMenu(!state)}>
//         <Icon iconName={BiMenu} iconSize={35} />
//       </HamburgerIcon>
//     </NavbarMain>
//   );
// };

function App() {
  return (
    <MainComponent>
      <Navbar />
      <main>
          <Route path='/' component={Home} exact />
          <Route path="/projects" component={Projects} />
          <Route path="/resumé" component={Resumé} /> 
      </main>
      <MainFoot>
        {array.map(x => <Icon iconName={x} iconSize={35} key={x}/>)}
      </MainFoot>  
    </MainComponent>
  );
}

export default App;


const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainFoot = styled.div`
background-color: #1d3557;
display: flex;
width: 100%;
align-items: center;
justify-content: space-around;
height: 80px;
`;
const NavbarMain = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  background-color: #1d3557;
`;
const NavbarList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  align-self: center;

  position: absolut;
  @media (max-width: 750px) {
    display: ${props => props.showHide ? "block" : "none"};
    float: right;
    position: absolute;
    background: black;
    top: 0px;
  };
  @media (max-width: 425px) {
  
  }
`;


const HamburgerIcon = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  
  @media (max-width: 750px) {
    display: block;
    
  };
`; 
const NavBarChild = styled.h3`
  text-decoration: 'none';
  padding: 15px;
  margin: 0px;
  @media (max-width: 425px) {
   
  }
`;
const Title = styled.h2`
  color: #f1faee;
  padding: 15px;
  margin: 0px;
  
  text-align: center;
  @media (max-width: 425px) {
    
  }
`;