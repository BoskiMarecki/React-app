import React, { FC, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components'
import Slider from 'react-slick';
import workspaces from './workspacesData'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { pushActualSite } from '../../actions/actualSiteAction';
import { Colors } from '../../styledHelpers/Colors';

type PushActualSite = ReturnType<typeof pushActualSite>;

const WorkspacesWrapper=styled.div`
  clear:both;
  width: 1200px;
  height: 300px;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:40px;
  
`;

const SectionName=styled.h2`
  text-align: left;
  color:grey;
  padding-left:15px;
  margin-bottom:0px;
 `;
const InnerWorkspaces=styled.div`
  width:93%;
  height:100%;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  
`;

const WorkspacesBox=styled.div`
  background-color:white;
  box-shadow: 0 0 4px grey;
  max-width:300px;
  height:250px;
  min-width:300px;
  max-height:250px;
  justify-content: center;
  align-items: center;
  text-align:left;
  margin: 10px;
  border-radius:5px;
  overflow: hidden;
  color:${Colors.gray};
`;

const BoxImg=styled.img`
  width:100%;
  height:45%;
`;
 
 const BoxIcon=styled.img`
 background-color:white;
 padding:20px;
 border-radius:5px;
 height:60px;
 margin-top:-45px;
 margin-left:10px;
 box-shadow: 0 0 3px grey;
 `;

 const BoxTitle=styled.h3`
 margin-top:10px;
 margin-left:5px;
 color:${Colors.darkBlue};
 `;

 const BoxLastUpdate=styled.p`
 margin-left:10px;
 `;

 const BoxInfo=styled.span`
 width:80%;
 justify-content:space-between;
  display:flex;
  margin-left:10px;
  margin-top:10px;
 `;

 const Dot = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:15px;
    margin-right:15px;
`;
 
const EditLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

function SampleNextArrow(props:any) {
  const { className,  onClick } = props;
  return (
     <div
      className={className}
      onClick={onClick}
    >
      <img src="../Media/icons/next.svg" alt=""/>
      </div>
  );
}

 function SamplePrevArrow(props:any) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src="../Media/icons/prev.svg" alt=""/>
      </div>
  );
}


export const Workspaces :FC =()=>{



  const editLinks = [];

  for(let i=0; i<7; i++) {
    editLinks.push(
      <EditLink  to={'/workspacesSite'+i} key={i} >
        <WorkspacesBox >
          <BoxImg src={workspaces[i+1].bgImage}/>
          <div style={{display:'flex'}}>
            <BoxIcon src={workspaces[i+1].iconUrl} />
            <BoxTitle>{workspaces[i+1].title}</BoxTitle>
          </div>
          <BoxInfo>
            <img src={workspaces[i+1].iconUrl} alt=""/>
            {workspaces[i+1].category}
            <Dot>
                  <img src={workspaces[i+1].iconUrl} style={{width:'4px'}} alt=""/>
            </Dot>
            <img src={workspaces[i+1].iconUrl} alt=""/>
            {workspaces[i].category}
          </BoxInfo>
          <BoxLastUpdate>Last update 12 days ago</BoxLastUpdate>
        </WorkspacesBox>
        </EditLink>
        )
  }

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 2,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };


    const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Home',
      icon: '../Media/icons/house.png',
  }))
  },[dispatch]);  


    return (

        <WorkspacesWrapper>
            <SectionName>
              Workspaces
            </SectionName>
        <InnerWorkspaces>
          <Slider {...settings}>
            {editLinks}
             </Slider>
            </InnerWorkspaces>
           </WorkspacesWrapper> 
    )
  }
