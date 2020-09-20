import React, { Component } from 'react';
import styled from 'styled-components';
import { FaReact } from "react-icons/fa";

const Main = styled.div`
  
`;

const ReactIcon = () => (<h3><FaReact /></h3>)

  


function Home() {
    return (
        <Main>Hooome
          <ReactIcon />
          <div>Hooome</div> 
        </Main> 
               
    )
}

export default Home