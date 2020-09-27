import React from 'react';
import styled from 'styled-components';

import Burger from './Burger';
const Nav = styled.nav`
  width: 100%;
  height: 7.5vh;
  background-color: #181818;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 2;

  .logo {
    color: white;
    align-self: center;
    padding: 15px 0;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">@ Henrik Nilsson</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
