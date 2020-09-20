import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translate(100%)')};
    transition: 0.3s ease-in-out;
    flex-flow: column nowrap;
    background-color: green;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink
          to="/"
          exact
          style={{ textDecoration: 'none', color: 'white' }}
          activeStyle={{
            color: 'blue'
          }}
          onClick={() => setOpen(!open)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          style={{ textDecoration: 'none', color: 'white' }}
          activeStyle={{
            color: 'blue'
          }}
          onClick={() => setOpen(!open)}
        >
          Projects
        </NavLink>
      </li>
    </Ul>
  );
};

export default RightNav;
