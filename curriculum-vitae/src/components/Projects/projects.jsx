import React from 'react';
import styled from 'styled-components';
import boostApp from '../assets/boost.png';
import { ProjectsArray } from './projectArray.jsx';
import Project from './project.jsx';

const ProjectsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => (
  <ProjectsMainContainer>
    {ProjectsArray.map(x => (
      <Project key={x.Id} projectInfo={x} />
    ))}
  </ProjectsMainContainer>
);

export default Projects;

/*
const Projects = () => (
    <MainContainer>
        
        <Child>
            <InnerChildAbout>
                <ChildTitle>WhatsCooking</ChildTitle>          
                <h5>About</h5>
                <p>Goal of the project was to develop an iOS and Andorid app as part of my master thesis. It lets the user create an profile and search for their favorite recepies and save them in their virtuel cookbook.
                The user can also store what spices and products they have in their real world pantry and store the products in the database</p>
                <h5>Technologies Used</h5>
                <div style={{display: 'flex'}}>
                <ul>  
                   <li>JavaScript</li>
                   <li>Expo</li>
                   <li>React Native</li>
                   <li>Firebase Authentication</li>
                </ul>
                <ul>  
                   <li>Redux</li>
                   <li>RESTapi</li>
                   <li>Firebase</li>
                </ul>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', margin: 10}}>
                  <button style={{padding: 8,  backgroundColor: 'black', border: 'none'}}><a style={{textDecoration: 'none', color: 'white', padding: 10}}href="https://github.com/Maltex88/WhatsCooking">View code on Github</a></button>
                </div>    
            </InnerChildAbout>
            <InnerChildInfo>
                <h4>My Role</h4>
                  <p>I was alone in this project so i was the designer, project owner, scrum-master and developer so the project had alot of focus on time managment and delivery on deadlines</p>
                  <p>The project had a pretty heavy focus on the master thesis paper and the technologies. </p>
                <h4>Challenges</h4>
                    <p>As a developer my vision is always greater then what the projects time limit allows</p>    
                <h4>solutions</h4>    
                    <p>I made the project deadlines by focusing alot on working in an agile way and following my sprintplan</p>
                <h4>Notable Features</h4>
                <div style={{display: 'flex'}}>
                 <ul>  
                     <li>JavaScript</li>
                     <li>React Native</li>
                     <li>Expo</li>
                 </ul>
                 <ul> 
                    <li>Login</li>
                   <li>Filtering, adding, editing and deleting obj/spices</li>
                   <li>Searching for recepies</li>
                  </ul>
                </div>
            </InnerChildInfo>
        </Child>
        <Child>
            <InnerChildAbout>
                <ChildTitle>Shadow Ninja - MERN-stack project</ChildTitle>          
                <h5>About</h5>
                <p>School Project with a team of 5 with the focus on learning the MERN-stack. The project works like steam but for developers where you can create an accout, signIn and use the pages shoppingcart to add products to your in game library.</p>
                <h5>Technologies Used</h5>
                <div style={{display: 'flex'}}>
                <ul>  
                   <li>JavaScript</li>
                   <li>Html/CSS</li>
                   <li>React</li>
                   <li>Redux</li>
                   <li>Passport.js</li>
                </ul>
                <ul>  
                   <li>Mongo DB</li>
                   <li>Express</li>
                   <li>Node.js</li>
                   <li>Validator</li>
                   <li>Socket.io</li>
                </ul>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', margin: 10}}>
                  <button style={{padding: 8,  backgroundColor: 'black', border: 'none'}}><a style={{textDecoration: 'none', color: 'white', padding: 10}}href="https://github.com/Maltex88/shadow-ninja">View code on Github</a></button>
                </div>    
            </InnerChildAbout>
            <InnerChildInfo>
                <h4>My Role</h4>
                  <p>Since i wanted to learn how to create accounts and exploring the backend part of development i was focusing alot of the backend work in this project, mainly setting up a create account form, the logic behind logging in with form validation and hashing of passwords and saving the created account to mongoDB.</p>
                <h4>Challenges</h4>
                    <p>Handling passwords where a challenge, finding the safest way to store sensetive information is always crucial.</p>    
                <h4>solutions</h4>    
                    <p>I decided to make as little of the logic behind storing and hashing the password as i could and used meny small and populare librarys to accomplish the task so i could be sure that the stored data was safe.</p>
                <h4>Notable Features</h4>
                <div style={{display: 'flex', width: '100%'}}>
                 <ul>  
                   <li>Login</li>
                   <li>Shoppingcart: Add, Delete</li>
                   <li>Form validating: SignUp / SignIn</li>
                 </ul>
                 <ul>  
                   <li>Responsive design</li>
                   <li>Scrum</li>
                   <li>Trello</li>
                  </ul>
                </div>
            </InnerChildInfo>
        </Child>
        <Child>
            <InnerChildAbout>
                <ChildTitle>Grand Hotel - Web project</ChildTitle>          
                <h5>About</h5>
                <p>School Project with a team of 3 with the focus on responsive design with Sass where we created an webpage for a hotel with the ability to book rooms</p>
                <h5>Technologies Used</h5>
                <div style={{display: 'flex'}}>
                <ul>  
                   <li>JavaScript</li>
                   <li>React</li>
                   <li>Html/SASS</li>
                   <li>Firebase</li>
                </ul>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', margin: 10}}>
                  <button style={{padding: 8,  backgroundColor: 'black', border: 'none'}}><a style={{textDecoration: 'none', color: 'white', padding: 10}}href="https://github.com/Maltex88/grand-supreme-hotel">View code on Github</a></button>
                </div>    
            </InnerChildAbout>
            <InnerChildInfo>
                <h4>My Role</h4>
                  <p>Since i wanted to learn how to create accounts and exploring the backend part of development i was focusing alot of the backend work in this project, mainly setting up a create account form, the logic behind logging in with form validation and hashing of passwords and saving the created account to mongoDB.</p>
                <h4>Challenges</h4>
                    <p>Handling passwords where a challenge, finding the safest way to store sensetive information is always crucial.</p>    
                <h4>solutions</h4>    
                    <p>I decided to make as little of the logic behind storing and hashing the password as i could and used meny small and populare librarys to accomplish the task so i could be sure that the stored data was safe.</p>
                <h4>Notable Features</h4>
                <div style={{display: 'flex', width: '100%'}}>
                 <ul>  
                   <li>Login</li>
                   <li>Shoppingcart: Add, Delete</li>
                   <li>Form validating: SignUp / SignIn</li>
                 </ul>
                 <ul>  
                   <li>Responsive design</li>
                   <li>Scrum</li>
                   <li>Trello</li>
                  </ul>
                </div>
            </InnerChildInfo>
        </Child>
    </MainContainer>
)
*/
