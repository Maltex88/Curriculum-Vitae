import React from 'react';
import styled from 'styled-components';
import { Icon } from '../assets/Icon';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const ButtonStyleOne = styled.button`
  background-color: black;
  color: white;
  border: 4px solid black;
  margin-right: 10px;
  :hover {
    border: 4px solid white;
    background-color: rgba(0, 0, 0, 0);
  }
`;
const ButtonStyleTwo = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: #0df8de;
  border: 3px solid #0df8de;
  margin-left: 10px;

  :hover {
    color: #252628;
    background-color: #0df8de;
  }
`;
const ButtonStyleThree = styled.button`
  background-color: #0072b1;
  color: white;
  border: none;
  margin-left: 10px;

  :hover {
    color: #252628;
    background-color: #0df8de;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    width: 10rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 4px;
    span {
      margin-left: 5px;
      align-self: center;
    }
  }
  @media (max-width: 768px) {
    padding: 0 0 15px 0;
    margin: 0 0 15px 0;
    border-radius: 1px;
  }
`;

export const ButtonDisplay = props => (
  <ButtonContainer>
    {props.Git ? (
      <ButtonStyleOne onClick={() => window.open(`${props.Git}`)}>
        <Icon iconName={AiOutlineGithub} iconSize={28} />
        <span>Github</span>
      </ButtonStyleOne>
    ) : (
      ''
    )}
    {props.LinkedIn ? (
      <ButtonStyleThree onClick={() => window.open(`${props.LinkedIn}`)}>
        <Icon iconName={AiFillLinkedin} iconSize={28} />
        <span>LinkedIn</span>
      </ButtonStyleThree>
    ) : (
      ''
    )}
    {props.CheckOut ? (
      <ButtonStyleTwo onClick={() => window.open(`${props.CheckOut}`)}>
        <span>Check it out</span>
      </ButtonStyleTwo>
    ) : (
      ''
    )}
  </ButtonContainer>
);
