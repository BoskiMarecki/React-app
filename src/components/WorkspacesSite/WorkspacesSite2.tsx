import React,{FC, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { Resume } from '../Resume/Resume';

type PushActualSite = ReturnType<typeof pushActualSite>;

const Wrapper = styled.div`
    width: 1200px;
`;

const TitleWrapper = styled.div`
    width: 100%;
    box-shadow: 0 0 4px grey;
    border-radius: 5px;

`;
const TitleImg = styled.img`
    width:100%;
    height: 250px;
`;
const TitleDiv= styled.div`
    padding:10px;
    display: flex;
`;

const TitleIcon = styled.img`
    width:80px;
    padding:15px;
`;

const Title = styled.h2`
    text-align:left;
    color: #232c47;
`;
const TitleText = styled.p`
    font-size:20px;
    text-align:left;
    color:#96a5b7;
`;

const SettingsIcon= styled.img`
    width:30px;
    padding-top:20px;
`;
const WorkingWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    
`;
const WorkingBox = styled.div`
    width:300px;
    box-shadow: 0 0 4px grey;
    border-radius: 5px;
    padding:10px;
`;
const WorkingBoxTitle = styled.p`
    text-align:left;
    color: #232c47;
    font-size: 20px;
`;
const WorkingBoxIcon = styled.img`
    width:60px;
    display:flex
`;
const WorkingBoxText = styled.p`
    text-align:left;
    color: #232c47;
    font-size: 18px;
`;
const WorkingBoxBackgroundImg = styled.img`
    z-index: -10;
    opacity: 0.2;
    position: absolute;
    width:150px;
`;

interface IWorkspacesSite{
    user:{
        id: number;
    }
}

export const WorkspacesSite2: FC<IWorkspacesSite> =props=>{
    
    const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: "Group Norms",
      icon: "../Media/icons/book.svg"
  }))
  },[dispatch]);

  const  {photoList} = useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

    const title="Group Norms";
    const icon = "../Media/icons/book.svg";
    const imagine= photoList[34].url;
return(
    <Wrapper>
        <TitleWrapper>
            <TitleImg src={imagine}/>
            <TitleDiv>
                    <TitleIcon src={icon}/>
                
                <div>
                    <Title>{title}</Title>
                    <TitleText>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new of have poor memory.</TitleText>
                </div>
                <div>
                    <SettingsIcon src='../Media/icons/cog.svg'/>
                </div>
                
            </TitleDiv>
        </TitleWrapper>
        <Title>Start Working on corporate matters</Title>
        <WorkingWrapper>
            <WorkingBox>
                <WorkingBoxBackgroundImg src='../Media/icons/entities.svg'/>
                <WorkingBoxIcon src='../Media/icons/entities.svg'/>
                <WorkingBoxTitle>Explore your <b>entities</b></WorkingBoxTitle>
                <WorkingBoxText>Take a few minutes to look at the most important elements and specificities of your entities</WorkingBoxText>
            </WorkingBox>
            <WorkingBox>
                <WorkingBoxBackgroundImg src='../Media/icons/structure.svg'/>
                <WorkingBoxIcon src='../Media/icons/structure.svg'/>
                <WorkingBoxTitle>Structure the <b>ownership</b></WorkingBoxTitle>
                <WorkingBoxText>Get a clear view of the ownership by looking at the relations between individuals and entities</WorkingBoxText>
            </WorkingBox>
            <WorkingBox>
                <WorkingBoxBackgroundImg src='../Media/icons/calendar.svg'/>
                <WorkingBoxIcon src='../Media/icons/calendar.svg'/>
                <WorkingBoxTitle>Define the <b>calendar</b></WorkingBoxTitle>
                <WorkingBoxText>Prepare future events by creating detailed plans around the life of your entity</WorkingBoxText>
            </WorkingBox>


        </WorkingWrapper>

        <Resume user={props.user}/>
    </Wrapper>
)
}