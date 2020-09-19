import React from 'react';
import styled from 'styled-components';

const ProjectMain = styled.div` 
    display: flex;
    border-radius: 15px;
    margin: 10px;
    color: #1d3557;
    
    @media (max-width: 900px) {
        flex-direction: column;
    }
    @media (max-width: 425px) {
        margin-bottom: 15px;
    }
`; 
const InnerChildAbout = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 15px;
    margin-right: 5px;

    width: 40%;
    height: auto;
    @media (max-width: 900px) {
        width: auto;
        margin-bottom: 9px;
      };
    @media (max-width: 425px) {
        width: 100%;
    }

`;
const InnerChildInfo = styled.div`
    padding: 15px;
    width: auto;
    height: auto;
    margin-left: 5px;
    white-space: pre-wrap;
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 900px) {
        width: auto;
      };
      @media (max-width: 425px) {
        margin-bottom: 5%;
      }
`;
const ChildTitle = styled.h3`
    
`;
const ImgViewer = styled.div`
    display: flex;
    justifyContent: space-around; 
`;

//Button Styles
const GithubButton = styled.button``;
const PreviewButton = styled.button``;

//List Styles
const ListParent = styled.div`
    display: flex
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
                <ListParent>
                    <ul>
                        {props.projectInfo.SkillsUsed.map(x => <li key={x}>{x}</li>)}
                    </ul>
                    <ul>  
                        {props.projectInfo.MoreSkillsUsed.map(x => <li key={x}>{x}</li>)}
                    </ul>
                </ListParent>
            <ImgViewer>
                <p>img1</p>
                <p>img2</p>
                <p>img3</p>
            </ImgViewer>
        </InnerChildAbout>
        <InnerChildInfo>
            <h4>My Role</h4>
                <p>{props.projectInfo.Role}</p>
            <h4>Challenges</h4>
                <p>{props.projectInfo.Challenges}</p>    
            <h4>Solutions</h4>    
                <p>{props.projectInfo.Solutions}</p>
            <h4>Notable Features</h4> 
                <ListParent>
                    <ul>
{props.projectInfo.Features.map(x => <li>{x}</li>)}
                    </ul>
                </ListParent>
        </InnerChildInfo>
        </ProjectMain>
);

export default Project;


