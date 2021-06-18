import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import {Colors} from '../../styledHelpers/Colors';

import './Navbar.css'


import { ExpandedMenu} from './ExpandedMenu';
import { IActualSiteReducer } from '../../reducers/actualSiteReducers';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    display: inline-flex;
    padding-top:12px;
    padding-bottom:10px;
    background: ${Colors.white};
    box-shadow: 0px 0px 5px gray;
    font-family: 'Nunito', sans-serif;
`;


const RightIcon = styled.div`
    display: inline-box;
    right: 20px;
    position:absolute;
`;
const InputWrapper = styled.div`
    width:30%;
    display: inline-block;
    position:absolute;
    left:35%;
`;

const ExpMenu = styled.div`
    width: 250px;
    position: absolute;
    left:10%;
    padding-top:5px;
`;

const NavMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 20px;
    justify-content: space-between;
    cursor: pointer;
`;

interface INavbar{
    user:{
        name:string;
        picture:string;
    }
  
}

export const Navbar: FC<INavbar> = props=>{
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();


    const { site }= useSelector<IState, IActualSiteReducer>(globalState => ({
    ...globalState.actualSite,
  }))
 
  
  const Site={
        name: site.name,
        icon: site.icon
  }

    return(
            <Wrapper>
                    <Link to='/'><img className="logo" src="./Media/logo.png" alt=""/></Link>
                    <ExpMenu ref={wrapperRef}>
                        <NavMenu onClick={toggleDropdown}>
                            <div>
                                <img  src={Site.icon} alt=""/>
                            <span style={{paddingLeft: "10px"}}>{Site.name}</span> 
                            </div>
                            
                            <div> <img style={{paddingRight: "10px"}} src="./Media/icons/arrow-down.png" alt=""/></div>
                        
                        </NavMenu>
                        <div>
                            {dropdownOpen &&
                            <ExpandedMenu name ={props.user.name} profilePicture={props.user.picture} />}</div>
                    </ExpMenu>

                    <InputWrapper>
                        <input className="search" type="text" placeholder="Search Legalcluster"/>
                        <img className="searchIcon" src="./Media/icons/search.png" alt=""/>
                    </InputWrapper>
                    <RightIcon>
                        <Link to='/'><img className="icon" src="./Media/icons/house.png" alt=""/></Link>
                        <div className="iconShadow">
                        <div className="iconNumber">5</div>
                            <img className="icon" src="./Media/icons/comments.png" alt=""/>
                            
                        </div>
                    <div className="iconShadow">
                        <div className="iconNumber">3</div>
                            <img className="icon" src="./Media/icons/bell.png" alt=""/>
                    </div>
                    
                    </RightIcon>
            </Wrapper>
        
    )
}