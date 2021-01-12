import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../assets/Icon';
import { AiOutlineHome, AiOutlineUser, AiOutlineEye } from 'react-icons/ai';

//TODO prio zero, reformat css

const Link = styled(NavLink)`
  text-decoration: none;
  color: #a5a5a5;
  text-transform: uppercase;
  
  &.active {
    color: #0DF8DE;
  {
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;

  flex-flow: row nowrap;
  width: 30%;

  li {
    margin: auto;
  }

  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translate(100%)')};
    transition: 0.3s ease-in-out;
    flex-flow: column nowrap;
    background-color: #181818;
    position: fixed;
    opacity: 1;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;

    li {
      margin: 15px;
    }
  }
`;
//make it a loop for better readability.
const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" exact onClick={() => setOpen(!open)}>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={() => setOpen(!open)}>
          <span>Projects</span>
        </Link>
      </li>
      <li>
        <Link to="/About" exact onClick={() => setOpen(!open)}>
          <span>About Me</span>
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
