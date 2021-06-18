import React,{ChangeEvent, FC, useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Menu = styled.div`
 border: 1px solid grey;
 text-align: left;
 z-index:100;
 position:absolute;
 width:240px;
`;

const Section = styled.div`
background-color: white;
display:block;

`;
const Scroll= styled.div`
height:380px;
overflow-y: scroll;
overflow-x: hidden;
position: relative;
`;


const EditLink=styled(Link)`
text-decoration: none;
font-size:18px;
padding-top: 5px;
padding-left: 7px;
color: black;
display: block;
margin-top:2px;
`;

const NewSection = styled.p`
padding-left: 5px;
color:gray;
margin:3px;
`;

const Logout = styled.div`
text-align: center;
padding: 10px;
color:gray;
`;

const Profile = styled.div`
`;
const Name = styled.div`
padding-left: 10px;
font-size: 18px;
`;
const See=styled.div`
font-size:15px;
color:blue;
`;
const TextLink=styled.span`
padding-left: 10px;
`;
const ProfilePicture=styled.img`
  border-radius: 50%;
    width: 40px;
    margin-left: 5px;
    margin-right: 5px;
    float:left;
`;


interface IExpMenu{
    name: string,
    profilePicture: string;
}

export const ExpandedMenu: FC<IExpMenu>=props=>{

const [inputText, setInputText] = useState<string>('');
const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    const text= e.target.value;
    setInputText(text);
}

    return(
        <Menu>
            <Section>
                <input className="filter" type="text" value={inputText} placeholder="Filter..." onChange={inputHandler}/>
                <Scroll>
                   
                <NewSection>Platform</NewSection>
                  {'Home'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/"> <img src="./Media/icons/house.png" alt=""/><TextLink>Home</TextLink> </EditLink>}
                   {'Publication'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink  to="/publications" ><img src="./Media/icons/publications.png" alt=""/> <TextLink >Publications</TextLink>  </EditLink>}
                    {'People'.toLowerCase().includes(inputText.toLowerCase())&&<EditLink to="/people"> <img src="./Media/icons/people.png" alt=""/><TextLink>People</TextLink> </EditLink> }
                    
                   {'Entities'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/entities"><img src="./Media/icons/entities.png" alt=""/><TextLink>Entities</TextLink> </EditLink>}
                   {'Administration'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/administration"> <img src="./Media/icons/administration.png" alt=""/> <TextLink>Administration</TextLink></EditLink>}
                <NewSection>Workspaces</NewSection>
                   {'Client contract'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite4"> <img src="./Media/icons/contract.png" alt=""/><TextLink>Client contract</TextLink></EditLink>}
                   {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite0"> <img src="./Media/icons/contract.png" alt=""/><TextLink>Supplier contract</TextLink></EditLink>}
                   {'Corporate'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite1"> <img src="./Media/icons/entities2.png" alt=""/><TextLink>Corporate</TextLink></EditLink>}
                   {'Group Norms'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite2"> <img src="./Media/icons/book.png" alt=""/><TextLink>Group Norms</TextLink> </EditLink>}
                   {'Real estate contract'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite3"> <img src="./Media/icons/contract.png" alt=""/><TextLink>Real estate contract</TextLink></EditLink>}
                   {'Group Norms'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite2"> <img src="./Media/icons/book.png" alt=""/><TextLink>Group Norm</TextLink></EditLink>}
                   {'Group Norms'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite2"> <img src="./Media/icons/book.png" alt=""/><TextLink>Group Norm</TextLink></EditLink>}
                   {'Client contract'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite4"> <img src="./Media/icons/contract.png" alt=""/><TextLink>Client contract</TextLink></EditLink>}
                   {'Client contract'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite4"> <img src="./Media/icons/contract.png" alt=""/><TextLink>Client contract</TextLink></EditLink>}
                   {'Client contract'.toLowerCase().includes(inputText.toLowerCase())&& <EditLink to="/workspacesSite4"> <img src="./Media/icons/contract.png" alt=""/><TextLink>Client contract</TextLink></EditLink>}
                   

                    
                    </Scroll>
                    <div className="newSection"></div>
                <NewSection>Account</NewSection>
                    <Profile>
                        <EditLink to="/profile"> 
                        <ProfilePicture src={props.profilePicture}>
                            
                        </ProfilePicture>
                        <Name>
                            {props.name}
                            <See>
                                See profile
                            </See>
                        </Name>
                        </EditLink>
                    </Profile>
                    <EditLink to="/privacy" > <img src="./Media/icons/privacy.png" alt=""/><TextLink>Privacy</TextLink> </EditLink>
                    <EditLink to="/settings" > <img src="./Media/icons/settings.png" alt=""/><TextLink>Settings</TextLink></EditLink>
                <div className="newSection"></div>
                <Logout>
                    <img src="./Media/icons/logout.png" alt=""/>
                    <span style={{paddingLeft: "10px"}} >Logout</span>
                </Logout>
            </Section>
        </Menu>
        )
}





