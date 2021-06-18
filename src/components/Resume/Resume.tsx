import React, { ChangeEvent, FC, useState } from 'react';
import useDropdown from 'react-dropdown-hook';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { ISingleComment } from '../../entities/comments';
import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import './Resume.css';

const Wrapper=styled.div`
    width: 1200px;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
    margin-bottom: 50px;
    clear:both;
`;
const InnerWrapper=styled.div`
    width:100%;
    align-items: center;
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
    width:250px;
    display: inline-block;
    margin-right:40px;
`;
const Filter = styled.input`
    width: 95%;
    font-size: 20px;
    padding: 5px;
`;

const Followed=styled.div`
    padding-top:6px;
    width: 150px;
    align-items: center;
`;

const FolMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 20px;
    justify-content: space-between;
    color:${Colors.blue};
    align-items: center;
    cursor: pointer;
`;

const SinglePost=styled.div`
    width:100%;
    box-shadow: 0 0 4px grey;
    border-radius: 5px;
    text-align:left;
    padding-bottom:10px;
`;

const PostTitle=styled.h2`
    padding-top: 10px;
    color:${Colors.blue};
    padding-left:10px;
`;

const PostContent=styled.p`
    padding-left:10px;
    width:95%;
    color:${Colors.gray};
`;

const PostInfo=styled.div`
    display:flex;
    margin-left:10px;
    margin-top:10px;
    color:${Colors.gray};
`;

const Logo=styled.img`
    height:30px;
    margin-right:10px;
    border-radius:50%;
`;
const Icon=styled.img`
    margin-right:10px;
`;
const Company=styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Category=styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Update= styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    color:grey;
`;

const Dot = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:15px;
    margin-right:15px;
`;

const Site=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color:${Colors.blue};
`;

const InnerSite=styled.div`
    display: flex;
    width:240px;
`;

const SitePrev=styled.h3`
    padding-right:10px;
    cursor: pointer;
`;
const SiteNumber=styled.div`
    padding:5px;
    font-weight:bold;
    padding-top:20px;
    cursor: pointer;
`;

const SiteNext=styled.h3`
    padding-left:10px;
    cursor: pointer;
`;
const ListFol=styled.div`
    position:absolute;
    background: white;
    width:130px;
    box-shadow: 0 0 4px grey;
    text-align:left;
    padding-left:10px;
    cursor: pointer;
`;



let siteNumber=1;
interface IResume{
    user:{
        id: number,
    }
    
}
export const Resume: FC<IResume> = props=>{

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
    }))
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))
  const { commentsList }= useSelector<IState, ICommentsReducer>(globalState => ({
    ...globalState.comments
  }))


  


function getCommentUser(post: ISingleComment){
    if(post !== undefined){
        for (let i = 0; i < usersList.length; i++) {
            const el = usersList[i];
            if (el.id=== post.postId) {
                return usersList[i].name
            }
            
        }
    }
}

function getCommentUserCompany(post: ISingleComment){
    if(post !== undefined){
        for (let i = 0; i < usersList.length; i++) {
            const el = usersList[i];
            if (el.id=== post.postId) {
                return usersList[i].company.name
            }
            
        }
    }
}

function rand( min: number, max: number ){
      if ( min > max ){
        let tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

const [inputText, setInputText] = useState<string>('');
const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    const text= e.target.value;
    setInputText(text);
}


const [actualPost, setActualPost] = useState(commentsList)

let postUser: Array<ISingleComment>=[];
function myComment(){
    postUser=[];
        for (let i = 0; i < commentsList.length; i++) {
            const el = commentsList[i];
            if(el.postId===props.user.id){
                postUser.push(el);
            }
        }
    setActualPost(postUser)
    doThis()
}

let showComments = commentsList;
if(actualPost.length>0){
    showComments = actualPost;
}

let post: Array<object>=[];
   function doThis(){
       post=[];
       
        for (let i = 0; i < 10; i++) {
            if(i===showComments.length){
                break
            }
            const NewPost= showComments[i+(siteNumber-1)*10];

            const Post={
                title: NewPost?NewPost.name:'',
                body: NewPost?NewPost.body:'',
                id: NewPost?NewPost.id:1
            }
            const User= {
            name: getCommentUser(NewPost),
            company: getCommentUserCompany(NewPost)

            }
                     

                post.push(
                <div>
                {Post.title.toLowerCase().includes(inputText.toLowerCase())&& <SinglePost>
                            <PostTitle>
                                {Post.title}
                            </PostTitle>
                            <PostContent>
                                {Post.body}
                            </PostContent>
                            <PostInfo>
                                <Company>
                                    <Logo src={photoList[i]? photoList[i].url:" "}/>
                                <p>{User.company}</p> 
                                </Company>
                                <Dot>
                                    <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                                </Dot>
                                <Category>
                                    <Icon src="../Media/icons/entities2.svg" alt=""/>
                                    <p>Corporate</p> 
                                </Category>
                                <Dot>
                                    <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                            </Dot>
                                <Update>
                                    Update {rand(1, 20)} days ago by {User.name}
                                </Update>
                            </PostInfo>
                        </SinglePost>}</div>
                )
        }
    if (showComments.length<10) {
        const siteNumber = document.querySelector('.siteSection')
        siteNumber?.classList.add('none')
    }else{
        const siteNumber = document.querySelector('.siteSection')
        siteNumber?.classList.remove('none')
    }
   }
doThis()

    
   function nextSite() {
        
        siteNumber++;
        if(siteNumber===postsOnScreen-1){
            document.getElementById('next')?.classList.add('none')
        }
        if(siteNumber===2){
            document.getElementById('prev')?.classList.remove('none')
            document.getElementById('innerSite')?.classList.remove('paddingLeft')
        }
        
       doThis();
       prevSiteNumber();
       nextSiteNumbers();
       
   }

   function prevSite(){
        
        siteNumber--;
        if (siteNumber===postsOnScreen-2) {
            document.getElementById('next')?.classList.remove('none')
        }
        if (siteNumber===1) {
            document.getElementById('prev')?.classList.add('none')
            document.getElementById('innerSite')?.classList.add('paddingLeft')
        }
        doThis();
        prevSiteNumber();
        nextSiteNumbers();
        
   }
const postsOnScreen = showComments.length/10;
   let site :Array<object>=[];
   let sitePrev :Array<object>=[];

   const [nextNumber, setNextNumber] = useState(site)
   const [prevNumber, setPrevNumber] = useState(sitePrev)
   

   function show(){
      if(siteNumber!==1){
        document.getElementById('prev')?.classList.remove('none')
       }else{
        document.getElementById('prev')?.classList.add('none')
       }
       prevSiteNumber();
       nextSiteNumbers();
   }

    function actualSiteNumber(){
    const site : object=<SiteNumber className='site actual'>{siteNumber}</SiteNumber>
    return site;
   }

   function prevSiteNumber(){
    sitePrev=[]
        for (let i = siteNumber-3; i < siteNumber; i++) {
            if(i<=0)
                 continue
            sitePrev.push(<SiteNumber onClick={
                // eslint-disable-next-line no-loop-func
                ()=>{
                    siteNumber=i;
                    doThis();
                    show();
                 }} className='site'>{i}</SiteNumber>)
                 
        }
        setPrevNumber(sitePrev)

   }

   

   function nextSiteNumbers(){
       site=[]
       
        for (let i = siteNumber+1; i < siteNumber+4; i++) {
           
            site.push(<SiteNumber onClick={
                // eslint-disable-next-line no-loop-func
                ()=>{
                    siteNumber=i;
                    doThis();
                    show();
                 }} className='site'>{i}</SiteNumber>)
        }
        setNextNumber(site)
   }
        

    return(
        <Wrapper onLoad={()=>{setActualPost(commentsList);nextSiteNumbers();prevSiteNumber()}}>
            <InnerWrapper>
                <Navigate>
                    
                    <SectionName>
                        Resume your work
                    </SectionName>
                    <div style={{display:'flex'}}>
                        <InputWrapper>
                            <Filter type="text" placeholder="Filter by title..." value={inputText} onChange={inputHandler}/>
                            <img className="searchIcon" src="./Media/icons/search.png" alt=""/>
                    </InputWrapper>
                    <Followed ref={wrapperRef}>
                         <FolMenu onClick={toggleDropdown}>
                            <div>
                                <img style={{height:'20px'}} src='../Media/icons/followed.svg' alt=""/>
                            <span style={{paddingLeft: "10px"}}>Followed</span> 
                            </div>
                            
                            <div> <img style={{paddingRight: "10px", fill:"blue"}} src="./Media/icons/arrow-down.svg" alt=""/></div>
                        
                        </FolMenu>
                        <div>
                            {dropdownOpen &&
                                <ListFol>
                                    <p onClick={()=>{setActualPost(commentsList)}}>Wszystkie</p>
                                    <p onClick={()=>{myComment();}}>Moje</p>
                                </ListFol>
                            }</div>
                    </Followed>
                    </div>
                    
                </Navigate>
                
           {doThis()}
           {post}
           
            <div className="siteSection">
                <Site >
                    <InnerSite  >
                    <SitePrev id="prev" className='none' onClick={prevSite}>
                        Previous
                    </SitePrev>
                    
                    {prevNumber}
                    {actualSiteNumber()}
                    {nextNumber}
                
                    <SiteNext id="next" onClick={nextSite}>
                        Next
                    </SiteNext>
                   </InnerSite>
                </Site> 
            </div>
                

            </InnerWrapper>
        </Wrapper>
    )
}


