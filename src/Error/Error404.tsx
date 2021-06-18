import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { pushActualSite } from '../actions/actualSiteAction';


type PushActualSite = ReturnType<typeof pushActualSite>;

const Wrapper=styled.div`
width: 100%;
`;

const Imagine = styled.img``;

export const Error404: FC=()=>{
    const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: '404',
      icon: '../Media/icons/error.png'
  }))
  },[dispatch]);
    return (
        <Wrapper>
            <Imagine src="./Media/404.png" />
            
        </Wrapper>
    )
}