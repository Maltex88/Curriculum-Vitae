import React from 'react';
import styled from 'styled-components'
import RightNav from './RightNav.jsx';

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid black;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0;
    }
`;
const Navbar = () => {
    return (
        <Nav>
            <div className="logo">@ Henrik Nilsson</div>
            <RightNav />
        </Nav>
    )
}


export default Navbar