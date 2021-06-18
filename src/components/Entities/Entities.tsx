import React,{ChangeEvent, FC, useEffect, useState} from 'react';
import useDropdown from 'react-dropdown-hook';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { rand } from '../MainPage/MainPage';
import './Entities.css';
import { FilterSection } from './Filter';

type PushActualSite = ReturnType<typeof pushActualSite>;


const Wrapper=styled.div`
    width: 1200px;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
`;
const InnerWrapper=styled.div`
    width:100%;
    align-items: center;
`;
const Title=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px;
`;
const Navigate=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px;
`;

const SectionName=styled.h2`
    text-align: left;
    color:grey;
    padding-left:15px;
    margin-bottom:0px;
    justify-content: center;
    align-items: center;
 `;
 const InputWrapper = styled.div`
    text-align: left;
    width:180px;
    display: inline-block;
    margin-right:40px;
`;
const Filter = styled.input`
    width: 95%;
    font-size: 18px;
    padding: 5px;
`;

const Followed=styled.div`
    padding:6px;
    width: 150px;
    align-items: center;
    border: 2px solid ${Colors.blue};
    border-radius: 5px;
`;

const FolMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 18px;
    justify-content: space-between;
    color:${Colors.blue};
    align-items: center;
`;

const Line = styled.div`
    width: 1px;
    height: 27px;
    background-color:grey;
    margin-left: 10px;
    margin-right: 10px;
`;

const LeftIcon= styled.div`
    display:flex;
    color: grey;
`;
const Dot = styled.div`
    padding-top: 3px;
    text-align: center;
    padding-left: 10px;
`;
const DotImg = styled.img`
    width: 5px;
    padding-left: 4px;
    fill:gray;
`;

const FilterLeft=styled.div`
    padding-top: 3px;
    margin-left:10px;
    cursor: pointer;
`;

const Sort= styled.div`
    padding-top: 3px;
    cursor: pointer;
`;
const Full= styled.div`
    padding-top: 3px;
    cursor: pointer;
`;
const Share= styled.div`
    padding-top: 3px;
    cursor: pointer;
`;

const All=styled.div`
    padding:6px;
    width:80px;
    align-items: center;
    box-shadow: 0 0 4px grey;;
    border-radius: 5px;
    background: #eaecf5;
`;
const AllMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 18px;
    justify-content: space-between;
    color:${Colors.blue};
    align-items: center;
`;

const AllBox=styled.div`
    width:100%;
    display:block;
    clear:both;
`;
const SingleBox=styled.div`
    text-align:left;
    display:flex;
    box-shadow: 0 0 4px grey;
    border-radius: 5px;
    float:left;
    margin:5px;
    `;

const BoxImg=styled.img`
    width:25%;
    margin:5px;
    border-radius: 5px;
`;

const BoxText=styled.div`
`;

const BoxTitle=styled.h3`
    color:${Colors.blue};
    font-size:100%;
`;
const BoxCompany=styled.p`
    color:grey;
    margin-bottom:0;
    margin-top:3px;
    font-size:10px;
`;

const Layout = styled.div`
    cursor: pointer;
`;

export const Entities: FC = ()=>{

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
    }))    
 const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Entities',
      icon: '../Media/icons/entities.png'
  }))
  },[dispatch]);


const [inputText, setInputText] = useState<string>('');
const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    const text= e.target.value;
    setInputText(text);
}


  let post: Array<object>=[];
  function draw() {
      
      for (let i = 0; i < 24; i++) {
          let num=rand(0,9);
          let title = usersList[num]?usersList[num].company.name:" ";
          post.push(
          <div className='SingleBox'>
           {title.toLowerCase().includes(inputText.toLowerCase())&&
                    <SingleBox className='box' >
                        <BoxImg src={photoList[i]? photoList[i].url:" "} />
                        <BoxText>
                            <BoxTitle>
                                {title}
                            </BoxTitle>
                            <BoxCompany>
                                {usersList[num]?usersList[num].address.suite:" "}, {usersList[num]?usersList[num].address.street:" "}, {usersList[num]?usersList[num].address.city:" "}
                            </BoxCompany>
                        </BoxText>
                    </SingleBox>}
                    </div>
                    )
                    
                
      }
      return post;
  }

  function layout() {


      let boxList=document.querySelectorAll('.box');
      let layout =document.querySelector('.laText');
      let mosaic = document.querySelector('.mosaicImg');
      let list = document.querySelector('.listImg')
      boxList.forEach(box => {
          if (box.classList.contains('list')) {
              box.classList.remove('list');
          }else{
              box.classList.add('list')
              
          }
          
      });

      if(layout?.innerHTML==="List"){
        list?.classList.add('laBackground');
        mosaic?.classList.remove('laBackground');
        layout.innerHTML="Mosaic";
          
      }else if (layout?.innerHTML==="Mosaic") {
          mosaic?.classList.add('laBackground');
          list?.classList.remove('laBackground');
          layout.innerHTML="List";
      }
      
  }
  function full(){
    let board = document.querySelector('#entities')
    board?.classList.toggle('full');
    const iconFull = document.querySelector('#fullscreen')
    iconFull?.classList.toggle('none')
    const iconSmall = document.querySelector('#smallscreen')
    iconSmall?.classList.toggle('none')
  }

  function copy(){
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    let url=window.location.href;
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("skopiowano link do schowka");
  }
  
    return(
    <Wrapper>
            <InnerWrapper id="entities">
                <Title>
                    <SectionName>
                        Entities
                        <img style={{paddingLeft:'10px'}} src="../Media/icons/cog.svg" alt=""/>
                    </SectionName>
                    <Layout onClick={layout}>
                        <div className="layout">
                            <img className="mosaicImg " src="../Media/icons/mosaic.svg" alt=""/>
                            <span className="laText">Mosaic</span> 
                            <img className="listImg laBackground" src="../Media/icons/list.svg" alt=""/>
                        </div>
                    </Layout>
                </Title>
                <Navigate>
                    <LeftIcon ref={wrapperRef}>
                        <All>
                            <AllMenu>
                            <div>
                                <img style={{height:'15px'}} src='../Media/icons/followed.svg' alt=""/>
                            <span style={{paddingLeft: "10px"}}>All</span> 
                            
                            </div>
                            
                            <div> <img style={{paddingRight: "10px", fill:"blue"}} src="./Media/icons/arrow-down.svg" alt=""/></div>
                            
                            </AllMenu>
                        </All>
                    
                        <Dot>
                            <DotImg src="../Media/icons/dot.svg" alt="" />
                            <DotImg src="../Media/icons/dot.svg" alt="" />
                            <DotImg src="../Media/icons/dot.svg" alt="" />
                        </Dot>
                        <Line/>
                        <Sort>
                            <img src="../Media/icons/sort.svg" className='leftIcon' style={{width:'15px'}} alt="" />
                            Sort
                        </Sort>
                        <FilterLeft onClick={toggleDropdown}>
                            <img src="../Media/icons/filter.svg" className='leftIcon' style={{width:'15px'}} alt="" />
                            Filter
                             
                        </FilterLeft>
                        {dropdownOpen &&
                             <FilterSection/>}
                        <Line/>
                        <Full onClick={full}>
                            <img id='fullscreen' src="../Media/icons/full.svg" className='leftIcon' style={{width:'15px'}} alt="" />
                            <img id='smallscreen' src="../Media/icons/small.svg" className='leftIcon none' style={{width:'15px'}} alt="" />
                        </Full>
                        <Line/>
                        <Share onClick={copy}>
                            <img src="../Media/icons/share.svg" className='leftIcon' style={{width:'18px'}} alt="" />
                            Share
                        </Share>
                    </LeftIcon>
                    <div style={{display:'flex'}}>
                        <InputWrapper>
                            <Filter type="text" placeholder="Search..." value={inputText} onChange={inputHandler}/>
                            <img className="searchIcon" src="./Media/icons/search.png" alt=""/>
                    </InputWrapper>
                    <Followed >
                         <FolMenu >
                            <div>
                                <img style={{height:'15px'}} src='../Media/icons/followed.svg' alt=""/>
                            <span style={{paddingLeft: "10px"}}>Followed</span> 
                            </div>
                            
                            <div> <img style={{paddingRight: "10px", fill:"blue"}} src="./Media/icons/arrow-down.svg" alt=""/></div>
                        
                        </FolMenu>
                    </Followed>
                    </div>
    
                </Navigate>
                <AllBox>
                    {draw()}
                </AllBox>

            </InnerWrapper>
        </Wrapper>
)
}