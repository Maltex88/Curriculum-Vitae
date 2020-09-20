import React from 'react';
import { NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
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



const RightNav = () => {
    return (
        <Ul>
            <li>
                <NavLink to="/" exact
                style={{ textDecoration: 'none', color: 'white' }}
                activeStyle={{
                    color:'blue'
                }}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/projects"
                style={{ textDecoration: 'none', color: 'white' }}
                activeStyle={{
                    
                    color:'blue'
                }}>Projects</NavLink>
            </li>
            <li>bajs</li>
            <li>bajs</li>
            <li>bajs</li>
            <li>bajs</li>
            <li>bajs</li>
            <li>bajs</li>
            <li>bajs</li>
        </Ul>
    )
}

export default RightNav;