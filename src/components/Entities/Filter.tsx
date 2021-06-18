import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid grey;
    border-radius:5px;
    text-align: left;
    position:absolute;
    width:750px;
    background-color:white;
    padding:10px;
`;

const X = styled.img`
    width:20px;
    margin-right:10px;
    
`;

const Arrow =styled.img`
    padding-left:10px;
`;

const SingleLine = styled.div`
    margin-left:10px;
    display: flex;
    color: black;
`;
const SingleLineLast = styled.div`
    margin-left:10px;
    display: flex;
    color: blue;
`;

const Input= styled.input`
    margin-top:10px;
    margin-left:20px;
    height:30px;
    background-color: #cdcdcd;
    border-radius: 5px;
    border: none;
`;



export const FilterSection : FC =()=>{
    return(
        <Wrapper>
            <SingleLine>
                <p style={{color:'gray'}}>Rows are filtered by the following conditions starting from the top</p>
            </SingleLine>
            <SingleLine>
               <X src="../Media/icons/x.svg" alt="" /> 
               <p>Where</p>
               <p style={{paddingLeft:'20px'}}>Company</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <p style={{paddingLeft:'20px'}}>Contains</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <Input type="text" placeholder="Type..."/>
            </SingleLine>
            <SingleLine>
               <X src="../Media/icons/x.svg" alt="" /> 
               <p>Where</p>
               <p style={{paddingLeft:'20px'}}>Status</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <p style={{paddingLeft:'20px'}}>Is</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <Input type="text" placeholder="Type..."/>
               <p style={{paddingLeft:'20px'}}>In</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <Input type="text" placeholder="Entity..."/>
            </SingleLine>
            <SingleLine>
               <X src="../Media/icons/x.svg" alt="" /> 
               <p>Where</p>
               <p style={{paddingLeft:'20px'}}>Status</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <p style={{paddingLeft:'20px'}}>End before</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <Input type="text" placeholder="Date"/>
               <p style={{paddingLeft:'20px'}}>In</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
               <Input type="text" placeholder="Entity..."/>
            </SingleLine>
            <SingleLineLast>
                <X src="../Media/icons/plus.svg" alt="" />
                <p>Add filter</p>
                <p style={{paddingLeft:'20px'}}>choose property</p>
               <Arrow src="../Media/icons/arrow-down.svg"/>
            </SingleLineLast>
           
           
        </Wrapper>
    )
}