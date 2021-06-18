import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {Link} from "react-router-dom";

import './LeftMenu.css'

const InnerWrapper = styled.div`
    display: block;
    
`;

const ProfileWrapper =styled.div`
    width: 280px;
    height:280px;
    background: ${Colors.white};
    margin-top: 20px;
    border-radius:5px;
    box-shadow: 0 0 1em grey;
    margin-left: 20px;
    align-items: center;
    padding-bottom: 10px;

`;

const Profile=styled.div`
    text-align:center;
    padding:15px;
`;


const LeftIcon =styled.div`
    width: 280px;
    height:300px;
    margin-top: 20px;
    margin-left:20px;
    padding: 5px;
    display: block;
    
`;
const EditLink=styled(Link)`
    text-decoration: none;
    font-size:20px;
    padding-top: 5px;
    padding-left: 7px;
    color:${Colors.darkBlue};
    display: block;
    
`;

const ProfileLink = styled(Link)`
    text-decoration: none;
`;

const YourWrapper = styled.div`
    width:260px;
    padding: 10px;
    justify-content:space-between;
    display:inline-flex;
    
`;
const Name=styled.div`
    color:${Colors.blue};
    font-size:20px;
`;

const ProfilePic=styled.img`
    width: 80px;
    border-radius: 50%;
`;

const JobTitle=styled.div`
    color: gray;
`;

interface ILeftMenu{
    user:{
        name:string;
        jobTitle: string;
        company: string;
        picture:string;
    }
    
}

export const LeftMenu: FC<ILeftMenu> =props=>{
    return(
            <InnerWrapper>
                <ProfileWrapper>
                    <ProfileLink to="/profile">
                    <Profile>
                       
                        <ProfilePic src={props.user.picture} />
                        <Name>{props.user.name}</Name>
                        <JobTitle>{props.user.jobTitle} - {props.user.company}</JobTitle>
                    </Profile>
                    </ProfileLink>
                    <div className="line"></div>
                    <YourWrapper>
                        <EditLink to="/">
                            <img className="iconLink" src="./Media/icons/network.png" alt=""/>
                            <span className="textLink">Your network</span>
                        </EditLink>
                        <div><img className="borderIcon" src="./Media/icons/user-plus.png" alt=""/></div>
                    </YourWrapper>
                    <YourWrapper>
                        <EditLink to="/">
                            <img className="iconLink" src="./Media/icons/publications.png" alt=""/>
                            <span className="textLink">Your Publications</span>
                        </EditLink>
                        <div><img className="borderIcon" src="./Media/icons/plus.png" alt=""/></div>
                        
                    </YourWrapper>
                   
                </ProfileWrapper>
                <LeftIcon>
                    <YourWrapper>
                        <EditLink to="/publications">
                            <img className="iconLink" src="./Media/icons/publications.png" alt=""/>
                            <span className="textLink">Publications</span>
                        </EditLink>
                       
                    </YourWrapper>
                    <YourWrapper>
                        <EditLink to="/ecosystem">
                            <img className="iconLink" src="./Media/icons/ecosystem.png" alt=""/>
                            <span className="textLink">Ecosystem</span>
                        </EditLink>
                        
                    </YourWrapper>
                    
                    <YourWrapper>
                        <EditLink to="/entities">
                            <img className="iconLink" src="./Media/icons/entities2.png" alt=""/>
                            <span className="textLink">Entities</span>
                        </EditLink>
                    </YourWrapper>
                    
                </LeftIcon>
            </InnerWrapper>
    )
}