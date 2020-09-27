import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { AiOutlineHome, AiOutlineUser, AiOutlineEye } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Icon = props => (
  <IconContext.Provider
    value={{
      style: { verticalAlign: 'middle' },
      color: `${props.color}`,
      size: `${props.iconSize}`
    }}
  >
    <props.iconName />
  </IconContext.Provider>
);

const Link = styled(NavLink)`
  text-decoration: none;
  color: #a5a5a5;
  text-transform: uppercase;
  font-family: 'Roboto Slab',serif;
  
  span {
    visibility: hidden;
  }

  &.active {
    color: #0DF8DE;
    span {
        visibility: hidden;
    }
    p {
        display: block;
    }
    @media (max-width: 768px) {
        p {
            display: none;
        } 
        span {
            visibility: visible;
        }  
    }
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

  li:hover:nth-child(1) {
    span {
      visibility: visible;
      color: #0df8de;
    }
    p {
      display: none;
    }
    span::after {
      content: 'Home';
    }
  }
  li:hover:nth-child(2) {
    span {
      visibility: visible;
      color: #0df8de;
    }
    p {
      display: none;
    }
    span::after {
      content: 'Projects';
    }
  }
  li:hover:nth-child(3) {
    span {
      visibility: visible;
      color: #0df8de;
    }
    p {
      display: none;
    }

    span::after {
      content: 'About Me';
    }
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

    p {
      display: none;
    }
    span {
      visibility: visible;
    }
    li {
      margin: 15px;
    }
    li:nth-child(1) {
      span::after {
        content: 'Home';
      }
    }
    li:nth-child(2) {
      span::after {
        content: 'Projects';
      }
    }
    li:nth-child(3) {
      span::after {
        content: 'About me';
      }
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <Ul open={open}>
      <li>
        <Link to="/" exact onClick={() => setOpen(!open)}>
          <p>
            <Icon iconName={AiOutlineHome} iconSize={40} />
          </p>
          <span></span>
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={() => setOpen(!open)}>
          <p>
            <Icon iconName={AiOutlineEye} iconSize={40} />
          </p>
          <span></span>
        </Link>
      </li>
      <li>
        <Link to="/test" exact onClick={() => setOpen(!open)}>
          <p>
            <Icon iconName={AiOutlineUser} iconSize={40} />
          </p>
          <span></span>
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
