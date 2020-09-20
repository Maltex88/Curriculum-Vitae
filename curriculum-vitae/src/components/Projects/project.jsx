import React from 'react';
import styled from 'styled-components';

const ProjectMain = styled.div` 
    display: flex;
    background-color: white;
    border-radius: 15px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #1d3557;
    @media (max-width: 900px) {
        flex-direction: column;
    }
    @media (max-width: 425px) {
        margin-bottom: 15px;
    }
`; 
const InnerChildAbout = styled.div`
    padding: 15px;
    margin-right: 5px;
    @media (max-width: 900px) {
        width: auto;
        margin-bottom: 9px;
      };
    @media (max-width: 425px) {

    }

`;
const InnerChildInfo = styled.div`
    padding: 15px;
    margin-left: 5px;
    white-space: pre-wrap;

    @media (max-width: 900px) {
        width: auto;
      };
      @media (max-width: 425px) {
        margin-bottom: 5%;
      }
`;
const ChildTitle = styled.h3`
    
`;
const ButtonBox = styled.div`
    display: flex;
    margin-top: 5%;
    justify-content: space-around;

    @media (max-width: 425px) {
        margin-top: 15%;
      }
`;

//Button Styles
const GithubButton = styled.button`
    background-color: black;
    text-align: center;
    color: white;
    height: 30px;
    width: 150px;
    border: none;
    border-radius: 5px;
`;
const PreviewButton = styled.button`
    background-color: black;
    color: white;
    height: 30px;
    width: 150px;
    border: none;
    border-radius: 5px;
`;

//List Styles
const SkillsUsedList = styled.ul`
    list-style-type: none;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
`;
const FeatureList = styled.ul`
    list-style-type: none;
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
`;




/*
Title: 'Project BoostApp - Internship',
About: 'The goal of the project was to develop an iOS and Andorid app to let Sigma employees compete in physical activities. The team followed a textbook example of scrum with dailys, retro, sprintplanning and weekly demos of the app to show our PO.',
SkillsUsed: ['JavaScript', 'Expo', 'React Native', 'ApolloClient', 'Google dev Api'],
MoreSkillsUsed: ['graphQL', 'Scrum', 'Adobe XD' ],
Id:
*/


const Project = (props) => (
    <ProjectMain>
        <InnerChildAbout>
            <ChildTitle>{props.projectInfo.Title}</ChildTitle>       
                <h5>About</h5>
                    <p>{props.projectInfo.About}</p>  
                <h5>Skills Used</h5>
                <SkillsUsedList>
                        {props.projectInfo.SkillsUsed.map(x => <li key={x}>{x}</li>)}
                </SkillsUsedList>
                <ButtonBox>
                    <GithubButton>
                        Github
                    </GithubButton>
                    <PreviewButton>
                        Preview    
                    </PreviewButton>
                </ButtonBox>    
        </InnerChildAbout>
        <InnerChildInfo>
            <h4>My Role</h4>
                <p>{props.projectInfo.Role}</p>
            <h4>Challenges</h4>
                <p>{props.projectInfo.Challenges}</p>    
            <h4>Solutions</h4>    
                <p>{props.projectInfo.Solutions}</p>
            <h4>Notable Features</h4> 
                <FeatureList>
                  {props.projectInfo.Features.map(x => <li key={x}>{x}</li>)}            
                </FeatureList>
        </InnerChildInfo>
    </ProjectMain>
);

export default Project;


